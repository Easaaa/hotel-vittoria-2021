import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useLocale from "hooks/useLocale";
import UseAnimations from "react-useanimations";
import menu2 from "react-useanimations/lib/menu2";
import dynamic from "next/dynamic";
const Flag = dynamic(() => import("react-flagpack"), { ssr: false });

export default function Menu({
  simplified,
  navbar: { home, lodge, apartments, activities, contact, booking },
}) {
  const router = useRouter();

  const { locale, handleChangeLang } = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const redirectBookingEngine =
    "https://direct-book.com/properties/hotelvittoriadirect";

  useEffect(() => {
    if (isMenuOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;

      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = originalStyle);
    }
  }, [isMenuOpen]);

  const handleHamb = () => {
    setTimeout(() => setIsMenuOpen(!isMenuOpen), 300);
  };

  const isMenuActive = (_menu) =>
    (router.pathname === _menu && !simplified && "navLink_active") ||
    (router.pathname === _menu && simplified && "navLink_active_simpl") ||
    (router.pathname !== _menu && !simplified && "navLink_notActive") ||
    (router.pathname !== _menu && simplified && "navLink_notActive_simpl");

  const simplifiedTextColor =
    (router.pathname === "/rooms" && "lg:text-black") || "lg:text-white";

  const textColor = (simplified && "text-gray-800") || "text-white";

  const parseFlag = (name) => {
    if (name === "it")
      return (
        <Flag code="ITA" size="L" hasDropShadow gradient="real-circular" />
      );
    if (name === "en")
      return (
        <Flag code="GB-UKM" size="L" hasDropShadow gradient="real-circular" />
      );
  };

  const oppositeLocale = (locale === "it" && "en") || (locale === "en" && "it");

  return (
    <nav
      className={`flex justify-between z-50 font-sans max-w-screen-xl lg:mx-auto ${textColor} ${
        simplified && "p-6"
      }`}
    >
      <div className="z-20 grid place-content-center">
        {/*  <img
          src={'/black-logo.png'}
          className={`object-container object-center w-20 place-self-center`}
          alt='hero'
          src='/black-logo.png'
          priority
        /> */}
        <h1 className="logo relative font-serif text-xl sm:text-3xl font-medium tracking-wider md:flex md:flex-col min-w-[200px] md:place-content-center">
          Hotel Vittoria
        </h1>
      </div>

      <div
        className="z-50 hover:cursor lg:hidden place-self-center"
        onClick={handleHamb}
      >
        <UseAnimations
          animation={menu2}
          wrapperStyle={
            (isMenuOpen && { textColor: "black" }) || { textColor: "black" }
          }
          reverse={isMenuOpen}
          size={42}
          speed={3}
          strokeColor="white"
          className={`transform transition text-black ${
            isMenuOpen && "bg-sky-900"
          } ${(isMenuOpen || simplified) && "bg-sky-900 fill-current"}`}
        />
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 left-0 z-20 w-full h-screen bg-gray-900 opacity-50"></div>
      )}

      <ul
        className={`grid absolute lg:border-0 bg-white text-black shadow left-0 top-0 z-20 p-2 w-2/3 sm:w-1/3 lg:w-full m-6 lg:flex lg:relative lg:bg-transparent lg:${textColor} lg:shadow-none lg:justify-end ${
          (isMenuOpen && "block") || "hidden"
        }`}
      >
        <li className={`navLink ${isMenuActive(`/`)}`}>
          <Link href={`/${locale}`}>
            <a>{home}</a>
          </Link>
        </li>
        <li className={`navLink ${isMenuActive(`/hotel`)}`}>
          <Link href={`/${locale}/hotel`}>
            <a>{lodge}</a>
          </Link>
        </li>
        <li className={`navLink ${isMenuActive("/rooms")}`}>
          <Link href={`/${locale}/rooms`}>
            <a>{apartments}</a>
          </Link>
        </li>
        {/* <li className={`navLink ${isMenuActive('/attivita')}`}>
          <Link href={`/${locale}/attivita`}>
            <a>{activities}</a>
          </Link>
        </li> */}
        <li className={`navLink ${isMenuActive("/contatti")}`}>
          <a href="#contact">{contact}</a>
        </li>
        <li className="lg:ml-8">
          <div class="relative">
            {/*  <!-- Dropdown toggle button --> */}
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              class="relative z-10 focus:outline-none flex place-content-center place-items-center  hover:bg-sky-50 h-12 w-full lg:w-20"
            >
              {/* <svg
                className={`relative w-7 h-7 text-gray-400 transform transition-transform ${
                  isDropdownOpen && "rotate-180"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg> */}
              <span className="text-gray-500 uppercase mr-1"> {locale}</span>{" "}
              {parseFlag(locale)}
            </button>

            {/* <!-- Dropdown menu --> */}
            {isDropdownOpen && (
              <div class="absolute lg:top-8 bottom-5 right-0 lg:right-0 z-20 w-20 p-2 mt-4 border h-12 border-gray-200 bg-white hover:bg-gray-50 shadow-xl">
                <button
                  onClick={() => {
                    handleChangeLang(oppositeLocale);
                    setIsDropdownOpen(false);
                  }}
                  class="flex place-content-center place-items-center w-full py-1 capitalize transition-colors duration-200 transform focus:outline-none"
                >
                  <span className="text-gray-500 uppercase mr-1"> {oppositeLocale}</span>{" "} {parseFlag(oppositeLocale)}
                </button>
              </div>
            )}
          </div>
        </li>
        <li className="mt-3 lg:mt-0 lg:ml-3">
          <Link href={redirectBookingEngine}>
            <a className="flex px-4 place-items-center place-content-center w-auto text-lg leading-6 text-white h-12 transition-colors duration-200 border border-transparent bg-sky-900 hover:bg-sky-800 focus:outline-none">
              {booking}
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
