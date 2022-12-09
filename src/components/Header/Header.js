import React from "react";

export default function Header() {
  return (
    <nav className="navbar | container-lg border-b py-7 text-center md:text-left md:px-14">
      <h1 className="heading | text-xl font-zen tracking-wider sm:text-2xl md:text-3xl lg:text-4xl">
        Space<span className="italic text-red-500">X</span>
      </h1>
    </nav>
  );
}
