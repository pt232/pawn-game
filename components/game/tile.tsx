import clsx from "clsx";

type TileNumber = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";

type TileLetter = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";

type TileProps = {
  color: "white" | "black";
  pieceColor?: "white" | "black";
  number?: TileNumber;
  letter?: TileLetter;
  finishPosition?: "top" | "bottom";
};

export default function Tile({
  color,
  pieceColor,
  number,
  letter,
  finishPosition,
}: TileProps) {
  return (
    <div
      className={clsx(
        "relative aspect-square bg-cover",
        { "bg-board-white": color === "white" },
        { "bg-board-black": color === "black" },
        { "bg-[url('/images/white-pawn.png')]": pieceColor === "white" },
        { "bg-[url('/images/black-pawn.png')]": pieceColor === "black" },
        { "shadow-tile-top sm:shadow-tile-top-sm": finishPosition === "top" },
        {
          "shadow-tile-bottom sm:shadow-tile-bottom-sm":
            finishPosition === "bottom",
        },
      )}
    >
      {!!number && (
        <span
          className={clsx(
            "absolute top-[2px] left-[4px] select-none text-xs font-medium sm:top-1 sm:left-2 sm:text-base md:font-bold",
            { "text-board-black": color === "white" },
            { "text-board-white": color === "black" },
          )}
        >
          {number}
        </span>
      )}
      {!!letter && (
        <span
          className={clsx(
            "absolute bottom-[2px] right-[4px] select-none text-xs font-medium sm:bottom-1 sm:right-2 sm:text-base md:font-bold",
            { "text-board-black": color === "white" },
            { "text-board-white": color === "black" },
          )}
        >
          {letter}
        </span>
      )}
    </div>
  );
}
