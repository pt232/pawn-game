import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  `font-primary font-bold rounded-md transition-colors text-shadow`,
  {
    variants: {
      variant: {
        primary:
          "bg-primary-500 text-white hover:bg-primary-400 active:bg-primary-600 shadow-button-primary",
        secondary:
          "bg-secondary-700 text-secondary-400 hover:bg-secondary-500 hover:text-white active:bg-secondary-600 active:text-white shadow-button shadow-button-secondary",
      },
      size: {
        sm: "text-base py-2 px-6",
        md: "text-xl sm:text-[22px] py-3 px-8",
        lg: "text-2xl py-4 px-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
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
