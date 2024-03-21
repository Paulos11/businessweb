import { NavLink } from "react-router-dom";

const Banner2 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-10 py-6 md:py-10 place-items-center bg-gray-50">
      <div className="w-full md:w-[200px] flex justify-center md:justify-start">
        <img
          className="max-w-[200px] md:max-w-[250px] h-auto rounded-xl shadow-md"
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="h"
        />
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-5">
          About Us: Business
        </h1>
        <p className="text-sm md:text-base mb-3 md:mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ullam
          sapiente aperiam nemo a praesentium recusandae optio provident numquam
          quaerat ab fugit iste aspernatur, illum laborum debitis natus.
          Explicabo voluptas quibusdam labore inventore modi? Eius quam
          laboriosam eaque aliquid. Ad?
        </p>
        <NavLink to="/services">
          {" "}
          <button className="bg-purple-950 text-white p-2 md:p-3 rounded-sm shadow-sm hover:bg-purple-800">
            Learn More
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Banner2;
