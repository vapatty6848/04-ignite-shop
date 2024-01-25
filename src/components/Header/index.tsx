
import logoImf from '../../assets/logoImf.svg'
import Image from 'next/image';

import Link from 'next/link';
import { Cart } from '../Cart';
import { Header } from './style';

export function HeaderComponent() {
  return (
    <Header>
      <Link href="/">

        <Image src={logoImf} alt="" />

      </Link>

      <Cart />
    </Header>
  )
}
