import Head from "next/head";
import PageHeader from "@/components/page-header";
import Board from "@/components/board";
import Button from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A simple chess game" />
        <title>Pawn Game</title>
      </Head>

      <div className="m-auto w-full max-w-lg px-4">
        <PageHeader />

        <main>
          <h1 className="mb-4 text-center font-primary text-xl font-bold sm:text-2xl">
            Welcome to the Pawn Game!
          </h1>

          <Board />

          <Button className="mt-4 w-full">New Game</Button>
        </main>
      </div>
    </>
  );
}
