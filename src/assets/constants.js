import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCircleQuestion, faKeyboard } from '@fortawesome/free-solid-svg-icons';

// HEADER
export const HEADER_MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faGlobe} />,
    title: 'English',
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
