import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A simple chess game" />
        <title>Pawn Game</title>
      </Head>
      <main>
        <h1 className="text-3xl font-bold">Hello World</h1>
      </main>
    </>
  );
}
