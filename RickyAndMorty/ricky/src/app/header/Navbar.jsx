import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="container">
    <div className="logo">
      <Link href="/">
        <h2>Ricky And Morty</h2>
      </Link>
    </div>
    <div className="links">
      <Link href="/about">About</Link>
      <Link href="/karakterler">Characters</Link>
      <Link href="/bolumler">Sections</Link>
    </div>
  </header>
  )
}

export default Navbar
