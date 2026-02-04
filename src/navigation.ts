import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Juegos',
      href: '#',
    },
    {
      text: 'Soporte',
      href: '#',
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'Tienda', href: 'https://pcstudiosgames.com', target: '_self' }],
};

export const footerData = {
  links: [
    {
      title: 'PC Studios Games',
      links: [
        { text: 'Sobre Nosotros', href: '#' },
        { text: 'Privacidad', href: '#' },
        { text: 'Términos de Uso', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos', href: getPermalink('/terms') },
    { text: 'Privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/pcstudiosinc/store-game' },
  ],
  footNote: `
    © 2026 PC Studios Games · Todos los derechos reservados.
  `,
};
