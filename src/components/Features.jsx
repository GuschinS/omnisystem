// src/components/Features.jsx
export default function Features() {
  return (
    <section id="features" className="py-20 bg-lightBg dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h3 className="text-xl font-semibold text-center text-primary mb-3 dark:text-white">
          Внедрение комплексных решений для мониторинга транспорта позволяет
          <strong>
            повысить эффективность, автоматизировать процессы и оптимизировать
            расходы
          </strong>
        </h3>
        <br />
        <h2 className="text-3xl font-bold text-center text-primary mb-10 dark:text-white">
          Функции
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-6 rounded shadow hover:shadow-xl transition-shadow dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-primary mb-3 dark:text-white">
              Мониторинг 24/7
            </h3>
            <p className="text-gray-600  dark:text-white">
              Доступ до всей имеющейся информации по всем объектам, с любого
              устройства, имеющего подключение к сети интернет
              <br />
              Данные хранятся на сервере 12 месяцев
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-xl transition-shadow dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-primary mb-3 dark:text-white">
              Контроль местоположения транспорта
            </h3>
            <p className="text-gray-600  dark:text-white">
              Система контроля транспорта{" "}
              <strong> отслеживает, фиксирует и анализирует </strong>
              основные эксплуатационные параметры автомобиля и рейсовой
              информации:
            </p>
            <br />
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-white">
              <li>местоположение ТС</li>
              <li>треки маршрутов на карте</li>
              <li>скорость движения</li>
              <li>продолжительность рейса</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-xl transition-shadow dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-primary mb-3 dark:text-white">
              Решения для контроля посещения геозон
            </h3>
            <p className="text-gray-600 dark:text-white">
              Полезный и наглядный инструмент контроля посещения и нахождения
              транспортного средства на обозначенной территории
            </p>
            <br />
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-white">
              <li>контроль соблюдения заданного маршрута</li>
              <li>
                контроль местонахождения ТС в зоне разгрузки и выгрузки товара
              </li>
              <li>
                контроль соблюдения скоростных режимов, установленных в
                определенных локациях
              </li>
              <li>
                контроль передвижения ТС в рамках сложного ландшафта: поля,
                строительные площадки, карьеры и пр.
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-xl transition-shadow dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-primary mb-3 dark:text-white">Отчеты</h3>
            <p className="text-gray-600 dark:text-white">
              Широкие возможности фильтрации по каждому доступному параметру
              позволяют создать любой отчет всего за несколько кликов
            </p>
            <br />
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-white">
              <li>возможность сохранения результатов отчета в файл</li>
              <li>
                возможность автоматического создания отчетов по расписанию и
                отправки на указанный E-mail
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-xl transition-shadow dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-primary mb-3 dark:text-white">
              Контроль параметров работы двигателя
            </h3>
            <p className="text-gray-600 dark:text-white">
              При подключении к CAN шине автомобиля в системе мониторинга
              доступны следующие данные:
            </p>
            <br />
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-white">
              <li>обороты двигателя</li>
              <li>температура охлаждающей жидкости</li>
              <li>уровень и давление масла</li>
              <li>уровень топлива</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-xl transition-shadow dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-primary mb-3 dark:text-white">
              Контроль расхода топлива
            </h3>
            <p className="text-gray-600 dark:text-white">
              Возможность в режиме реального времени осуществлять контроль
              топлива автомобиля или специальной техники:
            </p>
            <br />
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-white">
              <li>расход топлива на 100 км и м/ч</li>
              <li>контроль заправок и сливов</li>
              <li>контроль топлива в двух и более баках </li>
              <li>контроль выдачи топлива для АТЗ</li>
              <li>ведение общего топливного баланса предприятия</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-xl transition-shadow dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-primary mb-3 dark:text-white">
              Поддержка дополнительного оборудования
            </h3>
            <p className="text-gray-600 dark:text-white">
              Система мониторинга позволяет контролировать множество
              разнообразных параметров в зависимости от назначения транспортного
              средства:
            </p>
            <br />
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-white">
              <li>
                температуру и техническое состояние рефрижератора (IQFreeze)
              </li>
              <li>бортовые системы взвешивания (VESA Systems)</li>
              <li>давление в шинах (TPMS)</li>
              <li>работу дизельгенераторов (Gencomm)</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-xl transition-shadow dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-primary mb-3 dark:text-white">
              Частные и деловые поездки
            </h3>
            <p className="text-gray-600 dark:text-white">
              Возможность разделить <strong> личные и деловые поездки</strong>,
              назначив часы работы транспортного средства или отметив поездки
              вручную. Это удобный инструмент, позволяющий{" "}
              <strong> оптимизировать расходы </strong> на топливо на любом
              предприятии.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-xl transition-shadow dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-primary mb-3 dark:text-white">
              Контроль работы водителей
            </h3>
            <p className="text-gray-600 dark:text-white">
              Анализ данных, поступающих от транспортных средств, позволяет
              оценить манеру вождения каждого водителя и контролировать:
            </p>
            <br />
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-white">
              <li>скорость</li>
              <li>количество и динамику ускорений и торможений</li>
              <li>опасные маневры и аварийные ситуации</li>
              <li>нарушение правил дорожного движения</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-xl transition-shadow dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-primary mb-3 dark:text-white">
              Европейский Союз, Великобритания и Норвегия
            </h3>
            <p className="text-gray-600 dark:text-white">
              Наши устройства работают на всей территории Европейского Союза,
              Великобритании и Норвегии без каких-либо ограничений и
              дополнительных затрат
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-xl transition-shadow dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-primary mb-3 dark:text-white">
              Ценная информация вовремя
            </h3>
            <p className="text-gray-600 dark:text-white">
              Благодаря актуальным показаниям нет необходимости помнить о
              периодических проверках и технических обслуживаниях — система
              автоматически вышлет уведомление о предстоящем событии
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-xl transition-shadow dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-primary mb-3 dark:text-white">
              Доступ для сотрудников
            </h3>
            <p className="text-gray-600 dark:text-white">
              Администратор системы имеет возможность создавать учетные записи
              для сотрудников или руководителей групп и назначать им выбранные
              транспортные средства
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-xl transition-shadow dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-primary mb-3 dark:text-white">
              Совместное использование местоположения транспортного средства
            </h3>
            <p className="text-gray-600 dark:text-white">
              Существует возможность предоставить доступ до местоположения
              автомобиля сторонним компаниям:
            </p>
            <br />
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-white">
              <li>отправить простую ссылку с актуальной позицией</li>
              <li>
                создать субсчет и закрепив за ним только выбранные транспортные
                средства
              </li>
              <li>
                настроить ретрансляцию телеметрических данных на сервер
                принимающей стороны
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
