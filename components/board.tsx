import Clock from "./clock";
import PlayerInfo from "./player-info";
import Tile from "./tile";

export default function Board() {
  return (
    <>
      <div className="flex items-center justify-between">
        <PlayerInfo name="Opponent" />
        <Clock color="black" />
      </div>

      <div className="my-3 grid grid-cols-8 overflow-hidden rounded-[4px] bg-red-50">
        <Tile color="white" number="8" finishPosition="top" />
        <Tile color="black" finishPosition="top" />
        <Tile color="white" finishPosition="top" />
        <Tile color="black" finishPosition="top" />
        <Tile color="white" finishPosition="top" />
        <Tile color="black" finishPosition="top" />
        <Tile color="white" finishPosition="top" />
        <Tile color="black" finishPosition="top" />

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

        <Tile color="black" number="1" letter="a" finishPosition="bottom" />
        <Tile color="white" letter="b" finishPosition="bottom" />
        <Tile color="black" letter="c" finishPosition="bottom" />
        <Tile color="white" letter="d" finishPosition="bottom" />
        <Tile color="black" letter="e" finishPosition="bottom" />
        <Tile color="white" letter="f" finishPosition="bottom" />
        <Tile color="black" letter="g" finishPosition="bottom" />
        <Tile color="white" letter="h" finishPosition="bottom" />
      </div>

      <div className="flex items-center justify-between">
        <PlayerInfo name="You" />
        <Clock color="white" />
      </div>
    </>
  );
}
