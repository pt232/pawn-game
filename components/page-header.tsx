import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import Dialog from "./ui/dialog";

export default function PageHeader() {
  const [isAboutDialogOpen, setIsAboutDialogOpen] = useState(false);

  return (
    <>
      <header className="mb-4 flex items-center justify-between rounded-md py-4 text-secondary-300">
        <Link href="/">
          <Image src="/logo.svg" width={128} height={24} alt="Logo" />
        </Link>
        <nav>
          <ul className="flex gap-x-4">
            <li>
              <button
                className="transition-colors hover:text-white"
                onClick={() => setIsAboutDialogOpen(true)}
              >
                About
              </button>
            </li>
            <li>
              <Link
                href="https://github.com/pt232/pawn-game"
                target="_blank"
                className="flex items-center gap-1 transition-colors hover:text-white"
              >
                GitHub
                <ExternalLink size={16} />
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Dialog
        isOpen={isAboutDialogOpen}
        title="About"
        close={() => setIsAboutDialogOpen(false)}
      >
        <p>
          The Pawn Game is a simple and fun multiplayer web app that I created
          as a personal project to practice my web development skills. Have fun
          playing!
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
    </>
  );
}
