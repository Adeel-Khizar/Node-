import { Francois_One } from 'next/font/google';
import { Quicksand
} from 'next/font/google';

const unbounded = Francois_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--passionOne',
});

 
const acme = Quicksand
({
  subsets: ['latin'],
  weight: '400',
  variable: '--passionOne',
});

export const SedaN  =  acme.className;
 
export const Rancher  =  unbounded.className;