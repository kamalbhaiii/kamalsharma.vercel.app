import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="text-white grid grid-cols-2 px-32 py-10 bg-gray-900">
        <div>
            <div className="text-3xl mb-4">Contact Me</div>
            <div>Email: 
                <Link href="mailto:kamal5201ks@gmail.com"><span className="text-blue-400 cursor-pointer">kamal5201ks@gmail.com</span></Link>
            </div>
            <div>Discord: 
                <Link href="https://discord.com/users/835128382962401280"><span className="text-blue-400 cursor-pointer">Kamal040102#7998</span></Link>
            </div>
            <div>Linkedin: 
                <Link href="https://www.linkedin.com/in/kamalsharma05/">
                    <span className="text-blue-400 cursor-pointer">kamalsharma05</span>
                </Link>
            </div>
        </div>
        <div className="grid grid-rows-1">
            <div className="text-3xl">Site Map</div>
            <div>
                <Link href="#AboutMe">
                    <span className="text-blue-400 cursor-pointer">
                        About Me
                    </span>
                </Link>
            </div>
            <div>
                <Link href="/Resume">
                    <span className="text-blue-400 cursor-pointer">
                        Resume
                    </span>
                </Link>
            </div>
            <div>
                <Link href="/Projects">
                    <span className="text-blue-400 cursor-pointer">
                        Projects
                    </span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer