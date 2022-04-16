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
            <h1 className="text-7xl my-2">Kamal Sharma</h1>
            <h3 className="text-2xl px-5 lg:px-0 my-2">Student, Developer and Data Scientist</h3>
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