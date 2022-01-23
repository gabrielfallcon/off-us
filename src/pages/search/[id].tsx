import api from '../../server/api';
import { IProductProps } from '../../types/Product';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import styles from '../../styles/search/id.module.scss';

export default function productDetail({...props}: IProductProps) {
  return (
      <div className={styles.productDetails}>
        <div className={styles.productImage}>
          <img 
            src={props.images} 
            alt="Image Banner"
          />
        </div>

        <div className={styles.productInfo}>
          <div className={styles.productInfoDescription}>
            <div className={styles.productInfoDescriptionTitle}>
              <h1 className={styles.productInfoTitle}>
                {props.name}
              </h1>

              <span className={styles.productInfoCapacity}>
                {props.capacity} hóspedes
              </span>
            </div>

            <ul className={styles.productInfoDescriptionListAccommodations}>
              {props.accommodation.map((acc, index: number) => {
                return (
                  <li key={index}>
                    <span>
                      {acc.name}
                    </span>
                  </li>
                );
              })}
            </ul>            
          </div>
          
          <div className={styles.productInfoPrice}>
            <p className={styles.productInfoPriceValue}>
              US${props.priceNight} / <span>night</span> 
            </p>

            <button className={styles.btnBuyReservation}>
              Reservation
            </button>
          </div>
        </div>
      </div>
  );
}


export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const id = context.query.id as string;

  const response = await api.get(`search/${id}`);

  const hotel = response.data;

  return {
    props: hotel, 
  }
};