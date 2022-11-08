

const ProjectsCard = ({img,title}) => {
  return (
    <div className="text-center">
      <img className=" rounded-lg" src={img} alt={title} />
      <p className="py-4 text-2xl font-light w-[50%] mx-auto">{title}</p>
    </div>
  )
}

export default ProjectsCard
