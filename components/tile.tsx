import clsx from "clsx";

type TileNumber = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";

type TileLetter = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";

type TileProps = {
  color: "white" | "black";
  pieceColor?: "white" | "black";
  number?: TileNumber;
  letter?: TileLetter;
};

export default function Tile({ color, pieceColor, number, letter }: TileProps) {
  return (
    <div
      className={clsx(
        "relative aspect-square bg-cover",
        { "bg-board-white": color === "white" },
        { "bg-board-black": color === "black" },
        { "bg-[url('/images/white-pawn.png')]": pieceColor === "white" },
        { "bg-[url('/images/black-pawn.png')]": pieceColor === "black" },
      )}
    >
      {!!number && (
        <span
          className={`absolute top-[2px] left-[4px] text-xs font-semibold sm:top-1 sm:left-2 sm:text-xl md:font-bold ${
            color === "white" ? "text-board-black" : "text-board-white"
          }`}
        >
          {number}
        </span>
      )}
      {!!letter && (
        <span
          className={`absolute bottom-[2px] right-[4px] text-xs font-semibold sm:bottom-1 sm:right-2 sm:text-xl md:font-bold ${
            color === "white" ? "text-board-black" : "text-board-white"
          }`}
        >
          {letter}
        </span>
      )}
    </div>
  );
}
