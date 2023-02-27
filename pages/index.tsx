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
        <h1
          className={`${montserrat.variable} mb-4 text-center font-heading text-4xl font-bold sm:text-5xl`}
        >
          Pawn Game
        </h1>
        <Board />
      </main>
    </>
  );
}
