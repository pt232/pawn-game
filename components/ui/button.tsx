import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  `font-primary font-bold rounded-md transition-colors text-shadow`,
  {
    variants: {
      variant: {
        default:
          "bg-primary-500 text-white hover:bg-primary-400 active:bg-primary-600 shadow-button",
      },
      size: {
        default: "text-xl sm:text-[22px] py-3 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export default function Button({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, size, className })} {...props}>
      {children}
    </button>
  );
}
