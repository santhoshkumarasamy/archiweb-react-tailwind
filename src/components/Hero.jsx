import image from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="h-full w-full mx-auto max-w-[1240px] grid md:grid-cols-2 relative pt-24 items-center">
      <div className="w-full  left-0 z-10  py-16  top-0  ">
        <div className="px-12 py-28  bg-gray-200/80">
          <h1 className="text-6xl font-extrabold py-5">
            Best Solution for Your Home
          </h1>
          <p className="text-2xl py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error,
            mollitia.
          </p>
        </div>
      </div>
      <img
        className=" hidden md:flex absolute w-[80%] object-scale-down my-auto -z-10  h-full  right-0 "
        src={image}
        alt=""
      />
    </div>
  );
};

export default Hero;
