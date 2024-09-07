import React from "react";
import { Link } from "react-router-dom";

const QualityShoeComponents = () => {
  return (
    <div className="hero min-h-screen lg:py-5 py-0">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="max-w-sm bg-color-black rounded-lg shadow-2xl w-[300px] lg:w-[500px] h-[200px] lg:h-[300px] relative">
          <img
            src="https://image.goat.com/375/attachments/product_template_pictures/images/010/564/058/original/303229_00.png.png"
            className="absolute -top-10 -left-14 rotate-12"
          />
          {/* <img
            src="https://image.goat.com/375/attachments/product_template_pictures/images/010/564/058/original/303229_00.png.png"
            className="absolute -top-5 -left-14 rotate-12"
          /> */}
        </div>
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold mt-3 mb-3 lg:mt-0">
            We Provide You <span className=" text-blue-500">Super Quality</span>{" "}
            Shoes
          </h1>
          <p className="py-6 w-auto lg:w-[500px]">
            "The April 2018 version of Virgil Abloh’s all-white Air VaporMax is
            mostly unchanged from the original pair from ‘The Ten.’...",
          </p>
          <p className=" w-auto lg:w-[500px] mb-5">
            The Swoosh itself is slightly oversized, standing out in a glossy
            white against the matte Flyknit. Text elements—another signature of
            Abloh’s collaboration with Nike—are printed in black on the medial
            side of the shoe. These words, in Helvetica font, offer a clinical
            description of the model: "Off-White for Nike, Air VaporMax,
            Beaverton, Oregon USA," along with the year "2017."
          </p>
          <Link
            to={"/shop"}
            className=" text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QualityShoeComponents;
