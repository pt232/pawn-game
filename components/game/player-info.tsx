import Image from "next/image";

type PlayerInfoProps = {
  name: string;
};

export default function PlayerInfo({ name }: PlayerInfoProps) {
  return (
    <div className="flex items-center gap-x-2 font-medium">
      <Image
        src="/images/player-image.svg"
        alt="Player image"
        width={36}
        height={36}
      />
      {name}
    </div>
  );
}
