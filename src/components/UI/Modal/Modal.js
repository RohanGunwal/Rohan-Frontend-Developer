import React, { useContext } from "react";
import { CapsuleDataContext } from "../../../Contexts/CapsuleSearchData/CapsuleSearchData";

export default function Modal() {
  const { setShowModal, modalData } = useContext(CapsuleDataContext);
  return (
    <div className="fixed inset-0 z-10 h-screen overflow-y-hidden">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-60"
        onClick={() => setShowModal(false)}
      ></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
          <div className="mt-3 flex flex-col">
            <div className="flex">
              <img src="capsule.webp" alt="Capsule" className="rounded" />
            </div>
            <div className="mt-2 ml-2 sm:text-left">
              <p className="text-lg text-gray-800 flex justify-between pr-3">
                <span className="font-medium capitalize">Id</span>
                <span>{modalData.capsule_serial}</span>
              </p>
              <p className="text-lg text-gray-800 flex justify-between pr-3">
                <span className="font-medium capitalize">Type</span>
                <span>{modalData.type}</span>
              </p>
              <p className="text-lg text-gray-800 flex justify-between pr-3">
                <span className="font-medium capitalize">Status</span>
                <span>{modalData.status}</span>
              </p>
              <p className="text-lg text-gray-800 flex justify-between pr-3">
                <span className="font-medium capitalize">Launch</span>
                <span>
                  {modalData.original_launch !== null
                    ? modalData.original_launch.split("T")[0]
                    : "Pending"}
                </span>
              </p>
              <p className="text-lg text-gray-800 flex justify-between pr-3">
                <span className="font-medium capitalize">Landings</span>
                <span>{modalData.landings}</span>
              </p>
              <div className="text-lg text-gray-800 flex flex-col pr-3">
                <h1 className="block font-medium border-b-2 pb-2">
                  Mission(s)
                </h1>
                <ul className="list-none ml-2 pt-2">
                  {modalData.missions.map((e, index) => (
                    <li key={index} className="flex justify-center">
                      <span>{e.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
