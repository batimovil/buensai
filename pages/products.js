import { useEffect, useState } from 'react';
import { getFirestore } from '../utils/firebase';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import HeroProducts from '../components/HeroProducts/HeroProducts';
import ProductCard from '../components/ProductCard/ProductCard';
import Footer from '../components/Footer/Footer';
import Paginador from '../components/Paginador/Paginador';

const Products = () => {
  const dataPage = { page: 'products' };
  //const { cart, setCart } = useContext(CartContext);
  const [dataProducts, setDataProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [cantToShow, setCantToShow] = useState(6);

  const goToProduct = (id) => {
    router.push(`/singleProduct/${id}`);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const db = getFirestore();
        const itemsCollection = db.collection(`productos`);
        const itemSnapshot = await itemsCollection.get();

        const items = itemSnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setDataProducts(items);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  const handleLoadMore = () => {
    setCantToShow(cantToShow + 3);
  };

  return (
    <>
      <Head>
        <title>Productos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/wxl3mdd.css"></link>
        <link rel="stylesheet" href="https://use.typekit.net/jfy4rte.css"></link>
      </Head>
      <Navbar page={dataPage} />
      <HeroProducts />
      <div
        style={{
          background: '#F9F4EF',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            margin: '50px auto',
          }}
          className="inner"
        >
          {!loading &&
            dataProducts.map((product, index) => {
              return index < cantToShow ? (
                <ProductCard
                  imagen={product.urlImage}
                  nombre={product.nombre}
                  precio={product.precio}
                  key={product.id}
                  goToProduct={() => goToProduct(product.id)}
                />
              ) : null;
            })}
        </div>
        <Paginador
          handleLoadMore={handleLoadMore}
          cantToShow={cantToShow}
          dataProducts={dataProducts}
          loading={loading}
        />
      </div>
      <Footer />
    </>
  );
};

export default Products;
