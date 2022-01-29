import Link from "next/dist/client/link";
import React from "react";

const Pagination = ({ numOfPage, page }) => {
  const hasPrevPage = page > 1;
  const hasNextPage = numOfPage > page;
  let pageList = [];
  for (let i = 1; i <= numOfPage; i++) {
    pageList.push(i);
  }

  return (
    <div className="my-4 mx-auto text-center py-8 rounded-sm">
      <ul>
        {hasPrevPage && (
          <Link href={`/page/${page - 1}`}>
            <a className="relative cursor-pointer inline-block h-10 w-10 hover:bg-primaryColor hover:text-white rounded-md font-primary  text-xs mr-4 text-textColor ">
              {" "}
              <li className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{`<<`}</li>
            </a>
          </Link>
        )}
        {pageList.map((p) => (
          <Link key={p} href={`/page/${p}`}>
            <a
              className={`w-10 h-10 inline-block hover:bg-primaryColor hover:text-white relative ${
                page == p
                  ? "paginationActive mr-4 rounded-md "
                  : "bg-white text-textColor mr-4 rounded-md"
              } `}
            >
              <li className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {p}
              </li>
            </a>
          </Link>
        ))}
        {hasNextPage && (
          <Link href={`/page/${page + 1}`}>
            <a className="absolute inline-block h-10 w-10 hover:bg-primaryColor hover:text-white rounded-md font-primary  text-xs mr-4 text-textColor ">
              {" "}
              <li className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{`>>`}</li>
            </a>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
