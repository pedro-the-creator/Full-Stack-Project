type ButtonType = {
  title: string;
  variant?: "default" | "outline";

} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ title, variant, ...props }: ButtonType) => {
  const buttonVariant = () => {
    if (variant === "default") {
      return "w-full border-2 border-[#C92A0E] cursor-pointer rounded-md bg-[#C92A0E] py-2 text-white font-bold text-sm";
    } else if (variant === "outline") {
      return "w-full border-2 border-[#C92A0E] cursor-pointer rounded-md bg-white py-2 text-[#C92A0E] font-bold text-sm";
    }
  };

  return <button {...props} className={buttonVariant()}>{title}</button>;
};

export default Button;
