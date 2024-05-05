import ExperienceCard from "./ExperienceCard";

import { motion } from "framer-motion";

const ExperienceData = [
  {
    id: 1,
    title: "Artificial Intelligence Engineer",
    subTitle: "BPH 200 - (March 2023 – Present)",
    location: "Singapore-Hybrid",
    desc: [
      "Optimized CLIP’s visual encoder for superior image captioning, specializing in articulating nuanced differences through text. Pioneered image difference captioning, utilizing CLIP to seamlessly integrate textual difference attributes and enhance visual difference projections for heightened model precision.",
      "Fine-tuned with the primary captioning task in a two-stage training process to achieve comprehensive multimodal domain adaptation, culminating in the final extraction of the image encoder from CLIP.",
      "Involved in continual learning to enhance multi-class classification tasks, incorporating a cross-batch memory buffer during the training phase for deep metric learning.",
      "Engaged in research and development by utilizing cutting-edge self-supervised learning frameworks, including SimCLR, BYOL, MoCo, CAE, and BEiT, to enhance image representation learning techniques.",
      "Developed ’Blendmix’ augmentation technique inspired by ’CutMix’ augmentation, leveraging META AI’s Segment Anything Model, for self-supervised training stratergies.",
      "Proficient in developing and implementing advanced speech technology solutions, with a focus on speech-to-text and text-to-speech models, including expertise in Wave2Vec technology.",
      "Experienced in training models leveraging model parallelism using AWS Sagemaker GPU clusters.",
      "Hands-on experience in the installation and calibration of industrial cameras, specifically Baumer cameras, ensuring optimal performance and accuracy in capturing visual data. Proficient in setting up and fine-tuning camera systems to meet project specifications and quality standards.",
      "Skilled in working with industrial machine control systems, implementing robust control strategies to enhance productivity and efficiency in manufacturing processes. Proven ability to integrate camera systems seamlessly with control systems, contributing to the development of streamlined and automated industrial solutions.",
      "Successfully integrated Google OCR for seamless product tracking on the production line and fine-tuned YOLOv8 for enhanced performance in the tracking process.",
    ],
  },
  {
    id: 2,
    title: "Research Assistant(UAVR Lab)",
    subTitle:
      "University of Colombo School of Computing(UCSC) - (November 2022 – March 2023)",
    location: "Colombo, Sri Lanka",
    desc: [
      "Developing our own marine debris dataset using the multispectral camera(micasense rededge mx) mounted on Aerial Drones and benchmark it with SOTA models.",
      "Developing multimodal fusion based technique to combine both multispectral images and MmWave captures.",
      "Developing a Self-supervised approach to train the backbone architecture for a Faster RCNN Network which makes the network train on less annotated dataset.",
      "Extending the project to a smart eco-system which could monitor the marine water bodies on real-time.",
    ],
  },
  {
    id: 3,
    title: "Undergraduate Researcher",
    subTitle:
      "Indian Space Research Organisation (ISRO) - (August 2021 – May 2022)",
    location: "Colombo, Sri Lanka",
    desc: [
      "Designed a Real-time facial emotion detection system which could operate under different face tilted angles and could handle various lighting conditions.",
      "Experimented and fine tuned Residual Masking architecture using residual attention learning mechanism in order to reduce the computation complexity.",
      "Developed a new technique which could send the tilted face frames with zero tilting angle as input to the model.",
    ],
  },
  {
    id: 4,
    title: "AI Research fellow",
    subTitle: "LIRNEasia. Inc - (April 2021 – July 2021)",
    location: "Colombo, Sri Lanka",
    desc: [
      "Expanded on the already conducted literature review to develop a framework and a set of best practices for developing high-quality referenced datasets for remote sensing.",
      "Built a reference dataset for Sri Lanka, covering multiple classes of land cover, that will be useful in a wide variety of remote sensing applications.",
      "Learnt EO-learn(Earth observation) framework for Geospatial Analysis and implemented machine learning algorithms provided in framework. Tested these algorithms and benchmarked the created dataset on these algorithms.",
    ],
  },
];

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[100%] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {ExperienceData.map((experience) => (
            <ExperienceCard
              key={experience.id}
              title={experience.title}
              subTitle={experience.subTitle}
              result={experience.location}
              des={experience.desc}
              isPointFormat={true}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
