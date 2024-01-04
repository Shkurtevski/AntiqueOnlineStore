import { useContext, useEffect, useState } from 'react';
import HomepageCard from '../components/HomepageCard';
import Testimonial from '../components/Testimonial';
import Animation from '../components/Animation';
import { LanguageContext } from '../contexts/useLanguageContext';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const [loading, setLoading] = useState(true);
  const [pageLoaded, setPageLoaded] = useState(false);

  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
      setPageLoaded(true);
    }, 5500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className={`animation_homepage_loading ${pageLoaded && 'd-none'}`}>{loading && <Animation path="../src/assets/animations/loading_animation.json" />}</div>
      {pageLoaded && (
        <div className="container-fluid homepage">
          <div className="row mt-5 overflow-hidden">
            <div className="col">
              <div className="cards-homepage">
                <HomepageCard
                  animationPath="../src/assets/animations/bracelet_animation.json"
                  title={language === 'mk' ? 'Уникатенo Рачно Изработен Накит' : 'Unique Handcrafted Jewelry'}
                  btnText={language === 'mk' ? 'Купи Сега' : 'Shop Now'}
                  textPosition="text-end"
                  positionEnd="end-0"
                  right="100px"
                  linkPath="/product-page"
                />
                <HomepageCard
                  animationPath="../src/assets/animations/bee_animation.json"
                  title={language === 'mk' ? 'Персонализирани нарачки' : 'Custom Made Orders'}
                  btnText={language === 'mk' ? 'Порачај Сега' : 'Order Now'}
                  textPosition="text-start"
                  right="-130px"
                  linkPath="/custom-orders"
                />
                <HomepageCard
                  animationPath="../src/assets/animations/helmet_animation.json"
                  title={language === 'mk' ? 'Исклучителен Домашен Декор' : 'Exceptional Home Decor'}
                  btnText={language === 'mk' ? 'Откриј' : 'Discover'}
                  textPosition="text-end"
                  positionEnd="end-0"
                  right="100px"
                  linkPath="/product-page-home-decor"
                />
              </div>
            </div>
          </div>
          <div className="row bg-butterfly">
            <div className="col">
              <h1>{language === 'mk' ? 'Секогаш уникатно, никогаш точно исто!' : 'Always unique, never exactly the same!'}</h1>
              <p>
                {language === 'mk'
                  ? 'Секој дел е рачно изработен со внимание до најмали детали во нашата работилница во Охрид.'
                  : 'Each piece is handcrafted with meticulous attention to detail in our workshop in Ohrid.'}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="razglednica"></div>
            <div className="col ">
              <div>
                <h1>{language === 'mk' ? 'Столетна традиција' : 'Over a century old tradition'}</h1>
                <p>
                  {language === 'mk'
                    ? 'Со текот на времето, нашето фамилно претпријатие расте и се развива, се адаптира на променливите тенденции, додека истовремено останува коренато во нашето наследство.'
                    : 'As time unfolds, our family business has been growing and evolving, adapting to the changing tides while remaining rooted in our heritage.'}
                </p>
                <Link to="/our-story" className="button-cs-brown our-story-color">
                  {language === 'mk' ? 'Види Нашата Приказна' : 'See Our Story'}
                </Link>
                <img className="px-5 mt-5" src="../../public/images/Home-Page/butterfly-dots.png" alt="" />
              </div>
            </div>
          </div>
          <div className="row bg-butterfly">
            <div className="col">
              <h1>{language === 'mk' ? 'Посетете ja нашата продавница' : 'Visit Our Shop'}</h1>
              <p>
                {language === 'mk'
                  ? 'Дојдете да не посетите во срцето на стариот дел на Охрид и доживеете го уметничкото занаетчиство на прво раче.'
                  : "Come meet us at the heart of Ohrid's old town and experience the art of craftsmanship firsthand!"}
              </p>
              <button className="button-cs-brown">{language === 'mk' ? 'Контакт Детали' : 'Contact Details'}</button>
            </div>
          </div>
          <div className="row my-5">
            <div className="col ">
              <h1 className="mb-5">{language === 'mk' ? 'Што велат нашите клиенти' : 'What Our Clients Say'}</h1>
              <Testimonial
                text={`“${
                  language === 'mk'
                    ? 'Се судрив со Маринов за време на моето патување до Охрид и сум многу среќен што го направив. Нивната продавница е скриено благо полно со прекрасни рачно изработени бакарни дела. Купив обетки и секој пат кога ги носам добив комплименти. Уникатните дизајни и топлината на персоналот го прават Маринов несекојдневно искуство. Топло препорачувам!”'
                    : "I stumbled upon Marinov during my trip to Ohrid, and I'm so glad I did. Their shop is a hidden gem filled with beautifully handcrafted copper pieces. I bought a pair of earrings, and every time I wear them, I receive compliments. The unique designs and the warmth of the staff make Marinov an unforgettable experience. Highly recommended!"
                }`}
                person="- Elsa Johansson, Sweden"
              />
              <img className="py-5" style={{ width: 40, margin: 'auto' }} src="../../public/images/Home-Page/leaf_divider.svg" alt="" />
              <Testimonial
                text={`${
                  language === 'mk'
                    ? 'Неодамна купив бакарна ограда од Маринов и не можев да бидам покажан. Изработката е безупречна и вниманието на детали се гледа во секој звено. Оградата не само што го дополнува мојот стил перфектно, туку и извикува зачитување каде и да одам. Накитот на Маринов не е само додаток; тоа е уметничко дело кое додава елеганција на секој изглед. Сум вистински впечатен и определено ќе се вратам по уште парчиња!'
                    : "I recently purchased a copper necklace from Marinov, and I couldn't be happier with my choice. The craftsmanship is impeccable, and the attention to detail is evident in every link. The necklace not only complements my style perfectly but also garners admiration wherever I go. Marinov's jewelry isn't just an accessory; it's a work of art that adds elegance to any outfit. I'm genuinely impressed and will definitely be returning for more pieces!"
                }`}
                person="- Sofia Oliveira, Portugal"
              />
              <img
                className="py-5"
                style={{
                  width: 40,
                  margin: 'auto',
                  transform: 'rotate(180deg)',
                }}
                src="../../public/images/Home-Page/leaf_divider.svg"
                alt=""
              />
              <Testimonial
                text={`${
                  language === 'mk'
                    ? 'Бакарните производи на Маринов одразуваат ја есенцијата на богатото наследство на Охрид. Порачав бакарна лампа по моиот избор за мојот дом и тоа ги надмина моите очекувања. Тимот на Маринов отиде над и одамна за да се обезбеди дека секој детал е перфектен. Нивната посветеност за преслушување на традицијата додека создаваат модерни ремек-дела е вистински зафаллив. Сум изключително задоволен со својата купување!'
                    : "Marinov's copper products reflect the essence of Ohrid's rich heritage. I ordered a custom-made copper lamp for my home, and it exceeded my expectations. The team at Marinov went above and beyond to ensure every detail was perfect. Their dedication to preserving tradition while creating modern masterpieces is truly commendable. I am immensely satisfied with my purchase!"
                }`}
                person="- Matthias Schneider, Austria"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Homepage;
