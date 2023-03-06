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
      <main className="m-auto w-full max-w-lg p-4">
        <h1 className="mb-4 text-center font-primary text-xl font-bold sm:text-2xl">
          Welcome to the Pawn Game!
        </h1>

        <Board />

        <Button className="mt-4 w-full">New Game</Button>
      </main>
    </>
  );
}
