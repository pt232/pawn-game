import Head from "next/head";
import Board from "@/components/board";
import Button from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="A simple chess game" />
        <title>Pawn Game</title>
      </Head>
      <main className="m-auto w-full max-w-[800px] p-3">
        <header className="mb-8 text-center">
          <h1 className="mb-1 font-primary text-4xl font-bold sm:text-5xl">
            Welcome to the Pawn Game!
          </h1>
          <p className="text-lg text-secondary-400 sm:text-xl">
            Take on your opponent in a strategic game of pawns-only chess
          </p>
        </header>

        <Button className="mb-4 w-full">New Game</Button>

        <Board />
      </main>
    </>
  );
}
