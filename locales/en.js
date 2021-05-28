/* ==== ACTIVITIES ==== */
import Pizzoccolo2Img from '../assets/activities/pizzoccolo2.png';
import HotelFromPool from '../public/assets/home/hotel-1.jpg';
import PizzoccoloImg from '../public/assets/activities/pizzoccolo-verticale.jpg';

/* ==== ICONS ===== */
import { GiSittingDog as DogIcon } from 'react-icons/gi';
import { AiOutlineWifi as WifiIcon } from 'react-icons/ai';
import { FaParking } from 'react-icons/fa';
import { MdKitchen } from 'react-icons/md';
import WellnessIcon from '../assets/icons/wellness.png';
import RiverIcon from '../assets/icons/river.png';
import BeachIcon from '../assets/icons/beach.png';
import BikeIcon from '../assets/icons/bike.png';
import GolfIcon from '../assets/icons/golf.png';
import LakeIcon from '../assets/icons/lake.png';
import MountainIcon from '../assets/icons/mountain.png';

export default {
  seo: {
    homepage: 'Homepage',
    apartments: 'Rooms',
    lodge: 'The Hotel',
    activities: 'Activities',
  },
  navbar: {
    home: 'Home',
    lodge: 'The Hotel',
    apartments: 'Rooms',
    activities: 'Activities',
    contact: 'Contact',
  },
  header: {
    welcome: 'welcome',
    hotel_vittoria: {
      title: `A fantastic stay`,
      subTitle: 'for you.',
      text: 'We are an happy family that has been working here for generations.',
      cta: 'Learn More',
      img: {
        url: HotelFromPool,
        alt: 'Hotel Vittoria view from the garden, with a swimming pool',
      },
    },
  },

  rooms: {
    title: 'Rooms & Views',
    desc: 'The Hotel Vittoria is located in the heart of Maderno village. Our facility is comfortable and quiet: it is situated in a residential area surrounded by olive trees, it disposes of large and bright spaces in a warm and welcoming atmosphere.',
    rooms: [
      {
        name: 'lake-view',
        price: '50',
        guest: 'From 65 € per day',
        viewMore: 'View more',
        img: '/assets/lake-view.png',
        videoUrl: 'https://www.youtube.com/embed/FCwlLM-Jqic',
        alt: 'An internal view of serenity apartment, with a wood table and a big window.',
        othersImages: [
          { url: '/assets/lake-view.png', alt: '' },
          { url: '/assets/rooms/serenity/2.jpeg', alt: '' },
          { url: '/assets/rooms/serenity/3.jpeg', alt: '' },
          { url: '/assets/rooms/serenity/4.jpeg', alt: '' },
          { url: '/assets/rooms/serenity/5.jpeg', alt: '' },
          { url: '/assets/rooms/serenity/6.jpeg', alt: '' },
          { url: '/assets/rooms/serenity/7.jpeg', alt: '' },
          { url: '/assets/rooms/serenity/8.jpeg', alt: '' },
        ],
      },
      {
        name: 'garden-view',
        price: '70',
        guest: 'From 55 € per day',
        viewMore: 'View more',
        img: '/assets/garden-view.jpg',
        videoUrl: 'https://www.youtube.com/embed/lG8iiNx6A2g',
        alt: 'An internal view of Armony apartment, with a wood table and a big window.',
        othersImages: [
          { url: '/assets/garden-view.jpg', alt: '' },
          { url: '/assets/rooms/armony/2.jpeg', alt: '' },
          { url: '/assets/rooms/armony/3.jpeg', alt: '' },
          { url: '/assets/rooms/armony/4.jpeg', alt: '' },
          { url: '/assets/rooms/armony/5.jpeg', alt: '' },
          { url: '/assets/rooms/armony/6.jpeg', alt: '' },
          { url: '/assets/rooms/armony/7.jpeg', alt: '' },
          { url: '/assets/rooms/armony/8.jpeg', alt: '' },
        ],
      },
      {
        name: 'mountain-view',
        price: '60',
        guest: 'From 50 € per day',
        viewMore: 'View more',
        img: '/assets/internal-view.jpg',
        videoUrl: 'https://www.youtube.com/embed/Efg7OlrCklY',
        alt: 'An internal view of Joy apartment, with a wood table and a big window.',
        othersImages: [
          { url: '/assets/internal-view.jpg', alt: '' },
          { url: '/assets/rooms/joy/2.jpeg', alt: '' },
          { url: '/assets/rooms/joy/3.jpeg', alt: '' },
          { url: '/assets/rooms/joy/4.jpeg', alt: '' },
          { url: '/assets/rooms/joy/5.jpeg', alt: '' },
          { url: '/assets/rooms/joy/6.jpeg', alt: '' },
          { url: '/assets/rooms/joy/7.jpeg', alt: '' },
          { url: '/assets/rooms/joy/8.jpeg', alt: '' },
          { url: '/assets/rooms/joy/9.jpeg', alt: '' },
        ],
      },
    ],
    viewOtherRooms: {
      title: 'View other Room types',
      /*  text:
        'The apartments are comfortable and charmingly furnished, with any tool that you may need during your journey.', */
    },
    infoRooms: {
      features: [
        { name: 'Mini Fridge', icon: <MdKitchen className='text-2xl' /> },
        { name: 'Parking', icon: <FaParking className='text-2xl' /> },
        { name: 'Free Wi-Fi', icon: <WifiIcon className='text-2xl' /> },
        { name: 'Animal Friendly', icon: <DogIcon className='text-2xl' /> },
      ],
      bulletList: {
        title: 'Description',
        list: [
          'They have a direct access to the shared terrace provided with tables and chairs to sit and enjoy the view during the day and the meals.',
        ],
      },
      additionalInfo: {
        title: 'Additional Info',
        arrivalDeparture: {
          title: 'Check-in / Check-out',
          text: 'The check-in is allowed from 10:00 am to 06:00 pm. The check-out limit is 10:00 am.',
        },
      },
      lookInside: {
        title: 'A look inside it',
        text: 'Have a look to our amazing rooms. Lake views rooms have a direct access to the shared terrace provided with tables and chairs to sit and enjoy the view during the day and the meals.',
      },
    },
  },

  activities: {
    title: 'Activities',
    desc: 'There are a lot of activities you can do. Toscolano Maderno is full of attractions, with plenty of routes for incredible walking, cycling and climbing. The magnificent beach is also 10 minutes away by walk.',
    cta: 'Learn More',
    activitiesList: [
      { name: 'mountain', icon: MountainIcon },
      { name: 'bike', icon: BikeIcon },
      { name: 'wellness', icon: WellnessIcon },
      { name: 'beach', icon: BeachIcon },
    ],
  },
  contact: {
    title: 'Book Now',
    desc: 'At our Hotel, there is a variety of rooms to choose from. Whether you want.',
    form: {
      name: {
        name: 'name',
        placeholder: 'Full Name',
      },
      arrival: {
        name: 'arrival',
        placeholder: 'Select an arrival date',
      },
      departure: {
        name: 'departure',
        placeholder: 'Select a departure date',
      },
      email: {
        name: 'email',
        placeholder: 'Email',
      },
      message: {
        name: 'message',
        placeholder: 'Write your message',
      },
      is_required: 'This field is required',
      success_msg:
        'Email submitted correctly! We will reply you as soon as possible. Thanks.',
      error_msg:
        'Oops, it seems that there is an error, try again. Otherwise write us directly at info@sanlorenzodipersegno.it',
      button_text: 'send',
    },
  },
  lodge: {
    img_text: "It's coazy",
    title: `Our priority is to meet all of your needs`,
    subTitle: 'with special care for details.',
    text: '',
    facility: {
      img: '/assets/hotel/facility.jpg',
      title: 'The facilities',
      text: 'The hotel disposes of a private swimming pool for our guests, with two different depths: the first is 1.50 m deep, suitable for adults, and the second is 1 m deep, suitable for children. In the garden you can find sun umbrellas, lawn chairs and tables where you can comfortably eat lunch/dinner in the open air.',
    },

    breakfast: {
      img: '/assets/hotel/terrace.jpg',
      title: 'Breakfast',
      text: 'Breakfast is served between 08:00 and 10:00. You will find a rich smorgasbord, salty and sweet, with delicious homemade cakes. You can also eat outside in our paradisiac terrace.',
    },
  },
  activities_page: {
    mountain: {
      title: 'Mountain Pizzoccolo',
      desc: 'This is the subtitile of mountain pizzoccolo category. This mountain is 1680m height. Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
      img: Pizzoccolo2Img,
      sections: [
        {
          title: 'An amazing walk',
          desc: 'Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
          img: PizzoccoloImg,
        },
      ],
    },
    bike: {
      title: 'Bike in Garda Lake',
      desc: 'This is the subtitile of mountain pizzoccolo category. This mountain is 1680m height. Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
      img: '',
      sections: [
        {
          title: 'An amazing walk',
          desc: 'Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
          img: '',
          component: 'central',
        },
        {
          title: 'Not a nice day',
          desc: 'Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
          img: HotelFromPool,
          component: 'left',
        },
      ],
    },
    wellness: {
      title: 'Wellness in Toscolano Maderno',
      desc: 'This is the subtitile of mountain pizzoccolo category. This mountain is 1680m height. Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
      img: '',
      sections: [
        {
          title: 'A pleasure in a SPA',
          desc: 'Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
          img: '',
          component: 'central',
        },
        {
          title: 'Massage',
          desc: 'Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
          img: HotelFromPool,
          component: 'left',
        },
      ],
    },
    beach: {
      title: 'Beach in Garda Lake',
      desc: 'This is the subtitile of mountain pizzoccolo category. This mountain is 1680m height. Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
      img: '',
      sections: [
        {
          title: 'Limone Beach awasome',
          desc: 'Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
          img: '',
          component: 'central',
        },
        {
          title: 'Sirmione exclusive beach',
          desc: 'Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
          img: HotelFromPool,
          component: 'left',
        },
      ],
    },
  },
};
