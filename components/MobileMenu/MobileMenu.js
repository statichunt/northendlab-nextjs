import React from "react";
import menubar from "../../config/menu.json";
import Link from "next/dist/client/link";
import Search from "components/Search/Search";

const MobileMenu = ({ isOpen, toggle, showSearchbar, setShowSearchBar }) => {
  const { header } = menubar;
  return (
    <div className={isOpen ? "block w-2/3 mx-auto" : "hidden"}>
      {/* {showSearchbar ? (
        <div className="w-2/3 ">
          <Search></Search>
        </div>
      ) : ( */}
      <nav
        className={
          showSearchbar
            ? "hidden"
            : "flex justify-between items-center  w-2/3 mx-auto "
        }
      >
        <ul className=" w-full">
          {header.map((menu) => (
            <Link href={menu.link} key={menu.menu}>
              <li className="mr-4 mt-8 px-8 py-4 text-textColor text-center block">
                {menu.class ? (
                  <i
                    key={menu.class}
                    className={`${menu.class} `}
                    onKeyDown={(e) =>
                      e.key == "Escape" && setShowSearchBar(false)
                    }
                    onClick={() => {
                      setShowSearchBar(true);
                    }}
                  ></i>
                ) : (
                  <a>{menu.menu}</a>
                )}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      {/* )} */}
    </div>
  );
};

export default MobileMenu;
