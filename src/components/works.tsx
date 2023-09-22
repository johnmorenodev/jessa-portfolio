import React from "react";

const WorksSection = () => {
  return (
    <section>
      <h2 className="font-medium uppercase text-[32px] text-center">Works</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        <img src="/sans-rival.jpg" alt="" />
        <img src="/sans-rival.jpg" alt="" />
        <img src="/sans-rival.jpg" alt="" />
        <img src="/sans-rival.jpg" alt="" />
      </div>
    </section>
  );
};

export default WorksSection;
