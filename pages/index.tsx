import Head from "next/head";
import Board from "@/components/board";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A simple chess game" />
        <title>Pawn Game</title>
      </Head>
      <main className="m-auto w-full max-w-[800px]">
        <Board />
      </main>
    </>
  );
}
