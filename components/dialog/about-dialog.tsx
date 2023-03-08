import Link from "next/link";
import Dialog from "../ui/dialog";

type AboutDialogProps = {
  isOpen: boolean;
  close: () => void;
};

export default function AboutDialog({ isOpen, close }: AboutDialogProps) {
  return (
    <Dialog isOpen={isOpen} title="About" close={close}>
      <p className="mb-3">
        The Pawn Game is a simple and fun multiplayer web app that I created as
        a personal project to practice my web development skills. Enjoy playing!
      </p>
      <p>
        The game&apos;s design is heavily inspired by{" "}
        <Link
          href="https://www.chess.com/"
          target="_blank"
          className="text-link-500 hover:underline"
        >
          Chess.com
        </Link>
        .
      </p>
    </Dialog>
  );
}
