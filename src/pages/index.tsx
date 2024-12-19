import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import styles from '../styles/index.module.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={styles.container}>
      <ul className={styles.listContainer}>
        <li className={styles.listItem}>
          <Link href="./search" className={styles.link}>
            検索したい
          </Link>
        </li>
      </ul>
    </div>
  );
}
