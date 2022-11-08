import image1 from "../assets/projects1.png";
import image2 from "../assets/projects2.png";
import image3 from "../assets/projects3.png";
import image4 from "../assets/projects4.png";
import image5 from "../assets/projects5.png";
import image6 from "../assets/projects6.png";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const data = [image1, image2, image3, image4, image5, image6].map((image) => {
    return {
      img: image,
      title: "Our Service line one line two",
    };
  });
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1240px] px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 py-12 gap-4">
          <h2 className=" text-4xl font-bold">Our Projects</h2>
          <ul className=" flex flex-row gap-4 justify-between text-2xl font-light">
            <li className="font-bold">All</li>
            <li>Furniture</li>
            <li>Design</li>
            <li>House</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {data.map(({ img, title },index) => (
            <ProjectsCard key={index} img={img} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
