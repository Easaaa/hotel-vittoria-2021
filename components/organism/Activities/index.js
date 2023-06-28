import { useRouter } from 'next/router';

export default function Activities({ t }) {
  const {
    activities: { title, desc, cta },
  } = t;

  console.log(t.activities);
  const router = useRouter();
  return (
    <section className='flex flex-wrap max-w-screen-lg px-5 py-10 mx-auto text-gray-600 place-content-center md:py-28'>
      <div className='flex flex-col w-full mb-20 text-center'>
        <h2 className='title_section'>
          <span className='block'>{title}</span>
        </h2>
        <p className='mx-auto text-base leading-relaxed lg:w-2/3 max-w-prose'>
          {desc}
        </p>
        {/* <div className='flex justify-center pt-5 md:pt-10'>
          <Button
            text={cta}
            ctaStyle='underline'
            onClick={() =>
              router.push('/attivita').then(() => window.scrollTo(0, 0))
            }
          />
        </div> */}
      </div>

      <div className='flex flex-wrap w-1/2'>
        <div className='w-1/2 p-1 md:p-2'>
          <img
            lazy
            alt='A white mountain after snowing and a black dog'
            className='block object-cover object-center w-full h-full'
            src='https://ik.imagekit.io/dcwkdo37k/Hotel_Vittoria/activities/activities/cane.png?updatedAt=1687974872162'
            width={475}
            height={475}
          />
        </div>
        <div className='w-1/2 p-1 md:p-2'>
          <img
            lazy
            alt='the river inside valle camerate valley, near agriturismo'
            className='block object-cover object-center w-full h-full'
            src='https://ik.imagekit.io/dcwkdo37k/Hotel_Vittoria/activities/activities/river.jpg?updatedAt=1687974878372'
            width={475}
            height={475}
          />
        </div>
        <div className='w-full p-1 md:p-2'>
          <img
            lazy
            alt='The monte pizzoccolo from the Salo village'
            className='block object-cover object-center w-full h-full'
            src='https://ik.imagekit.io/dcwkdo37k/Hotel_Vittoria/activities/activities/pizzoccolo-verticale.jpg?updatedAt=1687974883188'
            width={775}
            height={1225}
          />
        </div>
      </div>
      <div className='flex flex-wrap w-1/2'>
        <div className='w-full p-1 md:p-2'>
          <img
            lazy
            alt='gallery'
            className='block object-cover object-center w-full h-full'
            src='https://ik.imagekit.io/dcwkdo37k/Hotel_Vittoria/activities/activities/pizzoccolo2.png?updatedAt=1687974867316'
            width={875}
            height={675}
          />
        </div>
        <div className='w-1/2 p-1 md:p-2'>
          <img
            lazy
            alt='A lemon plant in Limone del Garda'
            className='block object-cover object-center w-full h-full'
            src='https://ik.imagekit.io/dcwkdo37k/Hotel_Vittoria/activities/activities/limoni.jpg?updatedAt=1687974863646'
            width={475}
            height={475}
          />
        </div>
        <div className='w-1/2 p-1 md:p-2'>
          <img
            lazy
            alt='A selection of mountain cheese on a table'
            className='block object-cover object-center w-full h-full'
            src='https://ik.imagekit.io/dcwkdo37k/Hotel_Vittoria/activities/activities/spritz.jpg?updatedAt=1687974875050'
            width={475}
            height={475}
          />
        </div>
        <div className='w-full p-1 md:p-2'>
          <img
            lazy
            alt='The Toscolano Maderno square with a view of the so called "golfo", a porto with a lot of boats.'
            className='block object-cover object-center w-full h-full'
            src='https://ik.imagekit.io/dcwkdo37k/Hotel_Vittoria/activities/activities/lido.jpg?updatedAt=1687974871173'
            width={775}
            height={595}
          />
        </div>
      </div>
    </section>
  );
}
