import { PubSub } from 'graphql-subscriptions';

import * as MESSAGE_EVENTS from './message';
import * as DIRECT_MESSAGE from './direct';

export const EVENTS = {
  MESSAGE: MESSAGE_EVENTS,
  DIRECT: DIRECT_MESSAGE
};

export default new PubSub();
