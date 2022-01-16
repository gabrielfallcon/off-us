interface AccommodationArray {
  name: string;
}

export interface CityOptions {
  city: 'New York' | 'San Diego' | 'Las Vegas' | 'Orlando';
}

export interface IProductProps extends CityOptions{
  id: string;
  name: string;  
  description: string;
  accommodation: Array<AccommodationArray>
  priceNight: number;
  discount: string;
  images: string;
  capacity: number;
}