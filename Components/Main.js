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
        {/* <script src="https://cdn.tailwindcss.com"></script> */}
        {/* <script src="https://kit.fontawesome.com/444eba2dfa.js"></script> */}
        <div className="flex justify-center items-center">
            <Image className="rounded-full" src={me} 
                alt="Me.jpg"
                width={120}
                height={120}
            />
        </div>
        <div className="text-white flex flex-col justify-center items-center text-center">
            <h2 className="text-7xl my-2">Kamal Sharma</h2>
            <h3 className="text-2xl px-5 lg:px-0 my-2">Student, Developer and Data Scientist</h3>
        </div>
        <div className="flex flex-row justify-evenly my-10">
        <Link href="https://www.instagram.com/mr_kamalsharma">
          <Image className="fill-white" src={instagram} width={16} height={16.8}/>
        </Link>
        <Link href="https://www.facebook.com"><Image className="fill-white" src={facebook} width={16} height={16.8}/></Link>
        <Link href="https://www.linkedin.com/in/kamalsharma05/"><Image className="fill-white" src={linkedin} width={16} height={16.8}/></Link>
        <Link href="https://www.github.com/Kamal040102"><Image className="fill-white" src={github} width={16} height={16.8}/></Link>
        <Link href="https://discord.com/users/835128382962401280"><Image className="fill-white" src={discord} width={16} height={16.8}/></Link>
        <Link href="https://www.snapchat.com/kamal_s5201"><Image className="fill-white" src={snapchat} width={16} height={16.8}/></Link>
        <Link href="mailto:kamal5201ks@gmail.com"><Image className="fill-white" src={google} width={16} height={16.8}/></Link>
        </div>
    </div>
  )
}

export default Main