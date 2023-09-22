import React from "react";

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={
        "border-solid border-slate-400 border rounded-md p-4 " + className
      }
    >
      {children}
    </div>
  );
};

export default Card;
