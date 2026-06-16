import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'en', flag: '🇺🇸', label: 'EN' },
  { code: 'pt', flag: '🇧🇷', label: 'PT' },
  { code: 'fr', flag: '🇫🇷', label: 'FR' },
  { code: 'es', flag: '🇪🇸', label: 'ES' },
] as const;

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const active = i18n.language?.slice(0, 2);

  const change = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem('latitud_language', code);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-1 p-1 rounded-xl backdrop-blur-sm"
      style={{ background: 'rgba(28,52,86,0.55)' }}
    >
      {LANGUAGES.map(({ code, flag, label }) => {
        const isActive = active === code;
        return (
          <button
            key={code}
            onClick={() => change(code)}
            aria-label={`Switch to ${label}`}
            className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold transition-all duration-150 select-none"
            style={{
              background: isActive ? '#C4973A' : 'transparent',
              color: isActive ? '#fff' : 'rgba(255,255,255,0.55)',
              boxShadow: isActive ? '0 1px 6px rgba(196,151,58,0.30)' : 'none',
            }}
          >
            <span>{flag}</span>
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
}
