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
            <a className="text-textColor rounded-md text-xs font-primary mr-4 px-4 py-2 hover:bg-primaryColor hover:text-white">{`<<`}</a>
          </Link>
        )}
        {pageList.map((p) => (
          <Link key={p} href={`/page/${p}`}>
            <a
              className={`px-4 py-2 hover:bg-primaryColor hover:text-white ${
                page == p && "bg-primaryColor text-white"
              }  mr-4 text-textColor rounded-md`}
            >
              {p}
            </a>
          </Link>
        ))}
        {hasNextPage && (
          <Link href={`/page/${page + 1}`}>
            <a className="hover:text-white rounded-md font-primary text-textColor text-xs mr-4 px-4 py-2 hover:bg-primaryColor">{`>>`}</a>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
