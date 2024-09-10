import Header from '@/components/organism/Header';
import useLocale from 'hooks/useLocale';
import Seo from '@/components/Layout/Seo';
import ColumnSection from '@/components/organism/ColumnSection';
import Contact from '@/components/organism/Contact';
import Footer from '@/components/organism/Footer';

export default function Hotel() {
  const { t } = useLocale();

  const { title, subTitle, text, cta, facility, breakfast } = t.lodge;
  const headerText = { title, subTitle, text };

  const seoAttributes = {
    title: t.seo.lodge,
  };

  return (
    <>
      <Seo {...seoAttributes} />
      <Header background='https://ik.imagekit.io/dcwkdo37k/Hotel_Vittoria/hotel/swimming-garden.jpg?updatedAt=1687975051273' {...headerText} />

      {/*  <ImgMosaic /> */}
      {/*  <ImgCentral bgImage={MountainImg} bgSmoke /> */}
      <ColumnSection data={facility} inverted bgSmoke />
      {/* <ColumnSection data={breakfast} bgSmoke /> */}
      <Contact t={t} simplified />
      <Footer t={t} />
    </>
  );
}
