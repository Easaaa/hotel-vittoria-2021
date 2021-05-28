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

export default function Rooms({ roomFrom, imagesArray }) {
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

  return (
    <>
      <Seo {...seoAttributes} />
      <Header simplified />
      {/*  <Title title={roomFrom} t={t} locale={locale} margin='mt-10' /> */}
      <ImgCentral
        image={filteredRoom?.img}
        textImage={textImage}
        videoUrl={filteredRoom?.videoUrl}
        priorityImg
      />
      {/* <Carousel t={t} selectedRoom={roomFrom} /> */}

      <div className='flex flex-col w-full mb-20 text-center'>
        <h2 className='title_section'>{t.rooms.infoRooms.lookInside.title}</h2>
        <p className='mx-auto text-base leading-relaxed lg:w-2/3 max-w-prose'>
          {t.rooms.infoRooms.lookInside.text}
        </p>
      </div>
      <div className='mx-auto mb-6 sm:mb-20 sm:w-2/3'>
        <ImageGallery
          items={imagesArray}
          lazyLoad={true}
          showPlayButton={false}
          showIndex={true}
          showThumbnails={false}
        />
      </div>

      <InfoRoom t={t} />

      <RoomsPreview locale={t} room={roomFrom} />
      <Contact t={t} simplified />
      <Footer t={t} />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const queryRoom = (await query.room) || 'lake-view';
  const folder = await `/assets/rooms/${queryRoom}/`;

  const numPhoto =
    (queryRoom === 'lake-view' && 51) ||
    (queryRoom === 'garden-view' && 17) ||
    (queryRoom === 'mountain-view' && 51);
  var imagesArray = [];

  for (let i = 1; i <= numPhoto; i++) {
    imagesArray.push({
      original: `/assets/rooms/${queryRoom}/` + i + '.jpg',
      thumbnail: `/assets/rooms/${queryRoom}/` + i + '.jpg',
    });
  }

  return { props: { roomFrom: queryRoom, imagesArray } };
}
