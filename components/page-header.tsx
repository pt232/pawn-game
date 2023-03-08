import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import AboutDialog from "./dialog/AboutDialog";

export default function PageHeader() {
  const [isAboutDialogOpen, setIsAboutDialogOpen] = useState(false);

  return (
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

      <AboutDialog
        isOpen={isAboutDialogOpen}
        close={() => setIsAboutDialogOpen(false)}
      />
    </header>
  );
}
