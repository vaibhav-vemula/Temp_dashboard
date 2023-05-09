import React from "react";
import { BellTwoTone } from "@ant-design/icons";

const NavBar = () => {
  return (
    <>
      <div className="align-middle h-24 flex justify-between">
        <h1 className="text-[#0049af] text-2xl my-auto">Stonovation</h1>
        <div className="my-auto flex">
          <BellTwoTone className="text-2xl my-auto" />

          <img
            className="rounded-full h-12 w-12 my-auto ml-8"
            src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png"
            alt=""
          />
          <h1 className="my-auto font-semibold text-lg ml-3">Ashish</h1>
        </div>
      </div>
    </>
  );
};

export default NavBar;
