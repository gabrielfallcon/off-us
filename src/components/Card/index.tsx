import clsx from 'clsx';
import { CardContainer} from './card';
import {
  FiAlertCircle,
  FiMenu,
  FiX
} from 'react-icons/fi';



export const Card = () => {
  return (
    <CardContainer>
      <div className='flag-discount'>
        <span>25% Off</span>
      </div>

      <img 
        src='images/hotel-card.jpg' 
        className='img-card'
        alt='Hotel'
      />

      <div className='content-info'>
        <h1 className='content-info__title'>
          Mansão em Orlando
        </h1>
        <p className='content-info__description'>
          Proximo a praia mais visitada de Orlando
        </p>

        <div className='content-info__accommodation'>
          <div className='accommodation-item'>
            <FiX color='#c9ced6' size={12}/> 
            <span>Cama</span>
          </div>
          <div className='accommodation-item'>
            <FiX color='#c9ced6' size={12}/> 
            <span>Wifi</span>
          </div>
          <div className='accommodation-item'>
            <FiX color='#c9ced6' size={12}/> 
            <span>Rede</span>
          </div>
          <div className='accommodation-item'>
            <FiX color='#c9ced6' size={12}/> 
            <span>TV</span>
          </div>
          <div className='accommodation-item'>
            <FiX color='#c9ced6' size={12}/> 
            <span>Suite</span>
          </div>
          <div className='accommodation-item'>
            <FiX color='#c9ced6' size={12}/> 
            <span>Piscina</span>
          </div>
        </div>
      </div>
    
      <div className='content-price'>
        <p className='price'>
          $55<span>/Night</span>
        </p>

        <button className='btn-view'>
          View Availabillity
        </button>
      </div>
    </CardContainer>
  );
}

