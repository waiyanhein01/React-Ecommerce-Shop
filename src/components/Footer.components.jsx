import React from "react";

const FooterComponents = () => {
  const date = new Date();
  return (
    <div className=" text-white text-center p-3 mt-auto">
      <p>
        &copy; {date.getFullYear()} <span>WYH. All rights reserved.</span>
      </p>
    </div>
  );
};

export default FooterComponents;
