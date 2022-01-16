import { useState, useEffect, FormEvent } from 'react';
import { GetServerSideProps } from 'next'
import clsx from 'clsx';
import { Link, animateScroll, Button } from 'react-scroll';
import api from '../server/api';
import Lottie, { Options } from 'react-lottie';
import animationData from '../lottiefile/animation.json';
import Head from 'next/head'
import { Header, HeaderMob, Card } from '../components';
import { FiUsers, FiRepeat, FiSearch, FiMapPin, FiDollarSign } from 'react-icons/fi'
import { IProductProps, CityOptions } from '../types/Product';
import { Container, Main, BannerSection, Section, Footer } from '../styles/home';


const Home = () => {
  const [showMenuMob, setShowMenuMob] = useState<boolean>(false);
  const [isShowHotel, setShowHotel] = useState<boolean>(false);
  const [isShowLoading, setShowLoading] = useState<boolean>(false);

  const [data, setData] = useState<Array<IProductProps>>([]);

  console.log(data);

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

  const handleShowMenuMob = () => {
    setShowMenuMob(!showMenuMob);
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

  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>
      
      <Header />

      <HeaderMob isMenuActive={showMenuMob} handleHeaderMenu={handleShowMenuMob} />

      <Main>
        <BannerSection>
          <div className='content-block-text'>
            <h1 className='content-block-text__title'>
              Stress is good, be happy!
            </h1>

            <p className='content-block-text__description'>
              Find a place where your employees remember the company they work for!
            </p>
          </div>

          <form action="POST" onSubmit={handleSearch}>
            <div className='content-inputs'>
              <div className='content-inputs__box'>
                <div className="content-icon">
                  <FiRepeat color='#191919'/>
                </div>
                <div className="box-item">
                  <label>City</label>

                  <div className='box-input'>
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
                <div className="box-item">
                  <label>Media de valor/noite</label>

                  <div className='box-input'>
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

              <div className='content-inputs__box small'>
                <div className="box-item">
                  <label>People(s)</label>

                  <div className='box-input'>
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
              
              <button className='content-inputs__btn-search' type='submit'>
                <FiSearch />
                Search
              </button>
            </div>
          </form>
        </BannerSection>

        <Section id='container-hotel'>
          <h1 className='content-title'>
            Escolha um hotel e aproveite!
          </h1>

          <div className="content-show-card">
            <div className={clsx(
              'content-show-card--loading',
              isShowLoading && 'show-loading'
            )}>
              <Lottie
                width='100%'
                height='100%'
                options={defaultOption}
              />
            </div>

            <div className={clsx(
              'collections-hotel',
              isShowHotel && 'show-hotel'
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
                  />
                )
              })}
            </div>
          </div>
        </Section>  
      </Main>

      <Footer>
        
      </Footer>
    </Container>
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
