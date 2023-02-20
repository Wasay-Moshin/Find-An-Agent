import React from "react";

function AgentForm() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center mt-16">
        <img className="w-24" src="assets/findanagent/Agent.png" alt="" />
        &nbsp; &nbsp;
        <img
          className="w-[135px]"
          src="assets/findanagent/Group 4806.png"
          alt=""
        />
      </div>
      <div className="flex justify-center mt-8">
        <div className="bg-black  w-[600px] h-[420px] rounded-2xl">
          <h1 className="text-white text-center uppercase text-xs tracking-widest pt-3">
            SEARCH FOR AGENTS ON ZIMO
          </h1>
        </div>
      </div>
      <div className="w-[500px] h-[300px] p-6 border border-gray-200 rounded-2xl shadow bg-gray-400 bg-opacity-50 backdrop-filter backdrop-blur-lg ml-24 -mt-96">
        <div>
          <select
            name="country"
            id="countries"
            className=" text-black  w-[100%] border  bg-white  border-gray-300   text-xs rounded-lg tracking-widest  outline-none  p-2.5"
          >
            <option className="text-black bg-transparent  text-center lg:text-[13px] tracking-widest">
              SEARCH BY COUNTRY
            </option>
          </select>
        </div>
        <div>
          <div class="mt-3">
            <input
              type="text"
              class=" text-center uppercase text-xs placeholder-black tracking-widest text-black w-full p-2.5 rounded-lg border-gray-300 focus:outline-none"
              placeholder="Search By City"
            />
          </div>
          <div class="mt-3">
            <input
              type="text"
              class=" text-center uppercase text-xs placeholder-black tracking-widest text-black w-full p-2.5 rounded-lg border-gray-300 focus:outline-none"
              placeholder="Agent Name"
            />
          </div>
          <div class="mt-3">
            <input
              type="text"
              class=" text-center uppercase text-xs placeholder-black tracking-widest text-black w-full p-2.5 rounded-lg border-gray-300 focus:outline-none"
              placeholder="SEARCH BY ZIP CODE / POST CODE"
            />
          </div>
          <div class="mt-3 ">
            <select
              name="country"
              id="countries"
              className=" text-black  w-[50%] border  bg-white  border-gray-300   text-xs uppercase rounded-lg tracking-widest  outline-none  p-2.5"
            >
              <option className="text-black bg-transparent  text-center lg:text-[13px] tracking-widest">
                This Area Only
              </option>
            </select>
            <span className="text-xs text-white uppercase pl-12">Radius</span>
          </div>
        </div>
        <div className="ml-[400px]">
          <div className="flex justify-center flex-col  w-[100px] h-[100px] bg-white  text-white p-4 rounded-md z-10 ">
            <button
              className="text-[14px] uppercase text-black lg:tracking-[2px]"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center mt-24">
        <div className="p-2">
          <p className="text-sm uppercase tracking-widest">
            If you're thinking of selling your property, make sure you choose an
            agent that can advertise (LIST) your property on ZIMO.
          </p>
          <p className="text-sm uppercase tracking-widest mt-4">
            Property agents that choose to LIST with ZIMO are able to unlock the
            FOLLOWING KEY FEATURES:
          </p>
          <h1 className="text-sm font-bold tracking-widest uppercase mt-4">
            Your property in front of the WORLD'S LARGEST revolutionary real
            estate audience
          </h1>
          <p className="text-sm uppercase tracking-widest mt-4">
            Agents that list with zimo are guaranteed sales. zimo is the only
            platform in the world to offer this SERVICE.
          </p>
          <h1 className="text-sm font-bold tracking-widest uppercase mt-4">
            Your property online within minutes
          </h1>
          <p className="text-sm uppercase tracking-widest mt-4">
            A zimo pro agent can have your property live and searchable on the
            platform within minutes of you approving your property listing.
          </p>
          <h1 className="text-sm font-bold tracking-widest uppercase mt-4">
            GET PAID COMMISSION
          </h1>
          <p className="text-sm uppercase tracking-widest mt-4">
            YOU ARE PAID COMMISSION ON THE COMPLETION OF SALE. ZIMO IS THE ONLY
            PLATFORM IN THE WORLD TO PAY COMMISSION TO SELLERS/VENDORS.
          </p>
          <p className="text-sm uppercase tracking-widest mt-4">
            PLEASE NOTE: The only way to get your property listed ON ZIMO, and
            in front of the WORLD'S LARGEST REVOLUTIONARY REAL ESTATE audience,
            is by instructing one of the thousands of ZIMO PRO AGENTS that LIST
            with us.
          </p>
          <h1 className="text-sm font-bold tracking-widest uppercase mt-4">
            INSTRUCTING A ZIMO PRO AGENT
          </h1>
          <p className="text-sm uppercase tracking-widest mt-4">
            Ask anyone who has sold a property before and they will tell you
            that selling a property is both complicated and time-consuming. By
            instructing a ZIMO PRO agent to LIST your home you gain their
            knowledge of the local property market, as well as their expertise
            in HAVING YOUR PROPERTY SOLD.
          </p>
          <h1 className="text-sm font-bold tracking-widest uppercase mt-4">
            A ZIMO PRO AGENT WILL BE ABLE TO:
          </h1>
          <p className="text-sm uppercase tracking-widest mt-4">
            PROVIDE A MARKET VALUATION for your property based on their
            knowledge of local market conditions.
          </p>
          <p className="text-sm uppercase tracking-widest mt-4">
            Demonstrate a knowledge and understanding of the best marketing
            tactics required to ensure your property gets seen by the LARGEST
            audience of TICKET ENTRY buyers, such as ensuring it's featured ON
            ZIMO.
          </p>
          <p className="text-sm uppercase tracking-widest mt-4">
            Ensure your property gets the attention it deserves by knowing the
            best ways to present it ON ZIMO.
          </p>
          <p className="text-sm uppercase tracking-widest mt-4">
            Provide you with personalised reports on your property's ZIMO
            performance and advice on how to increase its performance further.
          </p>
          <p className="text-sm uppercase tracking-widest mt-4">
            Reduce the stress involved with selling your property by LISTING IT
            ON ZIMO FOR A GUARANTEED SALE AT THE BEST MARKET VALUE on your
            behalf and ZIMO HANDLE ALL THE exchange and completion stages of the
            deal.
          </p>
          <h1 className="text-sm font-bold tracking-widest uppercase mt-4">
            HOW TO CHOOSE A ZIMO AGENT
          </h1>
          <p className="text-sm uppercase tracking-widest mt-4">
            Ultimately, you should choose an estate agent that you feel
            comfortable dealing with and who you feel will look after your best
            interests as a seller.
            <br />
            To help you make a decision, we would recommend asking prospective
            agents the following:
          </p>
          <p className="text-sm uppercase tracking-widest mt-4">
            How and where your property will be LISTED ON THE ZIMO PLATFORM -
            now's the time to make sure that your property will be
            advertised/LISTED on ZIMO.
          </p>
          <p className="text-sm uppercase tracking-widest mt-4">
            How your property compares with similar properties already on the
            market in terms of price and presentation.
          </p>
          <p className="text-sm uppercase tracking-widest mt-4">
            How often you can expect feedback from the ZIMO PRO agent while your
            property is on the ZIMO PLATFORM. A good agent should help you feel
            informed and in control throughout the process.
          </p>
          <h1 className="text-sm font-bold tracking-widest uppercase mt-4">
            TALK TO YOUR ZIMO PRO AGENT ABOUT STANDING OUT ON ZIMO
          </h1>
          <p className="text-sm uppercase tracking-widest mt-4">
            Having chosen a ZIMO PRO agent, ask your agent about making your
            property stand out from others on the ZIMO PLATFORM. A Premium
            Listing or Featured Property on ZIMO are great
            <br /> ways of creating more interest from potential TICKET ENTRY
            BUYERS. ULTIMATELY LEADING TO A FASTER SELLING EXPERIENCE.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AgentForm;
