import Head from 'next/head';
//import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar/Navbar';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';
import ItemBenefits from '../components/ItemBenefits/ItemBenefits';
import Hero from '../components/Hero/Hero';
import { useState } from 'react';
import CardFeature from '../components/CardFeature/CardFeature';
import { faLightbulb, faSmile } from '@fortawesome/free-regular-svg-icons';
import { faWind, faLeaf } from '@fortawesome/free-solid-svg-icons';

const dataItems = [
  {
    icon: faLightbulb,
    title: 'Estimula tu mente',
    text: 'Promueve la mejora de tu percepción, paciencia y creatividad',
    id: '1',
  },
  {
    icon: faWind,
    title: 'Mejora el ecosistema',
    text: 'La calidad del aire que te rodea se verá beneficiado',
    id: '2',
  },
  {
    icon: faLeaf,
    title: 'Conexión con la naturaleza',
    text: 'lleva tu ambiente a un plano distinto',
    id: '3',
  },
  {
    icon: faSmile,
    title: 'Tranquilidad',
    text: 'Relaja y reduce el estrés ocasionado po la vida diaria',
    id: '4',
  },
];

export default function Home() {
  const [cardsFeature, setCardsFeature] = useState(['Destacados', 'Nuevos Bonsais', 'Descuentos']);

  const showCardsFeature = () => {
    return cardsFeature.map((card, index) => <CardFeature key={index} text={card} />);
  };

  const dataPage = { page: 'index' };

  return (
    <>
      <Head>
        <title>Buensai</title>
        <meta
          name="description"
          content="Buensai team Cami Dejtiar, Maxiiliano Coletti, Lautaro Hudson, German Figueroa"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/wxl3mdd.css"></link>
        <link rel="stylesheet" href="https://use.typekit.net/jfy4rte.css"></link>
      </Head>
      <Navbar page={dataPage} />
      <Hero />
      <Features dataItems={dataItems} />
      <Footer />
    </>
  );
}
