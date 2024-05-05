import { featuresData } from "../../data/skills";
import Title from "../Layout/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title des="Skills" />
      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-9 gap-1 xl:gap-5">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Features;
