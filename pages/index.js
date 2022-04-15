import Head from 'next/head'
import Intro from '../Components/Intro'
import Main from '../Components/Main'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="w-screen">
    <div className={styles.container}>
      <Head>
        <title>Home | Kamal Sharma</title>
        <meta name="description" content="I am a third year under graduate, Computer Engineering student and Data Science Enthusiast. I have worked as an intern in various companies as a Data Science Trainee, also I am an intermediate Full-Stack Web Developer and learning daily to improve my self. Currently I am focusing more towards learning the fundamentals of Data Science and creating my own Metaverse." />
        <meta name="description" content="kamal" />
        <meta name="description" content="science" />
        <meta name="description" content="sharma" />
        <meta name="description" content="resume" />
        <meta name="description" content="portfolio" />
        <meta name="description" content="projects" />
        <meta name="description" content="data science" />
        <meta name="description" content="Portfolio Web" />
        <meta name="description" content="Data Science Portfolio Web" />
        <meta name="description" content="Full Stack Developer Portfolio Web" />
        <meta name="description" content="Next JS, Bootstrap, Tailwind css Portfolio Web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="main
    h-screen flex flex-col justify-center items-center"
      >
        <Main />
      </div>
      <div id="AboutMe" className="bg-white py-10">
        <Intro />
      </div>
    </div>
    </div>
  );
}
