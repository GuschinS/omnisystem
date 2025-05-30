// src/components/Faq.jsx
export default function Faq() {
  return (
    <section id="faq" className="py-20 bg-lightBg dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-10 dark:text-white">
          Часто задаваемые вопросы
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <details className="bg-white p-4 rounded shadow dark:bg-gray-800">
            <summary className="font-semibold text-lg text-primary cursor-pointer dark:text-white">
              Можно ли установить систему мониторинга на транспортном
              средстве/устройстве, отличном от автомобиля?
            </summary>
            <p className="mt-2 dark:text-white">
              Да, можно подключить к любому устройству с собственным источником
              питания, работающим в диапазоне от 8 до 30 В. Так же существуют
              модели терминалов работающие от напряжения до 89 В
            </p>
          </details>
          <details className="bg-white p-4 rounded shadow dark:bg-gray-800">
            <summary className="font-semibold text-lg text-primary cursor-pointer dark:text-white">
              Как долго хранится история поездок?
            </summary>
            <p className="mt-2 dark:text-white">
              Срок хранения данных на сервере мониторинга составляет 1 год
            </p>
          </details>
          <details className="bg-white p-4 rounded shadow dark:bg-gray-800">
            <summary className="font-semibold text-lg text-primary cursor-pointer dark:text-white">
              Защитит ли устройство мой автомобиль от угона?
            </summary>
            <p className="mt-2 dark:text-white">
              Устройство не будет функционировать как противоугонная система. На
              рынке легкодоступными и распространенными являются глушилки GPS
              для автомобилей, которые нарушают работу устройства. Однако
              существуют модели терминалов, которые можно использовать как
              дополнение к противоугонной системе. Они не требуют подключения к
              ботовой сети автомобиля, их не возможно обнаружить с помощью
              специального оборудования. Такое устройство включается по
              расписанию и передает местопожение на сервер.
            </p>
          </details>
          <details className="bg-white p-4 rounded shadow dark:bg-gray-800">
            <summary className="font-semibold text-lg text-primary cursor-pointer dark:text-white">
              Можно ли перенести устройство на другой автомобиль при продаже
              автомобиля?
            </summary>
            <p className="mt-2 dark:text-white">
              Конечно, такая возможность есть. Просто переместите устройство в другой автомобиль
              и внесите изменения в систему мониторинга (измените название
              автомобиля). Или обратитесь к нам за помощью.
            </p>
          </details>
          <details className="bg-white p-4 rounded shadow dark:bg-gray-800">
            <summary className="font-semibold text-lg text-primary cursor-pointer dark:text-white">
              Являются ли устройства водонепроницаемыми?
            </summary>
            <p className="mt-2 dark:text-white">
              Существуют модели терминалов с защитой IP68
            </p>
          </details>
          <details className="bg-white p-4 rounded shadow dark:bg-gray-800">
            <summary className="font-semibold text-lg text-primary cursor-pointer dark:text-white">
              Сколько устройств/автомобилей я могу иметь на одной учетной
              записи?
            </summary>
            <p className="mt-2 dark:text-white">
              Наша система не имеет ограничений по количеству транспортных
              средств, отображаемых на одной карте.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
