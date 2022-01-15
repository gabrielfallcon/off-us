import { useState } from 'react';
import type { NextPage } from 'next'
import clsx from 'clsx';
import Head from 'next/head'
import { 
  FiAlertCircle, 
  FiMenu, 
  FiX, 
  FiUsers,
  FiRepeat,
  FiSearch
} from 'react-icons/fi'
import {
  Container,
  Header,
  HeaderMob,
  Main,
  Footer
} from '../styles/home'

const Home: NextPage = () => {
  const [showMenuMob, setShowMenuMob] = useState(false);

  const handleShowMenuMob = () => {
    setShowMenuMob(!showMenuMob);
  }

  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <Header>
        <h1 className='header-logo'>
          Off<strong>Us</strong>
        </h1>

        <ul className='header-list'>
          <li>Pomotion</li>
          <li>Facilits</li>
          <li>Cabins</li>
          <li>Gallery</li>
        </ul>

        <FiAlertCircle />
      </Header>

      <HeaderMob>
        <FiMenu size={38} onClick={handleShowMenuMob} />

        <div className={clsx(showMenuMob && 'showMenu', 'headermob-content')}>
          <FiX size={38} onClick={handleShowMenuMob} />

          <ul className='headermob-list'>
            <li>Pomotion</li>
            <li>Facilits</li>
            <li>Cabins</li>
            <li>Gallery</li>
          </ul>
        </div>

        <h1 className='header-logo'>
          Off<strong>Us</strong>
        </h1>
      </HeaderMob>

      <Main>
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
      </Main>

      <Footer>
        
      </Footer>
    </Container>
  )
}

export default Home
