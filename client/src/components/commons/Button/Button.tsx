type Props = {
  variant: "primary" | "secondary" | "normal";
  children: any;
  padX?: number;
  minWidth?: number;
  onClick?: () => void;
  type?: "submit" | "button";
  size?: "small" | "base";
};

const Button = ({
  variant,
  children,
  onClick,
  type = "button",
  size = "base",
  padX,
  minWidth,
}: Props) => {
  let variantBtn = "";
  let sizeBtn = "";
  if (variant === "primary") {
    variantBtn = "w-full px-4 bg-primaryBtnBg text-white font-bold rounded-md";
  } else if (variant === "secondary") {
    variantBtn =
      "mx-auto px-4 bg-secondaryBtnBg text-white text-1748 font-bold rounded-md";
  } else if (variant === "normal") {
    variantBtn =
      "mx-auto px-4 bg-normalBtn text-onNormalBtn text-1748 font-bold rounded-md";
  }

  if (size === "small") {
    sizeBtn = "text-1836 min-w-[194px] px-8";
  } else if (size === "base") {
    sizeBtn = "text-2048";
  }
  return (
    <button
      type={type}
      className={`${variantBtn} ${sizeBtn} not-coppy`}
      onClick={onClick}
      style={{ paddingLeft: padX, paddingRight: padX, minWidth }}
    >
      {children}
    </button>
  );
};

export default Button;
