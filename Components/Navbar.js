import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex justify-between bg-black text-white text-xl sticky top-0 z-10">

      <script src="https://cdn.tailwindcss.com"></script>

        <ul>
            <Link href="/"><li className="cursor-pointer p-3 font-bold">Kamal Sharma</li></Link>
        </ul>
        <ul className="flex">
            <Link href="/#AboutMe" id="about"><li className="cursor-pointer mx-2 p-3">About Me</li></Link>
            <Link href="/Resume"><li className="cursor-pointer mx-2 p-3">Resume</li></Link>
            <Link href="/Projects"><li className="cursor-pointer mx-2 p-3">Projects</li></Link>
        </ul>
    </div>
  )
}

export default Navbar