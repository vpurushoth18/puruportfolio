import Title from "../Layout/Title";
import ProjectCard from "./ProjectCard";
import { projectOne, projectTwo, projectThree } from "../../assets/index";

const projectData = [
  {
    id: 1,
    title: "Facial Emotion Detection",
    des: "Developed a new technique which could send the tilted face frames with zero tilting angle as input to the model zero angle technique.",
    image: projectOne,
    url: "https://github.com/vpurushoth18/Facial-Emotion-Recognition",
  },
  {
    id: 2,
    title: "Cross-batch-memory",
    des: "This is step taken for migitating the memory loss during continous training. There has been added function to see how the memory of has been depreciated during each mini batch training. the training set is will be published soon.",
    image: projectOne,
    url: "https://github.com/vpurushoth18/cross-batch-memory",
  },
  {
    id: 3,
    title: "Revisiting Class Imbalance: A Generalized Notion for Oversampling",
    des: "This research was published in IACC-2023 conference: Paper link : https://link.springer.com/chapter/10.1007/978-3-031-56700-1_38",
    image: projectOne,
    url: "https://github.com/vpurushoth18/IACC-2023",
  },
  {
    id: 4,
    title: "Person-Reid-Using-Siamese-nueral-network",
    des: "Person re-identification, often abbreviated as Person-ReID or simply ReID, is a computer vision task aimed at recognizing and matching individuals across different camera views or time instances within the same camera view. The goal is to identify whether a person captured in one image or video frame is the same person seen in another image or video frame.",
    image: projectOne,
    url: "https://github.com/vpurushoth18/Person-Reid-Using-Siamese-nueral-network",
  },
];

const Project = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            des={project.des}
            src={project.image}
            url={project.url}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
