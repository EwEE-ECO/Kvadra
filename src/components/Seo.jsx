import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const siteName = "КвадроСервис";
const siteUrl = "https://ewee-eco.github.io/Kvadra/";
const defaultTitle = "КвадроСервис — Сервисный центр климатической техники";
const defaultDesc = "Ремонт, чистка, диагностика и заправка кондиционеров в Краснодаре. Выезд мастера в день обращения. Гарантия до 2 лет.";
const ogImage = `${import.meta.env.BASE_URL}og-image.svg`;

export default function Seo({ title, description, ogImage: customImage, noIndex }) {
  const { pathname } = useLocation();
  const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const desc = description || defaultDesc;
  const image = customImage || ogImage;
  const canonical = pathname === "/" ? siteUrl : `${siteUrl}#${pathname}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
}
