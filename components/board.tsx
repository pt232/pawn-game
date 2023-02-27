import Tile from "./tile";

export default function Board() {
  return (
    <div className="grid grid-cols-8 overflow-hidden rounded-[4px] bg-red-50">
      <Tile color="white" number="8" />
      <Tile color="black" />
      <Tile color="white" />
      <Tile color="black" />
      <Tile color="white" />
      <Tile color="black" />
      <Tile color="white" />
      <Tile color="black" />

      <Tile color="black" pieceColor="black" number="7" />
      <Tile color="white" pieceColor="black" />
      <Tile color="black" pieceColor="black" />
      <Tile color="white" pieceColor="black" />
      <Tile color="black" pieceColor="black" />
      <Tile color="white" pieceColor="black" />
      <Tile color="black" pieceColor="black" />
      <Tile color="white" pieceColor="black" />

      <Tile color="white" number="6" />
      <Tile color="black" />
      <Tile color="white" />
      <Tile color="black" />
      <Tile color="white" />
      <Tile color="black" />
      <Tile color="white" />
      <Tile color="black" />

      <Tile color="black" number="5" />
      <Tile color="white" />
      <Tile color="black" />
      <Tile color="white" />
      <Tile color="black" />
      <Tile color="white" />
      <Tile color="black" />
      <Tile color="white" />

      <Tile color="white" number="4" />
      <Tile color="black" />
      <Tile color="white" />
      <Tile color="black" />
      <Tile color="white" />
      <Tile color="black" />
      <Tile color="white" />
      <Tile color="black" />

      <Tile color="black" number="3" />
      <Tile color="white" />
      <Tile color="black" />
      <Tile color="white" />
      <Tile color="black" />
      <Tile color="white" />
      <Tile color="black" />
      <Tile color="white" />

      <Tile color="white" pieceColor="white" number="2" />
      <Tile color="black" pieceColor="white" />
      <Tile color="white" pieceColor="white" />
      <Tile color="black" pieceColor="white" />
      <Tile color="white" pieceColor="white" />
      <Tile color="black" pieceColor="white" />
      <Tile color="white" pieceColor="white" />
      <Tile color="black" pieceColor="white" />

      <Tile color="black" number="1" letter="a" />
      <Tile color="white" letter="b" />
      <Tile color="black" letter="c" />
      <Tile color="white" letter="d" />
      <Tile color="black" letter="e" />
      <Tile color="white" letter="f" />
      <Tile color="black" letter="g" />
      <Tile color="white" letter="h" />
    </div>
  );
}
