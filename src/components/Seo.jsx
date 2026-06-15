import { Helmet } from "react-helmet-async";

const siteName = "КвадроСервис";
const siteUrl = "https://ewee-eco.github.io/Kvadra/";
const defaultTitle = "КвадроСервис — Сервисный центр климатической техники";
const defaultDesc = "Ремонт, чистка, диагностика и заправка кондиционеров в Краснодаре. Выезд мастера в день обращения. Гарантия до 2 лет.";
const ogImage = `${import.meta.env.BASE_URL}og-image.jpg`;

export default function Seo({ title, description, ogImage: customImage, noIndex }) {
  const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const desc = description || defaultDesc;
  const image = customImage || ogImage;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={siteUrl} />
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
