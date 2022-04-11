import React from 'react'
import Link from "next/link"

const MainFooter = () => {
  return (
    <>
    <div className="flex text-white justify-between px-32 py-2 bg-black">
        <div>
        &copy; 2022-2027 Kamal Sharma
        </div>
        <div>
            <Link href="https://www.github.com/Kamal040102/portfolio-kamal">Source Code</Link>
        </div>
    </div>
    </>
  )
}

export default MainFooter