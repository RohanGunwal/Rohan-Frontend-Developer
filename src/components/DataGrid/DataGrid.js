import React, { useContext } from "react";
import Card from "../UI/Card/Card";
import { CapsuleDataContext } from "../../Contexts/CapsuleSearchData/CapsuleSearchData";

export default function DataGrid() {
  let {
    capsuleSearchData,
    capsuleData,
    flag,
    handleModalData,
    currentPage,
    postPerPage,
  } = useContext(CapsuleDataContext);

  let data = flag
    ? capsuleSearchData.length < postPerPage
      ? capsuleSearchData
      : capsuleSearchData.slice(
          currentPage * postPerPage - postPerPage,
          currentPage * postPerPage
        )
    : capsuleData.slice(
        currentPage * postPerPage - postPerPage,
        currentPage * postPerPage
      );

  return (
    <>
      {data.length ? (
        <section className="dataGrid | grid justify-items-center gap-y-12 mt-8 md:grid-cols-2 lg:grid-cols-3 transition-all delay-100 ease-in-out">
          {data.map((e, index) => (
            <Card data={e} key={index} handleModalData={handleModalData}></Card>
          ))}
        </section>
      ) : (
        <div className="text-3xl text-center">
          <p>
            <span className="text-red-400">No</span> data Found! 😵
          </p>
        </div>
      )}
    </>
  );
}
