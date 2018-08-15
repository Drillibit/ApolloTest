import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faChevronUp, faChevronDown, faChevronLeft, faChevronRight, faCheck, faSearch, faPlay, faStar as faStarFill, faQuoteLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartFill, faStar } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './UIKit/Colors';
import './UIKit/Typography/HeadingTags';
import './UIKit/Typography/TextFields';
import './UIKit/Icons';
import './UIKit/Buttons';
import './UIKit/Quote';
import './UIKit/Preloaders';
import './UIKit/Logo';
import './UIKit/Filter';
import './UIKit/Dropdown';
import './UIKit/Tabs';
import './UIKit/Preview';
import './UIKit/Rating';
import './UIKit/Search';
import './UIKit/ModalWrapper';
import './UIKit/FeaturedMovie';
import './UIKit/LazyLoader';
import './UIKit/Footer';
import '../src/components/helpers/injectGlobalStyles';


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
