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
        <meta name="keywords" content="kamal, sharma, science, resume, portfolio, projects, data science, web development, full stack development, Data Scientist Portfolio Web, Full Stack Developer Portfolio Web, Next JS, Bootstrap, Tailwind css Portfolio Web, Portfolio Website" />
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
