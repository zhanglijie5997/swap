import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './json/en';
import zh from './json/zh';

export default i18n
  .use(initReactI18next) // 用于react组件
  .init({
    lng: 'zh', // 默认语言
    fallbackLng: 'en',
    resources: {
      en: {
        translation: en
      },
      zh: {
        translation: zh
      }
    }
  });