import React from "react";

type CardProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<CardProps> & {
  Heading: React.FC<CardProps>;
  Body: React.FC<CardProps>;
} = ({ children, className, ...props }) => {
  const classes = `bg-white shadow-md rounded-[1rem] overflow-hidden ${
    className || ""
  }`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

Card.Heading = ({ children, className, ...props }) => {
  return (
    <div
      className={`text-xl font-bold mb-4 pt-8 pb-2 px-12 ${className || ""}`}
      {...props}
    >
      {children}
    </div>
  );
};

Card.Body = ({ children, className, ...props }) => {
  return (
    <div
      className={`text-sm text-gray-700 pt-2 pb-8 px-12 ${className || ""}`}
      {...props}
    >
      {children}
    </div>
  );
};
