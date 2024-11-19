import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en'], // Solo un idioma, el inglés
    defaultLocale: 'en', // El idioma predeterminado es inglés
  },
};

export default nextConfig;
