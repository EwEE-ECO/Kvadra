import { motion } from "framer-motion";
import Seo from "../components/Seo";
import BreadcrumbJsonLd from "../components/BreadcrumbJsonLd";
import ContactForm from "../components/ContactForm";

export default function ContactsPage() {
  return (
    <>
      <Seo title="Контакты" description="Свяжитесь с нами в Краснодаре по телефону +7 (995) 199-09-22 или через форму обратной связи." />
      <BreadcrumbJsonLd items={[
        { name: "Главная", url: "https://ewee-eco.github.io/Kvadra/" },
        { name: "Контакты", url: "https://ewee-eco.github.io/Kvadra/#/contacts" },
      ]} />
      <section className="py-20 sm:py-28 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mt-2">Контакты</h1>
            <p className="text-white/50 mt-3 max-w-lg mx-auto">
              Мы всегда на связи и готовы помочь
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              { label: "Телефон", value: "+7 (995) 199-09-22", href: "tel:+79951990922" },
              { label: "Email", value: "info@kvadraservice.ru", href: "mailto:info@kvadraservice.ru" },
              { label: "Адрес", value: "г. Краснодар, ул. Ростовское шоссе, д. 30/7, к. 2" },
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
              >
                <div className="text-sm text-white/40 mb-1">{item.label}</div>
                {item.href ? (
                  <a href={item.href} className="text-lg font-semibold hover:text-accent transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <div className="text-lg font-semibold">{item.value}</div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=39.000133%2C45.100286&z=16&pt=39.000133%2C45.100286%2Cpm2rdl&mode=whatshere&text=%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80%2C%20%D1%83%D0%BB.%20%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B5%20%D1%88%D0%BE%D1%81%D1%81%D0%B5%2C%2030%2F7%2C%20%D0%BA.%202"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Адрес на карте"
            />
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
}
