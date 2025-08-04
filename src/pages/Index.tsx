import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleBooking = () => {
    if (fromCity && toCity && date && time) {
      alert(`Заказ принят! Маршрут: ${fromCity} → ${toCity} на ${date} в ${time}`);
    } else {
      alert('Пожалуйста, заполните все поля');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-taxi-gray">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-taxi-yellow rounded-full flex items-center justify-center">
              <Icon name="Car" size={24} className="text-black" />
            </div>
            <span className="text-2xl font-bold text-taxi-black">ТАКСИ ТАКИ</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#hero" className="text-taxi-black hover:text-taxi-yellow transition-colors">Главная</a>
            <a href="#tariffs" className="text-taxi-black hover:text-taxi-yellow transition-colors">Тарифы</a>
            <a href="#booking" className="text-taxi-black hover:text-taxi-yellow transition-colors">Заказать</a>
            <a href="#about" className="text-taxi-black hover:text-taxi-yellow transition-colors">О нас</a>
            <a href="#contacts" className="text-taxi-black hover:text-taxi-yellow transition-colors">Контакты</a>
          </div>
          <Button variant="outline" className="border-taxi-yellow text-taxi-black hover:bg-taxi-yellow">
            <Icon name="Phone" size={16} className="mr-2" />
            +7 920 212-23-12
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-taxi-black mb-6 animate-fade-in">
              Междугородние поездки
              <span className="block text-taxi-yellow">с комфортом</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 animate-fade-in">
              Быстро, безопасно и надежно доставим вас в любой город. 
              Современные автомобили и опытные водители.
            </p>
            
            {/* Hero Image */}
            <div className="mb-12">
              <img 
                src="/img/20cb7609-01e6-4841-b299-6c8fee3b33c6.jpg" 
                alt="Желтое такси"
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl animate-scale-in"
              />
            </div>

            {/* Quick Booking Form */}
            <Card className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm shadow-2xl animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Icon name="MapPin" size={24} className="mr-2 text-taxi-yellow" />
                  Быстрый заказ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <Label htmlFor="from">Откуда</Label>
                    <Input
                      id="from"
                      placeholder="Москва"
                      value={fromCity}
                      onChange={(e) => setFromCity(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="to">Куда</Label>
                    <Input
                      id="to"
                      placeholder="Санкт-Петербург"
                      value={toCity}
                      onChange={(e) => setToCity(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="date">Дата</Label>
                    <Input
                      id="date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">Время</Label>
                    <Input
                      id="time"
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
                <Button 
                  onClick={handleBooking}
                  className="w-full bg-taxi-yellow hover:bg-yellow-500 text-black font-semibold py-3 text-lg"
                >
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Заказать поездку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tariffs Section */}
      <section id="tariffs" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-taxi-black mb-4">Тарифы</h2>
            <p className="text-xl text-gray-600">Выберите подходящий класс автомобиля</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Economy */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-taxi-yellow to-yellow-400"></div>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-taxi-gray rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Car" size={32} className="text-taxi-black" />
                </div>
                <CardTitle className="text-2xl">Стандарт</CardTitle>
                <p className="text-gray-600">Доступные поездки</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-taxi-yellow mb-4">30₽/км</div>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Комфортабельные авто
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Опытные водители
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Кондиционер
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-taxi-yellow hover:bg-yellow-500 text-black">
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            {/* Comfort */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-taxi-yellow">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-taxi-yellow to-yellow-400"></div>
              <Badge className="absolute top-4 right-4 bg-taxi-yellow text-black">Популярный</Badge>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-taxi-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Car" size={32} className="text-black" />
                </div>
                <CardTitle className="text-2xl">Комфорт</CardTitle>
                <p className="text-gray-600">Оптимальный выбор</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-taxi-yellow mb-4">35₽/км</div>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Автомобили бизнес-класса
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Климат-контроль
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Wi-Fi в автомобиле
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Питьевая вода
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-taxi-yellow hover:bg-yellow-500 text-black">
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            {/* Premium */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-taxi-yellow to-yellow-400"></div>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-taxi-yellow to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Crown" size={32} className="text-black" />
                </div>
                <CardTitle className="text-2xl">Премиум</CardTitle>
                <p className="text-gray-600">Роскошь и комфорт</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-taxi-yellow mb-4">50₽/км</div>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Автомобили премиум-класса
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Персональный сервис
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Кожаные сиденья
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Встреча с табличкой
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-taxi-yellow hover:bg-yellow-500 text-black">
                  Выбрать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced Booking Section */}
      <section id="booking" className="py-20 bg-taxi-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-taxi-black mb-4">Система предварительного заказа</h2>
            <p className="text-xl text-gray-600">Планируйте поездки заранее и экономьте время</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="instant" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="instant" className="text-lg">Сейчас</TabsTrigger>
                <TabsTrigger value="scheduled" className="text-lg">Предварительный заказ</TabsTrigger>
              </TabsList>
              
              <TabsContent value="instant">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Zap" size={24} className="mr-2 text-taxi-yellow" />
                      Заказ на сейчас
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label>Откуда</Label>
                        <Input placeholder="Введите адрес отправления" className="mt-1" />
                      </div>
                      <div>
                        <Label>Куда</Label>
                        <Input placeholder="Введите адрес назначения" className="mt-1" />
                      </div>
                      <div>
                        <Label>Количество пассажиров</Label>
                        <Input type="number" placeholder="1" min="1" max="8" className="mt-1" />
                      </div>
                      <div>
                        <Label>Тариф</Label>
                        <select className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                          <option>Стандарт</option>
                          <option>Комфорт</option>
                          <option>Премиум</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Label>Комментарий к заказу</Label>
                      <textarea 
                        className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                        placeholder="Дополнительные пожелания..."
                        rows={3}
                      ></textarea>
                    </div>
                    <Button className="w-full mt-6 bg-taxi-yellow hover:bg-yellow-500 text-black font-semibold py-3">
                      <Icon name="Car" size={20} className="mr-2" />
                      Заказать такси сейчас
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="scheduled">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Calendar" size={24} className="mr-2 text-taxi-yellow" />
                      Предварительный заказ
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label>Откуда</Label>
                        <Input placeholder="Введите адрес отправления" className="mt-1" />
                      </div>
                      <div>
                        <Label>Куда</Label>
                        <Input placeholder="Введите адрес назначения" className="mt-1" />
                      </div>
                      <div>
                        <Label>Дата поездки</Label>
                        <Input type="date" className="mt-1" />
                      </div>
                      <div>
                        <Label>Время подачи</Label>
                        <Input type="time" className="mt-1" />
                      </div>
                      <div>
                        <Label>Количество пассажиров</Label>
                        <Input type="number" placeholder="1" min="1" max="8" className="mt-1" />
                      </div>
                      <div>
                        <Label>Тариф</Label>
                        <select className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                          <option>Стандарт</option>
                          <option>Комфорт</option>
                          <option>Премиум</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Label>Контактный телефон</Label>
                      <Input placeholder="+7 (999) 123-45-67" className="mt-1" />
                    </div>
                    <div className="mt-4">
                      <Label>Комментарий к заказу</Label>
                      <textarea 
                        className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                        placeholder="Дополнительные пожелания..."
                        rows={3}
                      ></textarea>
                    </div>
                    <Button className="w-full mt-6 bg-taxi-yellow hover:bg-yellow-500 text-black font-semibold py-3">
                      <Icon name="CalendarCheck" size={20} className="mr-2" />
                      Запланировать поездку
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-taxi-black mb-4">О нас</h2>
              <p className="text-xl text-gray-600">Более 10 лет опыта в междугородних перевозках</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-taxi-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-black" />
                </div>
                <div className="text-3xl font-bold text-taxi-black mb-2">50,000+</div>
                <p className="text-gray-600">Довольных клиентов</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-taxi-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Car" size={32} className="text-black" />
                </div>
                <div className="text-3xl font-bold text-taxi-black mb-2">200+</div>
                <p className="text-gray-600">Автомобилей в парке</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-taxi-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={32} className="text-black" />
                </div>
                <div className="text-3xl font-bold text-taxi-black mb-2">100+</div>
                <p className="text-gray-600">Городов покрытия</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-taxi-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} className="text-black" />
                </div>
                <div className="text-3xl font-bold text-taxi-black mb-2">24/7</div>
                <p className="text-gray-600">Круглосуточно</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-taxi-black mb-6">Почему выбирают нас?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Icon name="Shield" size={24} className="text-taxi-yellow mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-taxi-black mb-2">Безопасность</h4>
                      <p className="text-gray-600">Все автомобили проходят регулярное техническое обслуживание, водители имеют большой опыт</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="DollarSign" size={24} className="text-taxi-yellow mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-taxi-black mb-2">Честные цены</h4>
                      <p className="text-gray-600">Фиксированная стоимость, рассчитанная заранее. Никаких скрытых доплат</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Headphones" size={24} className="text-taxi-yellow mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-taxi-black mb-2">Поддержка 24/7</h4>
                      <p className="text-gray-600">Наша служба поддержки готова помочь в любое время дня и ночи</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-taxi-gray rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-taxi-black mb-6">Наши преимущества</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" size={20} className="text-green-500 mr-3" />
                    Современный автопарк
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={20} className="text-green-500 mr-3" />
                    Профессиональные водители
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={20} className="text-green-500 mr-3" />
                    Онлайн отслеживание поездки
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={20} className="text-green-500 mr-3" />
                    Безналичная оплата
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={20} className="text-green-500 mr-3" />
                    Страхование пассажиров
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-taxi-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Контакты</h2>
              <p className="text-xl text-gray-300">Свяжитесь с нами удобным способом</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-taxi-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={28} className="text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                <p className="text-taxi-yellow text-lg font-semibold">+7 920 212-23-12</p>
                <p className="text-gray-300 text-sm">Круглосуточно</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-taxi-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={28} className="text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-taxi-yellow">info@taxitaki.ru</p>
                <p className="text-gray-300 text-sm">Ответим в течение часа</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-taxi-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" size={28} className="text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Telegram</h3>
                <p className="text-taxi-yellow">@taxitaki_bot</p>
                <p className="text-gray-300 text-sm">Быстрые заказы</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-taxi-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={28} className="text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Офис</h3>
                <p className="text-taxi-yellow">г. Москва</p>
                <p className="text-gray-300 text-sm">ул. Тверская, 1</p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-6">Работаем во всех регионах России</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {['Москва', 'СПб', 'Казань', 'Екатеринбург', 'Новосибирск', 'Краснодар', 'Ростов-на-Дону', 'Уфа'].map((city) => (
                  <Badge key={city} variant="outline" className="text-taxi-yellow border-taxi-yellow px-4 py-2">
                    {city}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-taxi-black text-white py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-taxi-yellow rounded-full flex items-center justify-center">
                <Icon name="Car" size={18} className="text-black" />
              </div>
              <span className="text-xl font-bold">ТАКСИ ТАКИ</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2024 Такси Таки. Все права защищены.</p>
              <p className="text-gray-400 text-sm">Лицензия на перевозки №123456</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}