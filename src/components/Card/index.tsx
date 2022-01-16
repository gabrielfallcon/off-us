import { CardContainer} from './card';
import Image from 'next/image';
import { FiX } from 'react-icons/fi';
import { IProductProps } from '../../types/Product';

export const Card = ({...props}: IProductProps) => {
  return (
    <CardContainer>
      <div className='flag-discount'>
        <span>{props.discount} Off</span>
      </div>

      <Image 
        src={`${props.images}`} 
        className='img-card'
        alt='Hotel'
      />

      <div className='content-info'>
        <h1 className='content-info__title'>
          {props.name}
        </h1>
        <p className='content-info__description'>
          {props.description}
        </p>
        <div className='content-info__accommodation'>
          {props.accommodation.map((content, index: number) => {
            return (
              <div className='accommodation-item' key={index}>
                <FiX color='#c9ced6' size={12}/> 
                <span>{content.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    
      <div className='content-price'>
        <p className='price'>
          ${props.priceNight}<span>/Night</span>
        </p>

        <button className='btn-view'>
          View Availabillity
        </button>
      </div>
    </CardContainer>
  );
}

