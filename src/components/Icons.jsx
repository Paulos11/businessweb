import { DiAndroid, DiJavascript, DiPython, DiKomodo } from "react-icons/di";

const Icons = () => {
  return (
    <div className="bg-[#f4f4f4]">
      <div>
        <h1 className="text-center py-12 text-2xl font-bold pb-2">
          Technologies to buld
        </h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur consectetur <br />
          adipisicing elit. Ratione, voluptates?
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly px-20 pt-9 pb-[40px] ">
        <DiAndroid color="black" size={120} />
        <DiPython color="black" size={120} />
        <DiJavascript
          className="hover:scale-125 transition-all duration-300"
          color="black"
          size={120}
        />
        <DiKomodo color="black" size={120} />
      </div>
    </div>
  );
};
export default Icons;
