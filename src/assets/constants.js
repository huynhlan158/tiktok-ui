import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faAward,
  faGear,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

// HEADER
export const HEADER_MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faGlobe} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'us',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'fr',
          title: 'French',
        },
        {
          code: 'de',
          title: 'German',
        },
        {
          code: 'ar',
          title: 'Arabic',
        },
        {
          code: 'as',
          title: 'Assamese',
        },
        {
          code: 'bm',
          title: 'Bambara',
        },
        {
          code: 'eu',
          title: 'Basque',
        },
        {
          code: 'be',
          title: 'Belarusian',
        },
        {
          code: 'bn',
          title: 'Bengali',
        },
        {
          code: 'bi',
          title: 'Bislama',
        },
        {
          code: 'bs',
          title: 'Bosnian',
        },
        {
          code: 'bg',
          title: 'Bulgarian',
        },
        {
          code: 'fo',
          title: 'Faroese',
        },
        {
          code: 'hi',
          title: 'Hindi',
        },
        {
          code: 'uk',
          title: 'Ukrainian',
        },
        {
          code: 'cy',
          title: 'Welsh',
        },
        {
          code: 'wa',
          title: 'Walloon',
        },
        {
          code: 'wo',
          title: 'Wolof',
        },
        {
          code: 'xh',
          title: 'Xhosa',
        },
        {
          code: 'yi',
          title: 'Yiddish',
        },
        {
          code: 'yo',
          title: 'Yoruba',
        },
        {
          code: 'zu',
          title: 'Zulu',
        },
        {
          code: 'ss',
          title: 'Swati',
        },
        {
          code: 'su',
          title: 'Sundanese',
        },
        {
          code: 'sw',
          title: 'Swahili',
        },
        {
          code: 'sv',
          title: 'Swedish',
        },
        {
          code: 'ty',
          title: 'Tahitian',
        },
        {
          code: 'tg',
          title: 'Tajik',
        },
        {
          code: 'tl',
          title: 'Tagalog',
        },
        {
          code: 'th',
          title: 'Thai',
        },
        {
          code: 'bo',
          title: 'Tibetan',
        },
        {
          code: 'ti',
          title: 'Tigrinya',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

export const HEADER_USER_MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'View profile',
    to: '/profile',
  },
  {
    icon: <FontAwesomeIcon icon={faAward} />,
    title: 'Get coins',
    to: '/coin',
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: 'Settings',
    to: '/settings',
  },
  ...HEADER_MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
    title: 'Log out',
    to: '/logout',
    separate: true,
  },
];
