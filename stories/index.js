import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faChevronDown, faChevronLeft, faCheck, faSearch, faPlay, faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartFill } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './UIKit/Icons';
import '../src/components/injectGlobalStyles';

library.add(
  faHeart,
  faChevronDown,
  faChevronLeft,
  faCheck,
  faSearch,
  faPlay,
  faStar,
  faHeartFill,
  faFacebookF,
  faTwitter,
  faGooglePlusG,
);
