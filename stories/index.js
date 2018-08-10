import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faChevronUp, faChevronDown, faChevronLeft, faChevronRight, faCheck, faSearch, faPlay, faStar as faStarFill, faQuoteLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartFill, faStar } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './UIKit/Icons';
import './UIKit/Container';
import './UIKit/Preloaders';
import './UIKit/Typography/HeadingTags';
import './UIKit/Typography/TextFields';
import './UIKit/Quote';
import './UIKit/Filter';
import './UIKit/Preview';
import './UIKit/Dropdown';
import '../src/components/helpers/injectGlobalStyles';
import './UIKit/Search';
import './UIKit/Rating';
import './UIKit/Colors';
import './UIKit/Logo';
import './UIKit/Buttons';
import './UIKit/MainHeader';
import './UIKit/Footer';

library.add(
  faHeart,
  faChevronUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faCheck,
  faSearch,
  faPlay,
  faHeartFill,
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faQuoteLeft,
  faStarFill,
  faStar,
  faTimes,
);
