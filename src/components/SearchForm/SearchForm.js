import React, { useContext, useEffect, useState } from "react";
import { CapsuleDataContext } from "../../Contexts/CapsuleSearchData/CapsuleSearchData";
import { DataContext } from "../../Contexts/DataContext/DataContext";
import DataGrid from "../DataGrid/DataGrid";
import Modal from "../UI/Modal/Modal";
import Pagination from "../UI/Pagination/Pagination";
import Spinner from "../UI/Spinner/Spinner";

export default function SearchForm() {
  const { capsuleData, loading } = useContext(DataContext);
  const [capsuleType, setCapsuleType] = useState("");
  const [capsuleStatus, setCapsuleStatus] = useState("");
  const [capsuleSearchData, setCapsuleSearchData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(6);

  let totalPosts = flag ? capsuleSearchData.length : capsuleData.length;

  const status = [],
    type = [];

  capsuleData.forEach((e) => {
    if (!status.includes(e.status)) status.push(e.status);
    if (!type.includes(e.type)) type.push(e.type);
  });

  function handleSubmit(e) {
    e.preventDefault();
    setCurrentPage(1);
    setFlag(true);
    if (capsuleType && capsuleStatus) {
      setCapsuleSearchData(
        capsuleData.filter(
          (e) => e.status === capsuleStatus && e.type === capsuleType
        )
      );
    } else if (capsuleType) {
      setCapsuleSearchData(capsuleData.filter((e) => e.type === capsuleType));
    } else if (capsuleStatus) {
      setCapsuleSearchData(
        capsuleData.filter((e) => e.status === capsuleStatus)
      );
    } else {
      setCapsuleSearchData(capsuleData);
    }
  }

  function handleModalData(data) {
    setShowModal(true);
    setModalData(data);
  }

  function paginateBack() {
    setCurrentPage(currentPage - 1);
  }

  function paginateFront() {
    setCurrentPage(currentPage + 1);
  }

  function paginate(number) {
    setCurrentPage(number);
  }

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  });

  return (
    <section className="searchForm | mt-4 lg:flex lg:flex-col lg:mt-8">
      <form
        className="form | flex flex-col border-b py-2 md:grid md:grid-cols-2 md:gap-4 md:px-4 lg:grid-cols-1 lg:mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <select
            className="block border w-9/12 mx-auto rounded px-3 py-1.5 shadow-lg bg-white text-gray-700 bg-clip-padding bg-no-repeat border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none md:w-full"
            defaultValue="default"
            onChange={(e) =>
              e.target.value !== "Select Status"
                ? setCapsuleStatus(e.target.value)
                : setCapsuleStatus("")
            }
          >
            <option default>Select Status</option>
            {status.map((e, index) => (
              <option key={index} className="capitalize">
                {e}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <select
            className="block border w-9/12 mx-auto rounded px-3 py-1.5 shadow-lg bg-white text-gray-700 bg-clip-padding bg-no-repeat border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none md:w-full"
            defaultValue="default"
            onChange={(e) =>
              e.target.value !== "Select Type"
                ? setCapsuleType(e.target.value)
                : setCapsuleType("")
            }
          >
            <option default>Select Type</option>
            {type.map((e, index) => (
              <option key={index} className="capitalize">
                {e}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3 col-span-2 lg:col-span-1 mx-auto">
          <button className="btn | inline-block uppercase bg-blue-500 px-6 py-2.5 rounded font-medium text-sm leading-tight shadow-lg hover:bg-blue-700 hover:shadow-2xl text-white active:shadow-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:bg-blue-700 transition duration-150 ease-in-out">
            Search
          </button>
        </div>
      </form>
      <CapsuleDataContext.Provider
        value={{
          capsuleSearchData,
          capsuleData,
          flag,
          handleModalData,
          setShowModal,
          modalData: modalData,
          postPerPage,
          paginateBack,
          paginateFront,
          currentPage,
          totalPosts,
          paginate,
        }}
      >
        <h1 className="text-center text-3xl mt-8 mb-20 font-zen underline underline-offset-8 tracking-wider">
          Capsules
        </h1>
        {loading ? <Spinner /> : <DataGrid />}
        {showModal ? <Modal /> : ""}
        <Pagination />
      </CapsuleDataContext.Provider>
    </section>
  );
}
