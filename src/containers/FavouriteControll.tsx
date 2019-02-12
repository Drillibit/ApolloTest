import { graphql, compose } from 'react-apollo';

import { FavouriteButton } from '../components/FavouriteButton';
import { CURRENT_USER, ADD_FAVOURITE } from '../components/Requests/user';


export const FavouriteControll = compose(
  graphql(CURRENT_USER, {
    props: ({ data }) => ({
      data
    })
  }),
  graphql(ADD_FAVOURITE, {
    options: ({ userId, favouriteId, favourite }) => ({
      variables: {
        userId,
        favouriteId,
        favourite
      }
    })
  })
)(FavouriteButton);
