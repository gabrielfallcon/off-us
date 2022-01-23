import { useState, FormEvent } from 'react';
import Router from 'next/router';
import clsx from 'clsx';
import api from '../../server/api';
import Lottie, { Options } from 'react-lottie';
import animationData from '../../lottiefile/animation.json';
import Head from 'next/head';
import { Card } from '../../components'; 
import { FiUsers, FiRepeat, FiSearch, FiMapPin, FiDollarSign } from 'react-icons/fi'
import { IProductProps, CityOptions } from '../../types/Product';
import styles from '../../styles/search/search.module.scss';

const Home = () => {
  const [isShowHotel, setShowHotel] = useState<boolean>(false);
  const [isShowLoading, setShowLoading] = useState<boolean>(false);

  const [data, setData] = useState<Array<IProductProps>>([]);

  const [inputCity, setInputCity] = useState('');
  const [inputBasePrice, setInputBasePrice] = useState('');
  const [inputCapacity, setInputCapacity] = useState('');

  const defaultOption: Options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const handleShowHotel = () => {
    window.scroll(0, 500)
    setShowLoading(true);

    setTimeout(() => {
      setShowLoading(false);

      setTimeout(() => {
        setShowHotel(true);
      }, 100)
    }, 4000)
  }

  const resetInputs = () => {
    setInputCity('');
    setInputBasePrice('');
    setInputCapacity('');
  }

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    setShowHotel(false);
    
    if (!inputCity) {
      alert('error')
    }

    const city = inputCity;
    const priceNight = parseInt(inputBasePrice);
    const capacity = parseInt(inputCapacity);

    const res = await api.post("search", {
      city,
      priceNight,
      capacity
    });

    setData(res.data);
    handleShowHotel();
    resetInputs();
  }

  const handleViewProduct = (id: string) => {
    Router.push(`/search/${id}`);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.bannerSection}>
          <div className={styles.contentBlockText}>
            <h1 className={styles.contentBlockTextTitle}>
              Stress is good, be happy!
            </h1>

            <p className={styles.contentBlockTextDescription}>
              Find a place where your employees remember the company they work for!
            </p>
          </div>

          <form action="POST" onSubmit={handleSearch}>
            <div className={styles.contentInputs}>
              <div className={styles.contentInputsBox}>
                <div className={styles.contentIcon}>
                  <FiRepeat color='#191919'/>
                </div>
                <div className={styles.boxItem}>
                  <label>City</label>

                  <div className={styles.boxInput}>
                    <FiMapPin color="#191919"/>

                    <input 
                      type='text' 
                      placeholder='Insira o nome da cidade desejada' 
                      value={inputCity}
                      required
                      onChange={(e) => setInputCity(e.target.value)}
                    />
                  </div>
                </div>
                <div className={styles.boxItem}>
                  <label>Media de valor/noite</label>

                  <div className={styles.boxInput}>
                    <FiDollarSign color="#191919"/>

                    <input 
                      type='text' 
                      placeholder='Insira o seu destino de origem' 
                      required
                      value={inputBasePrice}
                      onChange={(e) => setInputBasePrice(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className={clsx(styles.contentInputsBox, styles.small)}>
                <div className={styles.boxItem}>
                  <label>People(s)</label>

                  <div className={styles.boxInput}>
                    <FiUsers color="#191919"/>

                    <input 
                      type='text' 
                      placeholder='Insira a quantidde de hospedes' 
                      required
                      value={inputCapacity}
                      onChange={(e) => setInputCapacity(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              
              <button className={styles.contentInputsBtnSearch} type='submit'>
                <FiSearch />
                Search
              </button>
            </div>
          </form>
        </section>

        <section className={styles.contentHotel} id='container-hotel'>
          <h1 className={styles.contentHotelTitle}>
            Escolha um hotel e aproveite!
          </h1>

          <div className={styles.contentShowCard}>
            <div className={clsx(
              styles.contentShowCardLoading,
              isShowLoading && styles.showLoading
            )}>
              <Lottie
                width='100%'
                height='100%'
                options={defaultOption}
              />
            </div>

            <div className={clsx(
              styles.collectionsHotel,
              isShowHotel && styles.showHotel
            )}>
              {data.map(hotel => {
                return (
                  <Card 
                    name={hotel.name}
                    description={hotel.description}
                    city={hotel.city}
                    accommodation={hotel.accommodation}
                    discount={hotel.discount}
                    priceNight={hotel.priceNight}
                    images={hotel.images}
                    id={hotel.id}
                    key={hotel.id}
                    capacity={hotel.capacity}
                    handleViewProduct={() => handleViewProduct(hotel.id)}
                  />
                )
              })}
            </div>
          </div>
        </section>  
      </main>
    </div>
  )
}

export default Home

// export  const  getServerSideProps: GetServerSideProps = async () => {
//   const res = await api.get("hotels");
//   const data = res.data;

//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: { data }
//   }
// }
