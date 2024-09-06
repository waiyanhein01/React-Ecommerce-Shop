import React from "react";
import logo from "../../public/logo.svg";
import ContainerComponents from "./Container.components";

const FooterComponents = () => {
  const date = new Date();
  return (
    <div className=" mt-auto text-center bg-color-gradient shadow shadow-neutral-800 ">
      <ContainerComponents>
        <footer className="footer text-neutral-950 justify-center items-center p-4">
          <aside className="grid-flow-col items-center">
            <img src={logo} alt="" className=" w-10" />
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          </aside>
        </footer>
      </ContainerComponents>
    </div>
  );
};

export default FooterComponents;
