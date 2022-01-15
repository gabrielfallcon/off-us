import { useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, HeaderMob, Card } from '../src/components';
import { FiUsers, FiRepeat, FiSearch } from 'react-icons/fi'
import {
  Container,
  Main,
  BannerSection,
  Section,
  Footer
} from '../styles/home'



const Home: NextPage = () => {
  const [showMenuMob, setShowMenuMob] = useState<boolean>(false);

  const handleShowMenuMob = () => {
    setShowMenuMob(!showMenuMob);
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

          <div className='content-inputs'>
            <div className='content-inputs__box'>
              <div className="content-icon">
                <FiRepeat color='#191919'/>
              </div>
              <div className="box-item">
                <label>Check in</label>

                <div className='box-input'>
                  <input type='date' placeholder='Insira o seu destino de origem' />
                </div>
              </div>
              <div className="box-item">
                <label>Check out</label>

                <div className='box-input'>
                  <input type='date' placeholder='Insira o seu destino de origem' />
                </div>
              </div>
            </div>

            <div className='content-inputs__box small'>
              <div className="box-item">
                <label>People(s)</label>

                <div className='box-input'>
                  <FiUsers color="#191919"/>

                  <input type='text' placeholder='Insira a quantidde de hospedes' />
                </div>
              </div>
            </div>

            <button className='content-inputs__btn-search'>
              <FiSearch />
              Search
            </button>
          </div>
        </BannerSection>

        <Section>
          <h1 className='content-title'>
            Escolha um hotel e aproveite!
          </h1>

          <div className="collections-hotel">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            
          </div>
        </Section>  
      </Main>

      <Footer>
        
      </Footer>
    </Container>
  )
}

export default Home
