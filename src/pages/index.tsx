import { CompletedChallenges } from '../components/CompletedChallenges';
import Head from 'next/head';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>

        <link rel="shortcut icon" href="favicon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
        <title>Início | moveit</title>
      </Head>

      <ExperienceBar />

      <section>

        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
