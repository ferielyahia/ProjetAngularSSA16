export interface Event {
  id: number;
  title: string;
  category: 'Atelier' | 'Conférence' | 'Sport';
  date: string;
  place: string;
  price: number;
  imageUrl?: string;
  description: string;
}
