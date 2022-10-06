import Head from 'next/head';
//import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar/Navbar';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';
import ItemBenefits from '../components/ItemBenefits/ItemBenefits';
import Hero from '../components/Hero/Hero';
import { useEffect, useState, useContext } from 'react';
import CardFeature from '../components/CardFeature/CardFeature';

import { faLightbulb, faSmile } from '@fortawesome/free-regular-svg-icons';

import { faWind, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../contexts/CartContext';
import { getFirestore } from '../utils/firebase';
import { doc } from 'prettier';

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
  const { cart, setCart } = useContext(CartContext);
  const [cardsFeature, setCardsFeature] = useState(['Destacados', 'Nuevos Bonsais', 'Descuentos']);

  const showCardsFeature = () => {
    return cardsFeature.map((card, index) => <CardFeature key={index} text={card} />);
  };

  // useEffect(() => {
  //   setCart([
  //     { id: 1, name: 'Robert' },
  //     { id: 2, name: 'Mike' },
  //   ]);
  // }, [setCart]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const db = getFirestore();
        const itemsCollection = db.collection(`accesorios`);
        console.log(itemsCollection);
        const itemSnapshot = await itemsCollection.get();

        const items = itemSnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });

        console.log(items);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  const dataPage = { page: 'index' };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/wxl3mdd.css"></link>
        <link rel="stylesheet" href="https://use.typekit.net/jfy4rte.css"></link>
      </Head>
      <Navbar page={dataPage} />
      <Hero />
      <div className={styles['cardsFeatureContainer']}>{showCardsFeature()}</div>
      <Features dataItems={dataItems} />
      <Footer />
      {cart.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </>
  );
}
