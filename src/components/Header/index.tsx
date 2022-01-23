import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';


import { HeaderContent } from './header';

const Header = ( ) => {
  return (
    <HeaderContent>
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
    </HeaderContent>
  );
}

export default Header;