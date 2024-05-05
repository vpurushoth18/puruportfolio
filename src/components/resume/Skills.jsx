import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const EducationData = [
  {
    id: 1,
    title:
      "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
    university:
      "National Institute of Technology Tiruchirappalli, India (2018 - 2022)",
    result: "7.0/10",
    desc: "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.",
  },
  {
    id: 2,
    title: "G.C.E Advanced Level Examination",
    university: "S.Thomas’ College, Mount Lavinia, Sri Lanka (2016)",
    result: "1A, 2C",
    desc: "High Distinction for Combined Mathematics, Credit Passes for Physics and Chemistry",
  },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p> */}
          {/* <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2> */}
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {EducationData.map((education) => (
            <ResumeCard
              key={education.id}
              title={education.title}
              subTitle={education.university}
              result={education.result}
              des={education.desc}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
