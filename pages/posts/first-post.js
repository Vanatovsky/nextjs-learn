import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1> First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <Image
        src="/images/profile.jpg"
        width="200px"
        height="200px"
        alt="My Image"
      />
    </Layout>
  );
}
