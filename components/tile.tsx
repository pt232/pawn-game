type TileProps = {
  variant: "white" | "black";
};

export default function Tile({ variant }: TileProps) {
  return (
    <div
      className={`aspect-square ${
        variant === "white" ? "bg-board-white" : "bg-board-black"
      }`}
    ></div>
  );
}
