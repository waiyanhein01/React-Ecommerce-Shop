import React from "react";
import { Link } from "react-router-dom";

const HeroComponents = () => {
  return (
    <div
      className="hero min-h-screen mt-5"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcHxlbnwwfHwwfHx8MA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold uppercase">
            Build For The Chase
          </h1>
          <p className="mb-5">
            <div className="carousel w-full">
              <div id="item1" className="carousel-item w-full flex flex-col items-center">
                <h1 className=" w-full">
                  New Styles on Sale: Up to 40% Off Shop
                </h1>
                <h2 className=" underline text-sm">All Our New Markdowns</h2>
              </div>
              <div id="item2" className="carousel-item w-full flex flex-col items-center">
                <h1 className=" w-full">
                  Move, Shop, Customise & Celebrate With Us.
                </h1>
                <h2 className=" text-sm">
                  No matter what you feel like doing today, It’s better as a
                  Member. <span className="underline">Join Us</span>
                </h2>
              </div>
              <div id="item3" className="carousel-item w-full flex flex-col items-center">
                <h1 className=" w-full">Free Standard Delivery & 30-Day</h1>
                <h2 className=" underline text-sm">
                  Free Returns Join Now View Details
                </h2>
              </div>
              <div id="item4" className="carousel-item w-full flex flex-col items-center">
                <h1 className=" w-full">10% OFF ALL APP ORDERS</h1>
                <h2 className=" underline text-sm">
                  {" "}
                  Enjoy 10% Off on the Nike App: Use APP10
                </h2>
              </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
              <a href="#item1" className="btn btn-xs">
                1
              </a>
              <a href="#item2" className="btn btn-xs">
                2
              </a>
              <a href="#item3" className="btn btn-xs">
                3
              </a>
              <a href="#item4" className="btn btn-xs">
                4
              </a>
            </div>
          </p>
          <Link
            to={"/shop"}
            className="btn bg-blue-500 text-blue-50 border-blue-500 px-4"
          >
            Go Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroComponents;
