const HeaderItem = ({ Icon, title }) => {
  return (
    <li className="group w-12 sm:w-20 hover:text-white">
      <a href="" className="flex flex-col items-center">
        <Icon className="h-8 group-hover:animate-bounce transition ease-in mb-1"></Icon>
        <p className="opacity-0 group-hover:opacity-100 transition ease-in tracking-widest">{title}</p>
      </a>
    </li>
  );
};

export default HeaderItem;
