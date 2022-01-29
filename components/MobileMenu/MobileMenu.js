import React, { useState } from "react";
import menubar from "../../config/menu.json";
import Link from "next/dist/client/link";
import config from "../../config/config.json";

const MobileMenu = ({ isOpen, showSearchbar, toggle, setShowSearchBar }) => {
  const [isDropDown, setDropDown] = useState(false);
  const { showSearch } = config.perameter;
  const handleToggle = () => {
    setShowSearchBar(true);
    toggle();
  };
  const handleDropdown = () => {
    toggle();
    if (isDropDown) {
      setDropDown(!isDropDown);
    }
  };
  const { header } = menubar;
  return (
    <div className={isOpen ? "block w-full mx-auto" : "hidden"}>
      <nav
        className={
          showSearchbar
            ? "hidden"
            : "flex justify-between items-center bg-white  w-full mx-auto "
        }
      >
        <ul className=" w-full">
          {header.map((menu) =>
            showSearch && menu.class ? (
              <li
                key={menu.class}
                className="mr-4 mt-8 px-8 py-4 text-textColor text-center block cursor-pointer"
              >
                <i className={`${menu.class} `} onClick={handleToggle}></i>
              </li>
            ) : (
              <li
                onClick={menu.menu != "Pages" ? toggle : undefined}
                key={menu.menu}
                className="mr-4 mt-8 px-8 py-4 text-textColor text-center block"
              >
                <Link href={menu.link} key={menu.menu}>
                  <a
                    className="text-textColor text-center"
                    onClick={() => {
                      menu.submenu[0].page != "" && setDropDown(!isDropDown);
                    }}
                  >
                    {" "}
                    {menu.menu}
                  </a>
                </Link>
                <ul
                  className={
                    menu.submenu[0].page != "" && isDropDown
                      ? " block  subMenu  static  w-full "
                      : "  hidden "
                  }
                >
                  {menu.submenu[0].page != "" &&
                    menu.submenu.map((p) => (
                      <Link href={`/${p.pagelink}`} key={p.page}>
                        <a
                          className="text-black  "
                          onClick={handleDropdown}
                          key={p.page}
                        >
                          <li
                            key={p.page}
                            className="rounded-sm  px-2 py-1 capitalize hover:text-primaryColor text-textColor hover:font-extralight z-10 "
                          >
                            {p.page}
                          </li>
                        </a>
                      </Link>
                    ))}
                </ul>
              </li>
            )
          )}
        </ul>
      </nav>
      {/* )} */}
    </div>
  );
};

export default MobileMenu;
