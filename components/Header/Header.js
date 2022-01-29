import Image from "next/image";
import Link from "next/dist/client/link";
import Navlogo from "../../config/config.json";
import menubar from "../../config/menu.json";
import { useState } from "react";
import Search from "components/Search/Search";
import MobileMenu from "components/MobileMenu/MobileMenu";

const Header = ({ navbar, isOpen, toggle, isFixed, blog }) => {
  const [showSearchbar, setShowSearchBar] = useState(false);
  const [showSearchPosts, setShowSearchPosts] = useState();
  const [searchItem, setSearchItem] = useState(false);

  const handleSearch = () => {
    setShowSearchPosts("");
    setSearchItem(!searchItem);

    if (showSearchbar) {
      setShowSearchBar(!showSearchbar);
    }
  };

  const { header } = menubar;
  const { logo } = Navlogo.perameter;

  return (
    <>
      <header
        className={
          navbar
            ? `${showSearchbar ? "header py-0" : "header"} top-0  ${
                isFixed ? "lg:fixed sticky" : "sticky"
              }  z-40 bg-white shadow-lg`
            : `${showSearchbar ? "header py-0 " : "header"} ${
                isFixed ? "lg:fixed sticky" : "sticky"
              }  z-40 top-0 `
        }
      >
        {showSearchbar ? (
          <div className=" w-full mx-auto  ">
            <div className="flex items-center w-full bg-white px-6">
              <input
                type="text"
                onChange={(e) => {
                  setShowSearchPosts(e.target.value);
                }}
                className="w-2/3 mx-auto py-8  outline-none text-2xl shadow-sm shadow-light px-6"
                placeholder="Tyepe Here"
                autoFocus
              />{" "}
              <a className="text-h4 cursor-pointer" onClick={handleSearch}>
                <i className="fas fa-times"></i>
              </a>
            </div>

            <div className="bg-dark opacity-80">
              <Search
                showSearchPosts={showSearchPosts}
                handleSearch={handleSearch}
                blog={blog}
              ></Search>
            </div>
          </div>
        ) : (
          <nav
            className={
              "flex justify-between items-center w-full px-2 xsm:px-8 xl:w-2/3 mx-auto "
            }
          >
            <Link href="/">
              <a>
                <div className="w-52 h-8 relative">
                  <Image
                    src={logo}
                    alt="logo"
                    layout="fill"
                    // objectFit="cover"
                  ></Image>
                </div>
              </a>
            </Link>

            <div className=" lg:hidden">
              <a onClick={toggle} className="text-4xl cursor-pointer">
                {isOpen ? (
                  <i className="fas fa-times"></i>
                ) : (
                  <i className="fas fa-bars"></i>
                )}
              </a>
            </div>
            <ul className=" hidden lg:block">
              {header.map((menu) => (
                <li className="inline-block group relative" key={menu.menu}>
                  <Link href={menu.link == "" ? "#" : menu.link}>
                    <a className="mr-4 px-8 py-4 text-textColor">{menu.menu}</a>
                  </Link>
                  <ul
                    className={
                      menu.submenu[0].page != ""
                        ? "  hidden group-hover:block subMenu"
                        : "hidden"
                    }
                  >
                    {menu.submenu[0].page != "" &&
                      menu.submenu.map((p) => (
                        <Link href={`/${p.pagelink}`} key={p.page}>
                          <a
                            key={p.page}
                            className="hover:text-primaryColor text-textColor hover:font-extralight z-10  "
                          >
                            <li
                              key={p.page}
                              className="rounded-sm 
                     hover:bg-light px-2 py-1 capitalize"
                            >
                              {p.page}
                            </li>
                          </a>
                        </Link>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
            <li className="mr-4 px-8 py-4 text-textColor  cursor-pointer hidden lg:inline-block">
              <i
                className="fas fa-search"
                onClick={() => {
                  setShowSearchBar(true);
                }}
              ></i>
            </li>
          </nav>
        )}

        <MobileMenu
          navbar={navbar}
          toggle={toggle}
          isOpen={isOpen}
          showSearchbar={showSearchbar}
          setShowSearchBar={setShowSearchBar}
        ></MobileMenu>
      </header>
    </>
  );
};

export default Header;
