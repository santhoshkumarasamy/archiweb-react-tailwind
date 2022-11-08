import imag1 from "../assets/user1.png";
import imag2 from "../assets/user2.png";

const Testimonials = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1240px] flex flex-col justify-center items-center py-12 px-8">
        <h2 className="text-6xl font-bold">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 py-12 gap-24">
          <div className="grid grid-cols-3 gap-2 items-center">
            <img
              className="rounded-full aspect-square w-40 col-span-1 "
              src={imag1}
              alt=""
            />
            <div className=" col-span-2 ">
              <h2 className="text-2xl font-bold py-4 ">
                James Passaquindici Arcand
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti praesentium eaque labore quidem delectus laboriosam!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 items-center">
            <img
              className="rounded-[50%] aspect-square w-40 col-span-1 bg-white "
              src={imag2}
              alt=""
            />
            <div className=" col-span-2 ">
              <h2 className="text-2xl font-bold py-4 ">
                Abram Schleifer
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti praesentium eaque labore quidem delectus laboriosam!
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="p-2 bg-slate-400/70 rounded-full "></div>
          <div className="p-2 bg-slate-300/70 rounded-full "></div>
          <div className="p-2 bg-slate-300/70 rounded-full "></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
