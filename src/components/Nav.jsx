import  {BiSearch} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav className='w-full fixed bg-white z-20'>
      <div className=' max-w-[1240px] mx-auto flex justify-between h-24 items-center px-8'>
        <h1 className=' font-bold text-3xl'>ArchiWeb</h1>
        <ul className=' flex  justify-evenly items-center '>
          <li className='p-6 '>Home</li>
          <li className='p-6 '>Projects</li>
          <li className='p-6 '>About</li>
          <li className='p-6 '>Contact</li>
          <li className='p-6 text-2xl '><BiSearch /></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
