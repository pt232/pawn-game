import { useRef, useState } from "react";
import Button from "../ui/button";
import Dialog from "../ui/dialog";
import Input from "../ui/input/input";

type StartDialogProps = {
  isOpen: boolean;
  close: () => void;
};

export default function StartDialog({ isOpen, close }: StartDialogProps) {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError(null);

    if (nameRef.current?.value.trim() === "") {
      setError("Please enter a name");
      return;
    }

    close();
  }

  return (
    <Dialog isOpen={isOpen} title="Let's play the Pawn Game" close={close}>
      <p className="mb-4">
        To get started, enter your player name. Once the game is created, others
        can join via a link.
      </p>
      <form onSubmit={handleSubmit}>
        <Input
          ref={nameRef}
          id="player-name"
          className="w-full"
          placeholder="Your name"
          aria-label="Your name"
        />
        {error && <p className="my-1 text-sm text-red-400">{error}</p>}
        <Button size="sm" type="submit" className="mt-2 w-full">
          Start the Game
        </Button>
      </form>
    </Dialog>
  );
}
