import React, { useContext } from "react";
import { CapsuleDataContext } from "../../../Contexts/CapsuleSearchData/CapsuleSearchData";

export default function Pagination() {
  const {
    postPerPage,
    paginateBack,
    paginateFront,
    currentPage,
    totalPosts,
    paginate,
  } = useContext(CapsuleDataContext);
  let pageNumbers = [];
  let pages = Math.ceil(totalPosts / postPerPage);
  for (let i = 0; i < pages; i++) {
    pageNumbers.push(i + 1);
  }
  return (
    <section className="pagination | flex flex-col border w-full mt-6 py-2">
      <p className="text-gray-600 text-right pr-8 mb-4">
        Showing{" "}
        <span className="font-medium text-black">
          {postPerPage >= totalPosts
            ? totalPosts
            : currentPage * postPerPage - 5}
        </span>{" "}
        {currentPage * postPerPage > totalPosts ? (
          ""
        ) : (
          <span className="font-medium text-black">
            <span className="font-base text-gray-600">to</span>{" "}
            {currentPage * postPerPage}
          </span>
        )}{" "}
        of <span className="font-medium text-black">{totalPosts}</span> results
      </p>
      <nav className="flex justify-center">
        <ul className="flex list-none">
          <li
            className={
              pages > 6 || currentPage === 1
                ? "page-item cursor-pointer pointer-events-none text-slate-300 px-6 py-1"
                : "page-item cursor-pointer px-6 py-1 hover:bg-gray-300 transition delay-75 ease-in-out "
            }
            onClick={paginateBack}
          >
            Prev
          </li>
          {pageNumbers.map((e, index) => (
            <li
              key={index}
              className={
                currentPage === index + 1
                  ? `page-item cursor-pointer px-4 py-1 bg-blue-500 text-white border-l transition delay-75 ease-in-out `
                  : `page-item cursor-pointer px-4 py-1 hover:bg-blue-500 hover:text-white border-l transition delay-75 ease-in-out`
              }
              onClick={() => paginate(index + 1)}
            >
              {e}
            </li>
          ))}
          <li
            className={
              pages === currentPage || pages === totalPosts
                ? "page-item cursor-pointer pointer-events-none text-slate-300 px-6 py-1"
                : "page-item cursor-pointer px-6 py-1 hover:bg-gray-300 transition delay-75 ease-in-out "
            }
            onClick={paginateFront}
          >
            Next
          </li>
        </ul>
      </nav>
    </section>
  );
}
