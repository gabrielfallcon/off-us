import React from 'react'
import clsx from 'clsx';
import { HeaderContent, HeaderMobContent } from './headerMobile';
import {
  FiAlertCircle,
  FiMenu,
  FiX
} from 'react-icons/fi';


export interface IHeaderProps {
  isMenuActive?: boolean;
  handleHeaderMenu?: () => void;
}



const HeaderMobile: React.FC<IHeaderProps> = ({ isMenuActive, handleHeaderMenu }) => {
  return (
    <HeaderMobContent>
      <FiMenu size={38} onClick={handleHeaderMenu} />

      <div className={clsx(isMenuActive && 'showMenu', 'headermob-content')}>
        <FiX size={38} onClick={handleHeaderMenu} />

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
    </HeaderMobContent>
  );
}

export default HeaderMobile;