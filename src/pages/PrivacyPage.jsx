import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <section className="py-20 sm:py-28 bg-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-accent mb-8 transition-colors">
            <ArrowLeft size={16} /> На главную
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold mb-8">Политика обработки персональных данных</h1>

          <div className="space-y-6 text-white/70 leading-relaxed text-sm">
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">1. Общие положения</h2>
              <p>Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» (далее — Закон о персональных данных) и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые ИП (далее — Оператор).</p>
              <p className="mt-3">Оператор ставит важнейшей своей целью соблюдение прав и свобод человека при обработке его персональных данных, в том числе права на неприкосновенность частной жизни, личную и семейную тайну.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">2. Какие данные мы собираем</h2>
              <p>При заполнении формы обратной связи на сайте пользователь предоставляет:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Имя</li>
                <li>Номер телефона</li>
                <li>Сообщение (при необходимости)</li>
              </ul>
              <p className="mt-3">Автоматически собираемые данные: cookie-файлы, IP-адрес, тип браузера, время посещения. Эти данные используются для аналитики и улучшения работы сайта.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">3. Цели обработки персональных данных</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Обработка и ответ на обращения пользователей через форму обратной связи</li>
                <li>Улучшение качества обслуживания и работы сайта</li>
                <li>Сбор аналитики посещаемости (с использованием обезличенных данных)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">4. Правовые основания обработки</h2>
              <p>Правовым основанием обработки персональных данных является:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Федеральный закон «О персональных данных» № 152-ФЗ</li>
                <li>Согласие пользователя на обработку персональных данных</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">5. Сроки обработки и хранения</h2>
              <p>Персональные данные обрабатываются и хранятся до момента, пока не отпадут цели их обработки, либо до момента отзыва согласия пользователем. Cookie-файлы хранятся в браузере пользователя до момента очистки.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">6. Передача данных третьим лицам</h2>
              <p>Персональные данные пользователей не передаются третьим лицам, за исключением случаев, предусмотренных законодательством Российской Федерации.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">7. Права пользователей</h2>
              <p>Пользователь имеет право:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Получить информацию о своих персональных данных</li>
                <li>Требовать уточнения, блокирования или уничтожения своих данных</li>
                <li>Отозвать согласие на обработку персональных данных</li>
                <li>Обжаловать действия Оператора в уполномоченном органе</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">8. Контактная информация</h2>
              <p>ИП, г. Краснодар, ул. Ростовское шоссе, д. 30/7, к. 2</p>
              <p>Телефон: +7 (995) 199-09-22</p>
            </section>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
