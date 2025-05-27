// src/components/Faq.jsx
export default function Faq() {
  return (
    <section id="faq" className="py-20 bg-lightBg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-10">
          Часто задаваемые вопросы
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <details className="bg-white p-4 rounded shadow">
            <summary className="font-semibold text-lg text-primary cursor-pointer">
              Можно ли установить систему мониторинга на транспортном
              средстве/устройстве, отличном от автомобиля?
            </summary>
            <p className="mt-2">
              Да, можно подключить к любому устройству с собственным источником
              питания, работающим в диапазоне от 8 до 30 В.
            </p>
          </details>
          <details className="bg-white p-4 rounded shadow">
            <summary className="font-semibold text-lg text-primary cursor-pointer">
              Как долго хранится история поездок?
            </summary>
            <p className="mt-2">
              Срок хранения данных на сервере мониторинга составляет 1 год
            </p>
          </details>
          <details className="bg-white p-4 rounded shadow">
            <summary className="font-semibold text-lg text-primary cursor-pointer">
              Защитит ли устройство мой автомобиль от угона?
            </summary>
            <p className="mt-2">
              Устройство не будет функционировать как противоугонная система. На рынке легкодоступными и распространенными являются глушилки GPS для автомобилей, которые нарушают работу устройства.
            </p>
          </details>
          <details className="bg-white p-4 rounded shadow">
            <summary className="font-semibold text-lg text-primary cursor-pointer">
              Можно ли перенести устройство на другой автомобиль при продаже автомобиля?
            </summary>
            <p className="mt-2">
              Конечно, такая возможность есть. Мы делаем это бесплатно и самостоятельно. Просто переместите устройство в другой автомобиль и внесите изменения в систему мониторинга (измените название автомобиля).
            </p>
          </details>
          <details className="bg-white p-4 rounded shadow">
            <summary className="font-semibold text-lg text-primary cursor-pointer">
              Являются ли устройства водонепроницаемыми?
            </summary>
            <p className="mt-2">
              Устройство FMT имеет степень водонепроницаемости IP67.
            </p>
          </details>
          <details className="bg-white p-4 rounded shadow">
            <summary className="font-semibold text-lg text-primary cursor-pointer">
              Сколько устройств/автомобилей я могу иметь на одной учетной записи?
            </summary>
            <p className="mt-2">
              Наша система не имеет ограничений по количеству транспортных средств, отображаемых на одной карте.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
