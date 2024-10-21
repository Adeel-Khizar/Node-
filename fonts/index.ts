import { Unbounded } from 'next/font/google';
import { Aclonica
} from 'next/font/google';

const unbounded = Unbounded({
  subsets: ['latin'],
  weight: '400',
  variable: '--passionOne',
});

 
const acme = Aclonica
({
  subsets: ['latin'],
  weight: '400',
  variable: '--passionOne',
});

export const Acmee  =  acme.className;
 
export const Unbound  =  unbounded.className;