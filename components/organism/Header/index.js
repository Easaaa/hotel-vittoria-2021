import Image from 'next/image';
import Link from 'next/link';
import useLocale from '@/hooks/useLocale';
import Menu from '@/components/organism/Menu';

export default function Header({
  background,
  simplified,
  img_text,
  title,
  subTitle,
  text,
  cta,
}) {
  const { t } = useLocale();
  const renderImgText = img_text && (
    <h1 className='absolute bottom-0 left-0 z-10 ml-2 font-serif text-6xl text-white lowercase sm:bottom-0 md:bottom-0 lg:-bottom-4 sm:-left-1 lg:text-9xl'>
      {img_text}
    </h1>
  );

  if (simplified) {
    return <Menu navbar={t.navbar} simplified />;
  }
  const {} = t.header.hotel_vittoria;

  return (
    <>
      <Menu navbar={t.navbar} simplified />
      <header
        className={`w-full bg-cover p-2 sm:p-6 relative max-w-screen-xl mx-auto`}>
        <div
          className={`lg:flex-grow flex flex-col md:items-start md:text-left items-center text-center md:pl-2
            `}>
          <h1 className='mt-10 mb-4 font-serif text-4xl font-extrabold leading-none tracking-wide text-peach-500 sm:text-6xl lg:text-7xl sm:mt-14'>
            {title} <span className='text-como-700'>{subTitle}</span>
          </h1>

          <p className='max-w-screen-md mb-4 text-sm text-gray-700 break-words sm:text-xl sm:mb-8'>
            {text}
          </p>

          {cta && (
            <Link href='/hotel'>
              <a className='flex-none w-auto px-6 py-3 text-lg leading-6 text-white transition-colors duration-200 border border-transparent bg-como-500 hover:bg-como-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none'>
                {cta}
              </a>
            </Link>
          )}
        </div>
        <div className='relative mx-auto my-10 md:my-20 max-w-screen-2xl'>
          <img
            alt='hotel vittoria swimming pool'
            src={background}
            objectFit='cover'
            quality={100}
            width={1200}
            height={600}
            className=''
            priority
          />
          {/*  {renderImgText} */}
        </div>
      </header>
    </>
  );
}
