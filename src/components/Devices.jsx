// src/components/Devices.jsx
import FMT100 from '../assets/img/FMT100.webp';
import FMP100 from '../assets/img/FMP100.webp';
import FMB020 from '../assets/img/FMB020.webp';
import FMB920 from '../assets/img/FMB920.webp';
import FMB965 from '../assets/img/FMB965.webp';
import TFT100 from '../assets/img/TFT100.webp';
import GH5200 from '../assets/img/GH5200.webp';
import TAT100 from '../assets/img/TAT100.webp';
import FMB003 from '../assets/img/FMB003.webp'

export default function Devices() {
  return (
    <section id="devices" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-10">
          Навигационные терминалы
        </h2>
        <ul className="max-w-4xl mx-auto space-y-8">
          {/* Элемент списка */}
          <li className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <img
              src={FMT100}
              alt="FMT100"
              className="w-40 h-24 object-contain self-start md:self-center"
            />
            <div className="text-center md:text-left md:flex-1">
              <h3 className="font-semibold text-lg text-primary">FMT100</h3>
              <p className="text-gray-600 text-left">2G трекер, устанавливаемый на автомобильный аккумулятор</p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <img
              src={FMP100}
              alt="FMP100"
              className="w-40 h-24 object-contain self-start md:self-center"
            />
            <div className="text-center md:text-left md:flex-1">
              <h3 className="font-semibold text-lg text-primary">FMP100</h3>
              <p className="text-gray-600 text-left">Трекер 2G типа Plug & Play, подключаемый в гнездо прикуривателя</p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <img
              src={FMB020}
              alt="FMB020"
              className="w-40 h-24 object-contain self-start md:self-center"
            />
            <div className="text-center md:text-left md:flex-1">
              <h3 className="font-semibold text-lg text-primary">FMB020</h3>
              <p className="text-gray-600 text-left">Ультрамалый 2G трекер с Plug & Play установкой, для широкого спектра случаев использования</p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <img
              src={FMB920}
              alt="FMB920"
              className="w-40 h-24 object-contain self-start md:self-center"
            />
            <div className="text-center md:text-left md:flex-1">
              <h3 className="font-semibold text-lg text-primary">FMB920</h3>
              <p className="text-gray-600 text-left">Самая популярная компактная модель 2G для базового слежения</p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <img
              src={FMB965}
              alt="FMB965"
              className="w-40 h-24 object-contain self-start md:self-center"
            />
            <div className="text-center md:text-left md:flex-1">
              <h3 className="font-semibold text-lg text-primary">FMB965</h3>
              <p className="text-gray-600 text-left">Влагостойкий и энергоэффективный 2G-трекер для мотоциклов</p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <img
              src={TFT100}
              alt="TFT100"
              className="w-40 h-24 object-contain self-start md:self-center"
            />
            <div className="text-center md:text-left md:flex-1">
              <h3 className="font-semibold text-lg text-primary">TFT100</h3>
              <p className="text-gray-600 text-left">Трекер с поддержкой высокого напряжения для электромобилей и тяжелой техники</p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <img
              src={GH5200}
              alt="GH5200"
              className="w-40 h-24 object-contain self-start md:self-center"
            />
            <div className="text-center md:text-left md:flex-1">
              <h3 className="font-semibold text-lg text-primary">GH5200</h3>
              <p className="text-gray-600 text-left">Автономный 2G - трекер для личной безопасности и управления персоналом</p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <img
              src={TAT100}
              alt="TAT100"
              className="w-40 h-24 object-contain self-start md:self-center"
            />
            <div className="text-center md:text-left md:flex-1">
              <h3 className="font-semibold text-lg text-primary">TAT100</h3>
              <p className="text-gray-600 text-left">2G трекер для активов с классом защиты IP68 и увеличенным сроком службы батареи</p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <img
              src={FMB003}
              alt="FMB003"
              className="w-40 h-24 object-contain self-start md:self-center"
            />
            <div className="text-center md:text-left md:flex-1">
              <h3 className="font-semibold text-lg text-primary">FMB003</h3>
              <p className="text-gray-600 text-left">Наш самый компактный 2G-трекер, который помещается в любой автомобиль. С возможностью чтения данных из OBD разъема объекта.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}