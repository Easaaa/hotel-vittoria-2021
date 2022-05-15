import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";

const website_title = "Hotel Vittoria";
const website_description =
  "L’Hotel Vittoria si trova nel cuore del borgo di Maderno. Offriamo pernottamente con colazione continentale, con torte fatte in casa 🍰, parcheggio interno e una splendida piscina.🏖️ A soli 5 minuti dal Lago di Garda, potrete giore della tranquillità ma allo stesso tempo della posizione centrica dell' Hotel.";

export default function Seo({ description, title, keywords }) {
  const router = useRouter();

  const pageTitle = `${website_title} - ${title}`;

  const microformats = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: pageTitle,
    url: "https://vittoriahotel.eu",
  };

  const globalMicroformats = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: website_title,
    description: description || website_description,
    URL: "https://vittoriahotel.eu",
  };

  return (
    <>
      {" "}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description || website_description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={pageTitle} />
        <meta
          property="og:description"
          content={description || website_description}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://vittoriahotel.eu/${router?.asPath}`}
        />
        {/*  <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:creator' content='@timsy.io' />
    <meta name='twitter:title' content={`Timsy — ${title}`} />
    <meta name='twitter:image' content='' />
    <meta name='twitter:description' content={description || website_description} /> */}

        <link
          rel="canonical"
          href={`https://vittoriahotel.eu${router?.asPath}`}
        />
      </Head>
      <Script
        async
        defer
        data-website-id="8a8138c8-4c77-4708-b954-b5216e3a3e6b"
        src="https://umami-production-b8d7.up.railway.app/umami.js"
      ></Script>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(microformats) }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(globalMicroformats) }}
      />
    </>
  );
}
