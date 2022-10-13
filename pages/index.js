import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Main from "../components/Main/Main";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Foody</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Splash&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Main />
    </div>
  );
}
