import React from "react";

const FooterComponents = () => {
  const date = new Date();
  return (
    <div className=" text-white p-3 mt-auto text-center">
      <p className=" flex justify-center items-center text-neutral-300">
        &copy; {date.getFullYear()} WYH.<span>All rights reserved</span>
      </p>
    </div>
  );
};

export default FooterComponents;
