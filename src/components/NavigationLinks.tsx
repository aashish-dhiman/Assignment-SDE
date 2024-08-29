import React from "react";
import CollapsibleList from "./CollapsibleList";
import { Section } from "@/types/types";

interface Props {
  toggleSection: (sectionID: string | number) => void;
  sidebarConfig: Section[];
  openSections: { [key: string]: boolean };
}

const NavigationLinks = ({
  sidebarConfig,
  openSections,
  toggleSection,
}: Props) => {
  return (
    <div className="divide-y-[1px]">
      {sidebarConfig?.map((section, sectionIndex) => (
        <React.Fragment key={sectionIndex}>
          {/* HEADING LEVEL 1: Collapsible Section */}
          <CollapsibleList
            toggleSection={toggleSection}
            section={section}
            openSections={openSections}
            customStyles="bg-white"
          />

          {/* Render items if the section is open */}
          {openSections[section.id] && (
            <div className="divide-y-[1px] divide-gray-300">
              {section?.items?.map((item, itemIndex) => (
                <div key={itemIndex}>
                  {"items" in item && item?.items ? (
                    <>
                      {/* HEADING LEVEL 2: Nested Collapsible Section */}
                      <CollapsibleList
                        toggleSection={toggleSection}
                        section={item}
                        openSections={openSections}
                        customStyles="bg-gray-100"
                      />

                      {/* Render nested items if the item section is open */}
                      {openSections[item?.id] && (
                        <div>
                          {/* HEADING LEVEL 3: Sub-items (URLs) */}
                          {item?.items?.map((subItem, subItemIndex) => (
                            <CollapsibleList
                              key={subItemIndex}
                              toggleSection={toggleSection}
                              section={subItem}
                              openSections={openSections}
                              customStyles="bg-white"
                            />
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    // Render CollapsibleList as URL link if the item doesn't have nested items
                    <CollapsibleList
                      toggleSection={toggleSection}
                      section={item}
                      openSections={openSections}
                      customStyles="bg-gray-100"
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default NavigationLinks;
