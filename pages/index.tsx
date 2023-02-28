import { Montserrat } from "next/font/google";
import Head from "next/head";
import Board from "@/components/board";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A simple chess game" />
        <title>Pawn Game</title>
      </Head>
      <main className="m-auto w-full max-w-[800px] p-3">
        <header className="mb-4 text-center">
          <h1
            className={`${montserrat.variable} mb-1 font-heading text-4xl font-bold sm:text-5xl`}
          >
            Welcome to the Pawn Game!
          </h1>
          <p className="text-lg text-brown-500 sm:text-xl">
            Take on your opponent in a strategic game of pawns-only chess
          </p>
        </header>
        <Board />
      </main>
    </>
  );
}
