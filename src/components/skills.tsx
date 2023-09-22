import React from "react";
import { GiPencilBrush } from "react-icons/gi";
import Card from "./ui/card";

const SkillsSection = () => {
  return (
    <section>
      <h2 className="text-center font-medium text-[32px] uppercase after:absolute after:w-[20px] after:border after:border-solid after:boder-yellow-50">
        Skills
      </h2>
      <div className="flex-col flex sm:flex-row justify-between gap-4">
        <Card className="w-full">
          <div className="flex flex-col  gap-4 items-center">
            <GiPencilBrush size={60} />
            <h3>Web Design</h3>
            <p>
              Proficient in crafting visually appealing and user-friendly
              websites that blend creativity with functionality to deliver a
              seamless online experience.
            </p>
          </div>
        </Card>

        <Card className="w-full">
          <div className="flex flex-col  gap-4 items-center">
            <GiPencilBrush size={60} />
            <h3>UI/UX Design</h3>
            <p>
              Skilled in creating intuitive and aesthetically pleasing user
              interfaces and experiences, enhancing user satisfaction and
              engagement.
            </p>
          </div>
        </Card>

        <Card className="w-full">
          <div className="flex flex-col gap-4  items-center">
            <GiPencilBrush size={60} />
            <h3>Graphic Design</h3>
            <p>
              Experienced in producing captivating visual content, from logos to
              marketing materials, to convey messages effectively and leave a
              lasting impression.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;
