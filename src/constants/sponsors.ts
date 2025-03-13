import avalancheSvg from '../../public/sponsors/Avalanche.svg';
import wandb from '../../public/sponsors/wandb.png';
import balsamiq from '../../public/sponsors/balsamiq.png';
import xyz from '../../public/sponsors/xyz.png';
import hackquest from '../../public/sponsors/hackquest.png';

export const sponsors = [
  {
    title: 'Tera Sponsor',
    sponsors: [
      {
        logo: avalancheSvg,
        link: 'https://www.avax.network/',
        alt: 'Avalanve logo',
        description: 'Title Sponsor',
      },
    ],
  },
  // {
  //   title: 'Giga Sponsor',
  //   sponsors: [],
  // },
  {
    title: 'Mega Sponsor',
    sponsors: [
      {
        logo: wandb,
        link: 'https://wandb.ai/site',
        alt: 'weight & biases logo',
        description: 'AI/ML Partner',
      },
    ],
  },
  {
    title: 'Kilo Sponsor',
    sponsors: [
      {
        logo: balsamiq,
        link: 'https://balsamiq.com/',
        alt: 'balsamiq logo',
        description: 'Design Partner',
      },
      {
        logo: xyz,
        link: 'https://gen.xyz/',
        alt: 'xyz logo',
        description: 'Domain Partner',
      },
    ],
  },
  {
    title: 'Platform Partner',
    sponsors: [
      {
        logo: hackquest,
        link: 'https://www.hackquest.io/',
        alt: 'hackquest logo',
        description: 'Platform Partner',
      },
    ],
  },
];
