import React from 'react';
import Link from "next/link";
import { Metadata } from 'next';
import Styles from "../styles/Home.module.css";
import { Container } from 'postcss';

export const metadata: Metadata = {
  title: 'Search',
}

export default function Search() {
  return (
    <div className={Styles.container}>
      <div className="sticky top-0 bg-orange-200 border-b-2 border-gray-300 p-4 z-10 flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Search</h1>
      </div>
    </div>
  );
}