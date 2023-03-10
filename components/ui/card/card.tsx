type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return <div className="rounded-md bg-secondary-900 p-4">{children}</div>;
}
