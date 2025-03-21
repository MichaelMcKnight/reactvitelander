type ContainerSize = "container" | "sm" | "md" | "lg" | "xl" | "xxl";

type ContainerProps = {
  size?: ContainerSize;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>; // Allows other div attributes (like className, id, etc.)

const sizeClasses: Record<ContainerSize, string> = {
  container: "max-w-[90rem]",
  sm: "max-w-[65rem]",
  md: "max-w-[70rem]",
  lg: "max-w-[80rem]",
  xl: "max-w-[100rem]",
  xxl: "max-w-[110rem]",
};

const Container: React.FC<ContainerProps> = ({
  size = "container",
  children,
  className,
  ...props
}) => {
  const containerClass = `${sizeClasses[size]} mx-auto px-8 md:px-12 ${
    className || ""
  }`;

  return (
    <div className={containerClass} {...props}>
      {children}
    </div>
  );
};

export default Container;
