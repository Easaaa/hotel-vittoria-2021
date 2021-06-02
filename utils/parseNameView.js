export const parseNameView = (name, locale) => {
  if (locale === 'en') return name.replace('-', ' ');
  if (name === 'lake-view') return 'vista lago';
  if (name === 'garden-view') return 'vista giardino';
  if (name === 'mountain-view') return 'vista montagna';
};
