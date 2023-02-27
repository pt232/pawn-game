import clsx from "clsx";

type TileProps = {
  tileColor: "white" | "black";
  pieceColor?: "white" | "black";
};

export default function Tile({ tileColor, pieceColor }: TileProps) {
  return (
    <div
      className={clsx(
        "aspect-square",
        { "bg-board-white": tileColor === "white" },
        { "bg-board-black": tileColor === "black" },
        { "bg-[url('/images/white-pawn.png')]": pieceColor === "white" },
        { "bg-[url('/images/black-pawn.png')]": pieceColor === "black" },
        "bg-cover",
      )}
    ></div>
  );
}
