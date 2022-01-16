import Link from "next/link";
import React from "react";

const Pagination = ({ numOfPage, page }) => {
  const havePevPage = page > 1;
  const hasNextPage = numOfPage > page;
  let pageList = [];
  for (let i = 1; i < numOfPage; i++) {
    pageList.push(i);
  }
  return (
    <div>
      <ul>
        {pageList.map((p) => (
          <Link key={p} passHref href={`/page/${p}`}>
            <a>{p}</a>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
