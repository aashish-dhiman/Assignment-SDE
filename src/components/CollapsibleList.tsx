import { cn } from "@/lib/utils";
import { Section } from "@/types/types";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface Props {
  toggleSection: (sectionID: string | number) => void;
  section: Section;
  openSections: { [key: string]: boolean };
  customStyles: string;
}

const CollapsibleList = ({
  toggleSection,
  section,
  openSections,
  customStyles = "",
}: Props) => {
  return (
    <div
      // Toggle the section when clicked
      onClick={() => toggleSection(section?.id)}
      className={cn(
        "flex cursor-pointer items-center justify-between border-b-[1px] p-5",
        customStyles,
      )}
    >
      <div className="flex w-full items-center justify-between text-sm">
        {/* Render a link if the section has a URL, otherwise render the title */}
        {section?.url ? (
          <a href={section?.url} target="_blank" className="w-full">
            {section.title}
          </a>
        ) : (
          <span className="w-full">{section.title}</span>
        )}
      </div>
      {/* Render the arrow icon if the section is not a link */}
      {!section?.url && (
        <div>
          <MdOutlineKeyboardArrowDown
            className={`size-5 transform text-gray-400 transition-transform duration-200 ${
              // Rotate the icon if the section is open
              openSections[section?.id] ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      )}
    </div>
  );
};

export default CollapsibleList;
