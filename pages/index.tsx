import Head from "next/head";
import type { NextPage } from "next";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Next Countries App</title>
      <meta
        name="description"
        content="NextJS App for viewing country information"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1>Silence is golden!</h1>
  </>
);

export default Home;
