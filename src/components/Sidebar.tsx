import React, { useState } from "react";
import { sidebarConfig } from "@/config/sidebarConfig";
import DownloadCard from "./DownloadCard";
import NavigationLinks from "./NavigationLinks";

interface Props {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: Props) => {
  // State to manage open/closed sections
  const [openSections, setOpenSections] = useState<{
    [key: string | number]: boolean;
  }>({});

  // Function to toggle the open state of a section
  const toggleSection = (sectionID: string | number) => {
    setOpenSections((prev) => ({ ...prev, [sectionID]: !prev[sectionID] }));
  };

  return (
    <aside
      className={`scroll sticky right-0 top-0 h-full max-h-screen overflow-y-scroll pt-20 shadow-lg transition-transform duration-200 sm:pt-0 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Button to open a Demat account */}
      <div className="relative flex items-center justify-center py-4">
        <button className="rounded-full bg-primary px-6 py-2.5 text-white transition-all duration-200 ease-in-out hover:bg-primary/90">
          <a href="https://www.indmoney.com/login" target="_blank">
            Open Demat Account
          </a>
        </button>
      </div>

      {/* Navigation Links */}
      <NavigationLinks
        sidebarConfig={sidebarConfig}
        toggleSection={toggleSection}
        openSections={openSections}
      />

      {/* Download Card */}
      <DownloadCard />
    </aside>
  );
};

export default Sidebar;
