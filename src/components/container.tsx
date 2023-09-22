import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-[1220px] mx-auto w-full px-4">{children}</div>;
};

export default Container;
