import Image from "next/image";
import Link from "next/dist/client/link";

import menubar from "../../config/menu.json";
import { useState } from "react";
import Search from "components/Search/Search";
import MobileMenu from "components/MobileMenu/MobileMenu";

const Header = ({ navbar, isOpen, toggle }) => {
  const [showSearchbar, setShowSearchBar] = useState(false);
  const [showSearchPosts, setShowSearchPosts] = useState();
  const [searchItem, setSearchItem] = useState(false);
  const handleSearchBar = (e) => {
    setShowSearchBar(true);
    setShowSearchPosts("");

    setSearchItem(true);
  };
  const handleSearch = () => {
    setSearchItem(false);

    if (showSearchbar) {
      setShowSearchBar(!showSearchbar);
    }
  };

  const { header, logo } = menubar;
  return (
    <>
      <header
        className={
          navbar
            ? "header top-0  sticky  z-40 bg-white shadow-lg"
            : "header sticky  z-40 top-0 "
        }
      >
        {showSearchbar ? (
          <div className="lg:w-2/3 w-full mx-auto ">
            <div className="flex items-center">
              <input
                type="text"
                onChange={(e) => {
                  setShowSearchPosts(e.target.value);
                }}
                className="w-full py-4 outline-none text-2xl"
                placeholder="Tyepe Here"
              />{" "}
              <a className="text-h4" onClick={handleSearch}>
                <i className="fas fa-times"></i>
              </a>
            </div>

            <Search showSearchPosts={showSearchPosts}></Search>
          </div>
        ) : (
          <nav className={"flex justify-between items-center  w-2/3 mx-auto "}>
            <div className="w-52 h-8 relative">
              <Link href="/">
                <Image
                  src={logo}
                  alt="logo"
                  layout="fill"
                  // objectFit="cover"
                ></Image>
              </Link>
            </div>
            <div className=" lg:hidden">
              <a onClick={toggle}>
                {isOpen ? (
                  <i className="fas fa-times"></i>
                ) : (
                  <i className="fas fa-bars"></i>
                )}
              </a>
            </div>
            <ul className=" hidden lg:block">
              {header.map((menu) =>
                menu.class ? (
                  <i
                    key={menu.class}
                    className={`${menu.class} `}
                    onClick={handleSearchBar}
                  ></i>
                ) : (
                  <Link href={menu.link} key={menu.menu}>
                    <a className="mr-4 px-8 py-4 text-textColor">
                      <li className="inline-block">{menu.menu}</li>
                    </a>
                  </Link>
                )
              )}
            </ul>
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
