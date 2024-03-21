import { NavLink } from "react-router-dom";

const Banner1 = () => {
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1661274209157-118069b926f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
        className="relative text-center py-[300px] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gray-950 opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white ">
          <h1 className="text-3xl font-bold py-5 drop-shadow-xl ">
            We're Helping to Achieve your Success.
          </h1>
          <p className="text-xl py-1 pb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sunt?
          </p>
          <NavLink to="/contact">
            <button className="bg-purple-950 text-white p-3 rounded-sm shadow-sm hover:bg-purple-800">
              Contact Now
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
