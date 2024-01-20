import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section className="bg-gray-100">
        <div className="py-20 md:py-28">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap xl:items-center -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                
                <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">
                Welcome to Your Expenses Tracker Website !
                </h1>
                <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">
                  Wondering where all your money goes each month? Tired of
                  complicated budgeting software? Try our Simple Income &
                  Expenses Tracker Application, the simple way to track your
                  income and expenses in one place.
                </p>
                <div className="flex flex-wrap">
                  
                  <div className="w-full md:w-auto py-1 md:py-0">
                  <Link
                    to="/register"
                    className="inline-flex items-center justify-center px-7 py-3 h-14 w-full md:w-auto text-lg leading-5 text-green-50 bg-blue-500 hover:bg-blue-400 font-medium focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm"
                  >
                    Signup
                  </Link>
                    
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="relative mx-auto md:mr-0 max-w-max">
                  <img
                    className="relative rounded-7xl"
                    src="https://thumbs.dreamstime.com/b/tracking-expenses-inscription-card-near-office-supplies-computer-tracking-expenses-inscription-card-near-208911029.jpg"
                    alt="landing"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
