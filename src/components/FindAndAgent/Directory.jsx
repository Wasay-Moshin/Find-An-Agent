import React from "react";

function Directory() {
  return (
    <div className="bg-black lg:min-h-screen  md:min-h-screen flex justify-center  flex-col">
      <div>
        <h1 className="text-white text-6xl text-center uppercase tracking-widest">
          A - Z
        </h1>
        <p className="text-white text-3xl uppercase tracking-widest text-center pt-2">
          DIRECTORY
        </p>
      </div>
      <div className="flex justify-center pt-4">
        <img className="w-60" src="assets/findanagent/Group 4811.png" alt="" />
      </div>
      <div className="flex justify-center ">
        <div className="w-96 mt-5">
          <select
            name="country"
            id="countries"
            className="text-black  w-[100%] border  bg-white  border-gray-300   text-sm rounded-lg tracking-widest  outline-none  p-3"
          >
            <option
              className="text-black bg-transparent  text-center lg:text-[18px] tracking-widest"
            >
              SELECT YOUR COUNTRY
            </option>
          </select>
        </div>
      </div>
      <div>
        <h1 className="text-white text-xl text-center uppercase tracking-widest pt-20">
          A &nbsp; B &nbsp; C &nbsp; D &nbsp; E &nbsp; F &nbsp; G &nbsp; H
          &nbsp; I &nbsp; J &nbsp; K &nbsp; L &nbsp; M &nbsp; N &nbsp; O &nbsp;
          P &nbsp; Q &nbsp; R &nbsp; S &nbsp; T &nbsp; U &nbsp; V &nbsp; W
          &nbsp; X &nbsp; Y &nbsp; Z &nbsp; #
        </h1>
        <h1 className="text-white text-center text-sm uppercase tracking-widest p-2 pt-16">
          Here YOU WILL FIND THE full list of ZIMO PRO AGENTS in THE COUNTRY
          CHOSEN IN our directory by name. Please click on a character ABOVE to
          find ZIMO PRO agents beginning with that letter.
        </h1>
        <h1 className="text-8xl text-white uppercase text-center pt-20">A</h1>
      </div>
    </div>
  );
}

export default Directory;
