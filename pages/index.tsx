import Head from "next/head";
import { useRef, useState } from "react";
import PageHeader from "@/components/page-header";
import Board from "@/components/board";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import AccordionItem from "@/components/ui/accordion-item";
import Dialog from "@/components/ui/dialog";
import Input from "@/components/ui/input";

export default function Home() {
  const [isGameDialogOpen, setIsGameDialogOpen] = useState(false);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  function startGame(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError(null);

    if (nameRef.current?.value.trim() === "") {
      setError("Please enter a name");
      return;
    }

    setIsGameDialogOpen(false);
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A simple chess game" />
        <title>Pawn Game - A pawns-only chess variant</title>
      </Head>

      <div className="m-auto w-full max-w-lg px-4">
        <PageHeader />

        <main>
          <h1 className="mb-4 text-center font-primary text-xl font-bold sm:text-2xl">
            Welcome to the Pawn Game!
          </h1>

          <Board />

          <Button
            className="mt-4 w-full"
            onClick={() => setIsGameDialogOpen(true)}
          >
            New Game
          </Button>

          <Dialog
            isOpen={isGameDialogOpen}
            title="Let's play the Pawn Game"
            close={() => setIsGameDialogOpen(false)}
          >
            <p className="mb-4">
              To get started, enter your player name. Once the game is created,
              others can join via a link.
            </p>
            <form onSubmit={startGame}>
              <Input
                ref={nameRef}
                id="player-name"
                placeholder="Your name"
                aria-label="Your name"
              />
              {error && <p className="my-1 text-sm text-red-400">{error}</p>}
              <Button size="sm" type="submit" className="mt-2 w-full">
                Start the Game
              </Button>
            </form>
          </Dialog>

          <section className="mt-8 mb-4">
            <Card>
              <h2 className="mb-2 font-primary text-xl font-bold">
                How to Play
              </h2>
              <p className="text-secondary-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                totam suscipit commodi incidunt obcaecati, omnis quisquam
                tempora assumenda distinctio natus facilis laborum iste
                voluptates quas voluptas? Autem doloribus praesentium ea.
              </p>

              <h3 className="mt-4 font-bold text-secondary-300">
                Some heading
              </h3>
              <p className="text-secondary-300">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                quia voluptatem, id, vitae repudiandae doloribus, nostrum
                repellendus earum illo vel corporis culpa velit laboriosam rem
                voluptatum fugit. Dicta corporis repellat doloribus nulla velit
                expedita tempore quasi incidunt nihil quibusdam quae veritatis
                nobis, soluta reprehenderit! Ex, tempora? Voluptatibus deserunt
                impedit a!
              </p>

              <h3 className="mt-4 font-bold text-secondary-300">
                Another heading
              </h3>
              <p className="text-secondary-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                totam suscipit commodi incidunt obcaecati, omnis quisquam
                tempora assumenda distinctio natus facilis laborum iste
                voluptates quas voluptas? Autem doloribus praesentium ea.
              </p>

              <h2 className="mt-4 font-primary text-xl font-bold">
                Frequently asked questions
              </h2>
              <AccordionItem title="Lorem ipsum dolor?">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                totam ex accusamus minus id sed eligendi quos architecto!
                Expedita, incidunt.
              </AccordionItem>
              <AccordionItem title="Animi vel quam nostrum nesciunt?">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita corporis quibusdam quae, id obcaecati hic laudantium
                impedit! Animi vel quam nostrum nesciunt dignissimos similique
                iste aliquam reprehenderit laborum voluptas omnis nobis facilis
                voluptate eveniet, accusamus quod nihil recusandae.
              </AccordionItem>
              <AccordionItem title="Ab totam ex accusamus minus?">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                totam ex accusamus minus id sed eligendi quos architecto!
                Expedita, incidunt.
              </AccordionItem>
            </Card>
          </section>
        </main>
      </div>
    </>
  );
}
