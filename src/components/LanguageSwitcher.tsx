import { useLanguage } from '../LanguageContext';
import { Language } from '../translations';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; flag: string; label: string }[] = [
    { code: 'en', flag: '🇬🇧', label: 'EN' },
    { code: 'fr', flag: '🇫🇷', label: 'FR' },
    { code: 'nl', flag: '🇧🇪', label: 'NL' },
  ];

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition ${
            language === lang.code
              ? 'bg-purple-600 text-white'
              : 'bg-white/10 text-purple-200 hover:bg-white/20 hover:text-white border border-white/20'
          }`}
          title={lang.label}
        >
          <span className="text-lg">{lang.flag}</span>
        </button>
      ))}
    </div>
  );
}
