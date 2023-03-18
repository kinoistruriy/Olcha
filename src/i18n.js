import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { useTranslation, Trans } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      uz: {
        translation: {
          head: {
            part1: '0% Mudatli tolov',
            part2: 'Chegirmalar',
            part3: 'Sayt Xaritasi',
            part4: 'Olchada Soting',
          },
          navbar:{
            part1:'Katalog',
            part2:'Taqqoslash',
            part3:'Sevimlilar',
            part4:'Savatcha',
            part5:'Kirish',
            part6:'',
            part7:'',
          }
        }
      },
      ru: {
        translation: {
          head: {
            part1: '0% Расрочка',
            part2: 'Скидки',
            part3: 'Карта сайта',
            part4: 'Продавайте на олча',
          },
          navbar:{
            part1:'Каталог',
            part2:'Сравнение',
            part3:'Избранные',
            part4:'Корзина',
            part5:'Войти',
            part6:'',
            part7:'',
          }
        }
      },
      уз:{
        translation: {
          head: {
            part1: '0% муддатли толов',
            part2: 'Чегирмалар',
            part3: 'Сайт харитаси',
            part4: 'Олчада сотинг',
          },
          navbar:{
            part1:'Каталог',
            part2:'Таккосолаш',
            part3:'Севимлилар',
            part4:'Саватча',
            part5:'Кириш',
            part6:'',
            part7:'',
          }
        }
      }
    }
  });

export default i18n;