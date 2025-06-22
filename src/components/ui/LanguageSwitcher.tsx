import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const NorwegianFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 16" className="w-6 h-auto rounded-sm">
    <path fill="#ef2b2d" d="M0 0h22v16H0z" />
    <path fill="#fff" d="M6 0h4v16H6zM0 6h22v4H0z" />
    <path fill="#002868" d="M7 0h2v16H7zM0 7h22v2H0z" />
  </svg>
);

const BritishFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-6 h-auto rounded-sm">
    <clipPath id="a"><path d="M0 0v30h60V0z"/></clipPath>
    <clipPath id="b"><path d="M30 15h30v15H30zm-30 0h30v15H0zm30-15h30v15H30zM0 0h30v15H0z"/></clipPath>
    <g clipPath="url(#a)">
      <path d="M0 0v30h60V0z" fill="#012169"/>
      <path d="M0 0L60 30m0-30L0 30" stroke="#fff" strokeWidth="6"/>
      <path d="M0 0L60 30m0-30L0 30" clipPath="url(#b)" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6"/>
    </g>
  </svg>
);


const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'nb' | 'en') => {
    i18n.changeLanguage(lng);
  };

  const currentLang = i18n.language;

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={currentLang.startsWith('nb') ? 'secondary' : 'ghost'}
        size="icon"
        onClick={() => changeLanguage('nb')}
        aria-label="Switch to Norwegian"
      >
        <NorwegianFlag />
      </Button>
      <Button
        variant={currentLang.startsWith('en') ? 'secondary' : 'ghost'}
        size="icon"
        onClick={() => changeLanguage('en')}
        aria-label="Switch to English"
      >
        <BritishFlag />
      </Button>
    </div>
  );
};

export default LanguageSwitcher; 