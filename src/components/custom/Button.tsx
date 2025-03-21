type ButtonProps = {
  as?: "button" | "a" | "input";
  variant?: "default" | "secondary" | "outline";
  text?: string;
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.InputHTMLAttributes<HTMLInputElement>;

const buttonStyles = {
  default: "btn bg-indigo-700 text-white hover:bg-indigo-600",
  secondary: "btn bg-rose-700 text-white hover:bg-rose-600",
  outline:
    "btn border border-indigo-700 text-indigo-700 hover:bg-indigo-600 hover:text-white",
};

const Button: React.FC<ButtonProps> = ({
  as = "button",
  variant = "default",
  text,
  children,
  className,
  ...props
}) => {
  const classes = `px-8 py-2 rounded-full font-semibold ${
    buttonStyles[variant]
  } ${className || ""}`;

  if (as === "a") {
    return (
      <a
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {text || children}
      </a>
    );
  }

  if (as === "input") {
    return (
      <input
        type="submit"
        className={classes}
        value={text}
        {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
      />
    );
  }

  return (
    <button
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {text || children}
    </button>
  );
};

export default Button;
