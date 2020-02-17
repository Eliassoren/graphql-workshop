import * as React from 'react';
import { usePokemonStatsQuery } from '../../generated/graphql';
import useEffect from 'react-apollo-hooks';
import PokemonStats from './PokemonStats';

interface OwnProps {
  id: String;
}

const PokemonContainer = ({ id }: OwnProps) => {
  const { data, error, loading } = usePokemonStatsQuery({
    variables: { name: String(id) },
  });
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Pokemon not found</div>;
  }

  return <PokemonStats data={data} />;
};

export default PokemonContainer;
