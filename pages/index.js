import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import { useState } from 'react';
import CardFeature from '../components/CardFeature/CardFeature';

export default function Home() {
  const [cardsFeature, setCardsFeature] = useState(['Destacados', 'Nuevos Bonsais', 'Descuentos']);

  const showCardsFeature = () => {
    return cardsFeature.map((card, index) => <CardFeature key={index} text={card} />);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/wxl3mdd.css"></link>
        <link rel="stylesheet" href="https://use.typekit.net/jfy4rte.css"></link>
      </Head>
      <Navbar />
      <Hero />
      <div className={styles['cardsFeatureContainer']}>{showCardsFeature()}</div>
    </>
  );
}
