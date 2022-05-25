import React from "react";
import { sidebarItems, WrapperSidebar } from ".";

export const Sidebar = ({ section = "", setSection = () => {} }) => (
  <WrapperSidebar className="d-flex flex-column align-items-start">
    <div className="container__image bg-black-50 text-center my-3">image</div>
    {sidebarItems.map((item, index) => (
      <div
        key={item.text}
        className={`sidebar-item d-flex align-items-center ${section === item.section ? "btb" : "br"} ${
          section === item.section ? "sidebar-item__active" : ""
        }
          ${!index && section !== sidebarItems[1].section ? "bt" : ""}
          ${
            index === sidebarItems.length - 1 &&
            !sidebarItems
              .slice(0, 2)
              .map((item) => item.section)
              .includes(section)
              ? "bb"
              : ""
          }
          `}
        onClick={() => setSection(item.section)}
      >
        <div className="d-flex">
          <i className={`${item.icon} pl-2 pr-2`} />
        </div>
          <span className="hidden span--text">{item.text}</span>
      </div>
    ))}
  </WrapperSidebar>
);
