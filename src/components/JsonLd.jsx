import { Helmet } from "react-helmet-async";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "КвадроСервис",
    image: `${import.meta.env.BASE_URL}og-image.jpg`,
    url: "https://ewee-eco.github.io/Kvadra/",
    telephone: "+79951990922",
    email: "info@kvadraservice.ru",
    description: "Ремонт, чистка, диагностика и заправка кондиционеров в Краснодаре.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Ростовское шоссе, д. 30/7, к. 2",
      addressLocality: "Краснодар",
      addressRegion: "Краснодарский край",
      postalCode: "350000",
      addressCountry: "RU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.100286,
      longitude: 39.000133,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "10:00",
        closes: "17:00",
      },
    ],
    sameAs: [],
    priceRange: "₽₽",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Услуги климатической техники",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Чистка кондиционеров" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ремонт кондиционеров" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Диагностика кондиционеров" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Заправка фреоном" } },
      ],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
