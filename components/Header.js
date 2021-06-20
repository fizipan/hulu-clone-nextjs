import Image from 'next/image';
import HeaderItem from 'components/HeaderItem';
import { HomeIcon, BadgeCheckIcon, CollectionIcon, SearchIcon, UserIcon, LightningBoltIcon } from '@heroicons/react/outline';

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center m-5 h-auto">
      <ul className="flex flex-grow justify-evenly items-center max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
        <HeaderItem title="SEACRH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </ul>
      <Image src="https://links.papareact.com/ua6" className="object-contain " alt="" width={200} height={100} />
    </header>
  );
};

export default Header;
