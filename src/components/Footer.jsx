import {BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer className="bg-black/80 py-4 w-full text-white">
      <div className="max-w-[1240px] mx-auto  grid  md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
        <div className='col-span-2 '>
          <h2 className="py-4 text-4xl font-bold">ArchiWeb</h2>
          <p className="text-lg font-light">
            ArchiWeb is an architectural consultant based in Berlin, Germany. We
            provide solutiosn for your architecture and residential design
          </p>
          <div className='text-2xl flex justify-between pt-8'>
            <BsFacebook />
            <BsInstagram />
            <BsTwitter />
            <div></div>
            <div></div>
          </div>
        </div>
        <div>
          <h2 className='text-3xl font-bold py-4'>Articles</h2>
          <div className='flex flex-col gap-3 text-lg font-light'>
            <p>7 tips for kids Friendly Interior design</p>
            <p>Smart tips for changing the room</p>
            <p>Eco friendly design</p>
          </div>
        </div>
        <div>
          <h2 className='text-3xl font-bold py-4'>Links</h2>
          <ul className='flex flex-col gap-2 text-lg font-light'>
            <li>Link 1 </li>
            <li>Link 2 </li>
            <li>Link 3 </li>
          </ul>
        </div>
        <div>
          <h2 className='text-3xl font-bold py-4'>Location</h2>
          <iframe
            className='h-[250px] aspect-square'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10674.23916413762!2d-113.26148103431393!3d51.70438800772787!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5373804b95a39821%3A0x893740bbbd79fba!2sBest%20Western%20Diamond%20Inn!5e1!3m2!1sen!2sin!4v1665300740791!5m2!1sen!2sin"
            
            title='google maps'
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
