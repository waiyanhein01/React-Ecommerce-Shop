import React from "react";

const FooterComponents = () => {
  const date = new Date();
  return (
    <div className=" p-3 mt-auto text-center  bg-color-black">
      <p className=" flex justify-center items-center text-white">
        &copy; {date.getFullYear()} WYH.<span>All rights reserved</span>
      </p>
    </div>
  );
};

export default FooterComponents;
