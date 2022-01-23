import { CardContainer} from './card';
import Image from 'next/image';
import { FiX } from 'react-icons/fi';
import { IProductProps } from '../../types/Product';

interface ICardProps extends IProductProps {
  handleViewProduct?: () => void;
}

export const Card = ({...props}: ICardProps) => {
  return (
    <CardContainer>
      {props.discount && (
        <div className='flag-discount'>
          <span>{props.discount} Off</span>
        </div>
      )}

      <div className="img-card">
        <Image 
          src={`${props.images}`} 
          width={238}
          height={160}
          alt='Hotel'
        />
      </div>

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

        <button className='btn-view' onClick={props.handleViewProduct}>
          View Availabillity
        </button>
      </div>
    </CardContainer>
  );
}

