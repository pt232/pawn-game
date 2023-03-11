type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return <div className="bg-secondary-900 rounded-md p-4">{children}</div>;
}
