import gql from 'graphql-tag';

export const QUERY_ROCKETS = gql`
query RocketQuery {
    rockets{
      id,
      active,
      mass{kg},
      rocket_name,
      flickr_images
    }
  }`

