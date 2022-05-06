import React from 'react'
import Link from "next/link"
import styles from '../styles/Work.module.css'

const MainFooter = () => {
  return (
    <div className={styles.workWidth}>
    <div className="flex text-white justify-between px-4 lg:px-32 py-2 bg-black">
        <div>
        &copy; 2022-2027 Kamal Sharma
        </div>
        <div>
            <Link href="https://www.github.com/Kamal040102/portfolio-kamal">Source Code</Link>
        </div>
    </div>
    </div>
  )
}

export default MainFooter