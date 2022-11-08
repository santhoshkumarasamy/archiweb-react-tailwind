import image from "../assets/about.png";

const About = () => {
  return (
    <section className="py-8 w-full">
      <div className=" mx-auto max-w-[1240px] grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
        <img src={image} alt="" />
        <div className="px-4 flex flex-col justify-center gap-4">
          <h1 className="text-5xl  font-bold">About Us</h1>
          <p className="text-3xl font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quasi
            molestias reprehenderit, numquam nobis voluptates ut dicta ipsa
            fugiat velit!
          </p>
          <p className="text-3xl font-bold cursor-pointer text-black/70">Read more</p>
        </div>
      </div>
    </section>
  );
};

export default About;
