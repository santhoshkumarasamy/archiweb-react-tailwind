import { HiOutlineDocument } from "react-icons/hi";
import { FiHome, FiPenTool } from "react-icons/fi";
const Services = () => {
  return (
    <div className="h-full w-full bg-[#254D4D]/20 text-center py-12">
      <div className="h-full max-w-[1240px] mx-auto">
        <h1 className="text-5xl font-bold py-4">Our Services</h1>
        <div className="flex flex-col gap-4 md:flex-row justify-around py-4">
            <div >
              <div className="flex justify-center" >
                <div className=" rounded-full font-thin text-6xl mx-auto flex p-3 text-white bg-[#254D4D]">
                   <HiOutlineDocument strokeWidth={1} />
                </div>
               
              </div>
              <div className="w-full mx-auto">
                <h2 className="text-2xl font-semibold ">Planning</h2>
                <p>
                  Our services line one <br /> line two
                </p>
              </div>
            </div>
            <div >
              <div className="flex justify-center" >
                <div className=" rounded-full font-thin text-6xl mx-auto flex p-3 text-white bg-[#254D4D]">
                   <FiHome strokeWidth={1} />
                </div>
               
              </div>
              <div className="w-full mx-auto">
                <h2 className="text-2xl font-semibold ">Interior</h2>
                <p>
                  Our services line one <br /> line two
                </p>
              </div>
            </div>
            <div >
              <div className="flex justify-center" >
                <div className=" rounded-full font-thin text-6xl mx-auto flex p-3 text-white bg-[#254D4D]">
                   <FiPenTool strokeWidth={1} />
                </div>
               
              </div>
              <div className="w-full mx-auto">
                <h2 className="text-2xl font-semibold ">Exterior</h2>
                <p>
                  Our services line one <br /> line two
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
