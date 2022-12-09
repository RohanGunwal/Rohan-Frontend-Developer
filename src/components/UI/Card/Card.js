import React from "react";

export default function Card(props) {
  const { data } = props;
  return (
    <div>
      <div
        className="card | flex justify-center w-80 cursor-pointer transition ease-in-out duration-150 rounded h-100 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-700 hover:ring-offset-4"
        onClick={() => {
          props.handleModalData(data);
        }}
      >
        <div className="rounded-lg shadow-lg bg-white select-none">
          <img className="rounded-t-lg" src="capsule.webp" alt="" />
          <div className="p-6">
            <h3 className="text-gray-900 text-2xl font-medium mb-2">
              {data.capsule_serial}
            </h3>
            <div className="flex justify-between">
              <p className="text-gray-700 text-sm mb-4 capitalize">
                {data.status}
              </p>
              <p className="text-indigo-900 font-medium">{data.type}</p>
            </div>
            <p className="text-gray-500 text-md mb-4">
              {data.details === null ? "About Capsule" : data.details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
