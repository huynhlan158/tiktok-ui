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
          title: 'Việt Nam',
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
