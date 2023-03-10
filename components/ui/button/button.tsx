import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  `font-primary font-bold rounded-md transition-colors text-shadow`,
  {
    variants: {
      variant: {
        primary:
          "bg-primary-500 text-white hover:bg-primary-400 active:bg-primary-600 shadow-button-primary",
        secondary:
          "bg-secondary-600 text-secondary-300 hover:bg-secondary-400 hover:text-white active:bg-secondary-500 active:text-white shadow-button shadow-button-secondary",
      },
      size: {
        sm: "text-sm py-2 px-4",
        md: "text-base py-2 px-6",
        lg: "text-xl sm:text-[22px] py-3 px-8",
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
