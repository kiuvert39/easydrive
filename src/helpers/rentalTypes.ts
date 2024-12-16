export type User = {
  id?: number;
  name?: string;
  email?: string;
  image: string;
  phone?: string;
  birthdate?: string;
};

export type Bike = {
  model: string;
  image: string;
  status: string;
  location: string;
  Park: {
    id: number;
    name: string;
    location: string;
    image: string;
  };
};

export type Rentals = {
  id: number;
  price: number;
  status: string;
  start_time: string;
  end_time: string;
  qrcode: string;
  created_at: string;
  updated_at: string;
  rental_date?: string;
  User: User;
  Bike: Bike;
};
