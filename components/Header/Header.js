import Image from "next/image";
import Link from "next/dist/client/link";

import menubar from "../../config/menu.json";

const Header = ({ isBanner }) => {
  const { header, logo } = menubar;
  return (
    <>
      <nav
        className={
          isBanner
            ? "flex justify-between items-center py-8 w-full z-40 fixed"
            : "flex justify-between items-center py-8 w-full z-40 sticky top-0"
        }
      >
        <div className="w-52 h-8 relative">
          <Link href="/" passHref>
            <Image
              src={logo}
              alt="logo"
              layout="fill"
              // objectFit="cover"
            ></Image>
          </Link>
        </div>
        <ul>
          {header.map((menu) =>
            menu.class ? (
              <i key={menu.class} className={`${menu.class} `}></i>
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
    </>
  );
};

export default Header;
