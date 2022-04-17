import Head from 'next/head'
import Intro from '../Components/Intro'
import Main from '../Components/Main'
import Work from '../Components/Work';
import styles from '../styles/Home.module.css'

export default function Home(props) {
  let repo = []
  return (
    <div className="w-screen">
    <div className={styles.container}>
      <Head>
        <title>Home | Kamal Sharma</title>
        <meta name="description" content="I am a third year under graduate, Computer Engineering student and Data Science Enthusiast. I have worked as an intern in various companies as a Data Science Trainee, also I am an intermediate Full-Stack Web Developer and learning daily to improve my self. Currently I am focusing more towards learning the fundamentals of Data Science and creating my own Metaverse." />
        <meta name="image" content="https://www.awesomescreenshot.com/image/25789011?key=876a3b67d08115bb08213ddbe891c979"/>
        <meta name="keywords" content="kamal, sharma, science, resume, portfolio, projects, data science, web development, full stack development, Data Scientist Portfolio Web, Full Stack Developer Portfolio Web, Next JS, Bootstrap, Tailwind css Portfolio Web, Portfolio Website, Kamal Sharma, Kamal Sharma Portflio, Kamal Sharma Resume" />
        <meta charset="utf-8"/>
        <meta itemProp="name" content="Home | Kamal Sharma"/>
        <meta itemProp="description" content="I am a third year under graduate, Computer Engineering student and Data Science Enthusiast. I have worked as an intern in various companies as a Data Science Trainee, also I am an intermediate Full-Stack Web Developer and learning daily to improve my self. Currently I am focusing more towards learning the fundamentals of Data Science and creating my own Metaverse."/>
        <meta itemProp="image" content="https://www.awesomescreenshot.com/image/25789011?key=876a3b67d08115bb08213ddbe891c979"/>
        <meta name="og:title" content="Home | Kamal Sharma"/>
        <meta name="og:description" content="I am a third year under graduate, Computer Engineering student and Data Science Enthusiast. I have worked as an intern in various companies as a Data Science Trainee, also I am an intermediate Full-Stack Web Developer and learning daily to improve my self. Currently I am focusing more towards learning the fundamentals of Data Science and creating my own Metaverse."/>
        <meta name="og:image" content="https://www.awesomescreenshot.com/image/25789011?key=876a3b67d08115bb08213ddbe891c979"/>
        <meta name="og:url" content="https://kamalsharma.vercel.app"/>
        <meta name="og:site_name" content="Kamal Sharma Portfolio"/>
        <meta name="fb:admins" content="100003952759515"/>
        <meta name="og:type" content="website"/>
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
      <div id="MyProjects">
        {
          [props.data].map((val)=>{
            for(let i = 1; i <= Object.keys(val).length; i++){
              repo.push(val[i])
            }
          })
        }
        <Work repo={repo}/>
      </div>
    </div>
    </div>
  );
}

export async function getServerSideProps(){
  const res = await fetch('https://getmyrepo.deta.dev/Kamal040102')
  const data = await res.json()

  return {
      props: {data}
  }
}