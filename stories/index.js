import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faChevronUp, faChevronDown, faChevronLeft, faChevronRight, faCheck, faSearch, faPlay, faStar as faStarFill, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartFill, faStar } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './UIKit/Icons';
import './UIKit/Buttons';
import './UIKit/Container';
import './UIKit/Preloaders';
import './UIKit/Typography/HeadingTags';
import './UIKit/Typography/TextFields';
import './UIKit/Search';
import '../src/components/injectGlobalStyles';
import './UIKit/Rating';
import './UIKit/Colors';

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
);
