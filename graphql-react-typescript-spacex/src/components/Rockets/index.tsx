import * as React from 'react';
import { useRocketQuery } from '../../generated/graphql';
import Rockets, { OwnProps } from './Rockets';

const RocketListContainer = (props: OwnProps) => {
  const { data, error, loading } = use

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <LaunchList data={data} {...props} />;
};

export default LaunchListContainer;
