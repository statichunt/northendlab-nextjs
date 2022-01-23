import React from "react";
import menubar from "../../config/menu.json";
import Link from "next/dist/client/link";

const MobileMenu = ({ isOpen, showSearchbar, toggle, setShowSearchBar }) => {
  const handleToggle = () => {
    setShowSearchBar(true);
    toggle();
  };
  const { header } = menubar;
  return (
    <div className={isOpen ? "block w-2/3 mx-auto" : "hidden"}>
      <nav
        className={
          showSearchbar
            ? "hidden"
            : "flex justify-between items-center  w-2/3 mx-auto "
        }
      >
        <ul className=" w-full">
          {header.map((menu) =>
            menu.class ? (
              <li
                key={menu.class}
                className="mr-4 mt-8 px-8 py-4 text-textColor text-center block"
              >
                <i className={`${menu.class} `} onClick={handleToggle}></i>
              </li>
            ) : (
              <Link href={menu.link} key={menu.menu}>
                <a>
                  {" "}
                  <li
                    key={menu.menu}
                    className="mr-4 mt-8 px-8 py-4 text-textColor text-center block"
                  >
                    {menu.menu}
                  </li>
                </a>
              </Link>
            )
          )}
        </ul>
      </nav>
      {/* )} */}
    </div>
  );
};

export default MobileMenu;
