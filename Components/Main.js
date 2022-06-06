import React from 'react'
import me from '../me.jpg'
import Image from 'next/image'
import Link from 'next/link'
import instagram from '../icons/instagram-brands.svg'
import google from '../icons/google-brands.svg'
import snapchat from '../icons/snapchat-brands.svg'
import github from '../icons/github-brands.svg'
import discord from '../icons/discord-brands.svg'
import linkedin from '../icons/linkedin-brands.svg'
import facebook from '../icons/facebook-brands.svg'
import styles from '../styles/Main.module.css'
import { Typewriter } from 'react-simple-typewriter'


const Main = () => {
  return (
    <div>
        <div className="flex justify-center items-center">
            <Image className="rounded-full" src={me} 
                alt="My Image"
                width={120}
                height={120}
            />
        </div>
        <div className="text-white flex flex-col justify-center items-center text-center">
            <h1 className="text-7xl my-2">
              <div className="d-inline-block">
              <button className={styles.bounce}>K</button>
              <button className={styles.bounce}>a</button>
              <button className={styles.bounce}>m</button>
              <button className={styles.bounce}>a</button>
              <button className={styles.bounce}>l</button>
              </div>
              <span> </span>
              <div className="d-inline-block">
              <button className={styles.bounce}>S</button>
              <button className={styles.bounce}>h</button>
              <button className={styles.bounce}>a</button>
              <button className={styles.bounce}>r</button>
              <button className={styles.bounce}>m</button>
              <button className={styles.bounce}>a</button>
              </div>
        
              {/* <span className={styles.bouncy}>K</span>
              <span className={styles.bouncy}>a</span>
              <span className={styles.bouncy}>m</span>
              <span className={styles.bouncy}>a</span>
              <span className={styles.bouncy}>l</span>
              <span> </span>
              <span className={styles.bouncy}>S</span>
              <span className={styles.bouncy}>h</span>
              <span className={styles.bouncy}>a</span>
              <span className={styles.bouncy}>r</span>
              <span className={styles.bouncy}>m</span>
              <span className={styles.bouncy}>a</span> */}
            </h1>
            <h3 className="text-2xl px-5 lg:px-0 my-2">I am {' '}
              <span style={{color:'yellow'}}>
              <Typewriter
                words={['Student', 'Developer', 'Data Analyst']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
              />
              </span>
            </h3>
        </div>
        <div className="flex flex-row justify-evenly my-10">
        <Link href="https://www.instagram.com/mr_kamalsharma">
          <Image className="fill-white" src={instagram} width={16} height={16.8} alt='instagram logo'/>
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100003952759515"><Image className="fill-white" src={facebook} width={16} height={16.8} alt='facebook logo'/></Link>
        <Link href="https://www.linkedin.com/in/kamalsharma05/"><Image className="fill-white" src={linkedin} width={16} height={16.8} alt='linkedin logo'/></Link>
        <Link href="https://www.github.com/Kamal040102"><Image className="fill-white" src={github} width={16} height={16.8} alt='github logo'/></Link>
        <Link href="https://discord.com/users/835128382962401280"><Image className="fill-white" src={discord} width={16} height={16.8} alt='discord logo'/></Link>
        <Link href="https://www.snapchat.com/add/kamal_s5201"><Image className="fill-white" src={snapchat} width={16} height={16.8} alt='snapchat logo'/></Link>
        <Link href="mailto:kamal5201ks@gmail.com"><Image className="fill-white" src={google} width={16} height={16.8} alt='google logo'/></Link>
        </div>
    </div>
  )
}

export default Main