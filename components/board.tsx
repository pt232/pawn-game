import Tile from "./tile";

export default function Board() {
  return (
    <div className="grid grid-cols-8 overflow-hidden rounded-[4px] bg-red-50">
      <Tile tileColor="white" />
      <Tile tileColor="black" />
      <Tile tileColor="white" />
      <Tile tileColor="black" />
      <Tile tileColor="white" />
      <Tile tileColor="black" />
      <Tile tileColor="white" />
      <Tile tileColor="black" />

      <Tile tileColor="black" pieceColor="black" />
      <Tile tileColor="white" pieceColor="black" />
      <Tile tileColor="black" pieceColor="black" />
      <Tile tileColor="white" pieceColor="black" />
      <Tile tileColor="black" pieceColor="black" />
      <Tile tileColor="white" pieceColor="black" />
      <Tile tileColor="black" pieceColor="black" />
      <Tile tileColor="white" pieceColor="black" />

      <Tile tileColor="white" />
      <Tile tileColor="black" />
      <Tile tileColor="white" />
      <Tile tileColor="black" />
      <Tile tileColor="white" />
      <Tile tileColor="black" />
      <Tile tileColor="white" />
      <Tile tileColor="black" />

      <Tile tileColor="black" />
      <Tile tileColor="white" />
      <Tile tileColor="black" />
      <Tile tileColor="white" />
      <Tile tileColor="black" />
      <Tile tileColor="white" />
      <Tile tileColor="black" />
      <Tile tileColor="white" />

      <Tile tileColor="white" />
      <Tile tileColor="black" />
      <Tile tileColor="white" />
      <Tile tileColor="black" />
      <Tile tileColor="white" />
      <Tile tileColor="black" />
      <Tile tileColor="white" />
      <Tile tileColor="black" />

      <Tile tileColor="black" />
      <Tile tileColor="white" />
      <Tile tileColor="black" />
      <Tile tileColor="white" />
      <Tile tileColor="black" />
      <Tile tileColor="white" />
      <Tile tileColor="black" />
      <Tile tileColor="white" />

      <Tile tileColor="white" pieceColor="white" />
      <Tile tileColor="black" pieceColor="white" />
      <Tile tileColor="white" pieceColor="white" />
      <Tile tileColor="black" pieceColor="white" />
      <Tile tileColor="white" pieceColor="white" />
      <Tile tileColor="black" pieceColor="white" />
      <Tile tileColor="white" pieceColor="white" />
      <Tile tileColor="black" pieceColor="white" />

      <Tile tileColor="black" />
      <Tile tileColor="white" />
      <Tile tileColor="black" />
      <Tile tileColor="white" />
      <Tile tileColor="black" />
      <Tile tileColor="white" />
      <Tile tileColor="black" />
      <Tile tileColor="white" />
    </div>
  );
}
