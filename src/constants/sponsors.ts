import avalancheSvg from '../../public/sponsors/Avalanche.svg';
import hackquest from '../../public/sponsors/hackquest.png';
import balsamiq from '../../public/sponsors/balsamiq.png';

export const sponsors = [
  {
    title: 'Tera Sponsor',
    sponsors: [
      {
        logo: avalancheSvg,
        link: 'https://www.avax.network/',
        alt: 'Avalanve svg',
        description: 'Title Sponsor',
      },
    ],
  },
  // {
  //   title: 'Giga Sponsor',
  //   sponsors: [],
  // },
  // {
  //   title: 'Mega Sponsor',
  //   sponsors: [],
  // },
  {
    title: 'Kilo Sponsor',
    sponsors: [
      {
        logo: balsamiq,
        link: 'https://balsamiq.com/',
        alt: 'balsamiq svg',
        description: 'Design Partner',
      },
    ],
  },
  {
    title: 'Platform Partner',
    sponsors: [
      {
        logo: hackquest,
        link: 'https://www.hackquest.io/',
        alt: 'hackquest svg',
        description: '',
      },
    ],
  },
];
