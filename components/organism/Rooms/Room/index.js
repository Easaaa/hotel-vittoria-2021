import { useRouter } from 'next/router';
import Image from 'next/image';
import useLocale from 'hooks/useLocale';
import { parseNameView } from '@/utils/parseNameView';

export default function Room({
  room: { name, othersImages, price, alt, text, guest, viewMore },
  index,
}) {
  const { locale } = useLocale();
  const router = useRouter();

  return (
    <section
      onClick={() =>
        router
          .push({ pathname: '/rooms', query: { room: name } })
          .then(() => window.scrollTo(0, 0))
      }
      class='lg:py-12 lg:flex lg:justify-center rounded-2xl cursor-pointer transition transform hover:scale-105 group'>
      <div class='lg:mx-8 lg:max-w-5xl rounded-lg'>
        <div class={``}>
          <div class='rounded-lg lg:h-full'>
            <Image
              className='w-full h-full'
              alt={othersImages[0].alt}
              objectFit='cover'
              src={othersImages[0].url}
              width={1200}
              height={400}
              lazy
            />
          </div>
        </div>

        <div class='max-w-xl px-6 py-2 lg:max-w-5xl flex place-content-between place-items-center'>
          <h2 class='text-2xl font-bold font-serif text-como-700 dark:text-white md:text-3xl capitalize'>
            {parseNameView(name, locale)}
            <span class='text-xl text-gray-600 grid font-normal'>{guest}</span>
          </h2>

          <button class='px-5 group-hover:bg-como-500 group-hover:text-gray-100 py-2 font-semibold text-como-600 transition-colors duration-200 transform border-2 border-como-500 hover:bg-como-500 hover:text-gray-100'>
            {viewMore}
          </button>
        </div>
      </div>
    </section>
  );
}
