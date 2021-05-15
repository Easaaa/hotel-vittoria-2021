import { useState, useEffect } from 'react';
import Header from '@/components/organism/Header';
import useLocale from 'hooks/useLocale';
import Title from 'components/atoms/Title';
import RoomsPreview from 'components/organism/RoomsPreview';
import ImgCentral from '@/components/molecules/ImgCentral';
import Carousel from 'components/molecules/Carousel';
import InfoRoom from 'components/organism/InfoRoom';
import Contact from '@/components/organism/Contact';
import Footer from '@/components/organism/Footer';
import Seo from '@/components/Layout/Seo';

import ImageGallery from 'react-image-gallery';

export default function Rooms({ roomFrom }) {
  const { t, locale } = useLocale();
  const [room, setRoom] = useState('lake-view');
  const filteredRoom = t.rooms.rooms.filter(
    (room) => room.name === roomFrom
  )[0];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (roomFrom) {
      setRoom(roomFrom);
      setIsLoading(false);
    }
  }, []);

  const textImage = `<h4 class='text-center font-extralight text-white text-5xl mb-2 capitalize'>${room} Suite</h4><p class="text-xl font-extralight">4 guests</p>`;

  const seoAttributes = {
    title: t.seo.apartments,
  };

  if (isLoading) return <div>....</div>;

  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  return (
    <>
      <Seo {...seoAttributes} />
      <Header simplified />
      {/*  <Title title={roomFrom} t={t} locale={locale} margin='mt-10' /> */}
      <ImgCentral
        image='/bed-room-header.png'
        textImage={textImage}
        videoUrl={filteredRoom?.videoUrl}
        priorityImg
      />
      {/* <Carousel t={t} selectedRoom={roomFrom} /> */}

      <div className='flex flex-col w-full mb-20 text-center'>
        <h2 className='title_section'>A look inside it</h2>
        <p className='mx-auto text-base leading-relaxed lg:w-2/3 max-w-prose'>
          Have a look to our amazing rooms with lake view. They have a direct
          access to the shared terrace provided with tables and chairs to sit
          and enjoy the view during the day and the meals.
        </p>
      </div>
      <div className='mx-auto mb-6 sm:mb-20 sm:w-2/3'>
        <ImageGallery
          items={images}
          lazyLoad={true}
          showPlayButton={false}
          showIndex={true}
        />
      </div>

      <InfoRoom t={t} />

      <RoomsPreview locale={t} room={roomFrom} />
      <Contact t={t} simplified />
      <Footer t={t} />
    </>
  );
}

Rooms.getInitialProps = async ({ query }) => {
  const { room } = query;
  return { roomFrom: room || 'lake-view' };
};
