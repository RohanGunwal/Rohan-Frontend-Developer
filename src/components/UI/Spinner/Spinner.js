import React from "react";

export default function Spinner() {
  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <div className="inline-block spinner-grow w-8 h-8 bg-current rounded-full opacity-0">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="inline-block spinner-grow w-8 h-8 bg-current rounded-full opacity-0">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="inline-block spinner-grow w-8 h-8 bg-current rounded-full opacity-0">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
