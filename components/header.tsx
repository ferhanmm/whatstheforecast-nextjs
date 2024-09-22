"use client";
import Link from 'next/link';
import { FC } from 'react';

const Header: FC = () => (
  <header>
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
    <style jsx>{`
      header {
        background: #333;
        color: #fff;
        padding: 1rem;
      }
      nav ul {
        list-style: none;
        display: flex;
        justify-content: space-around;
      }
      nav ul li a {
        color: #fff;
        text-decoration: none;
      }
    `}</style>
  </header>
);

export default Header;