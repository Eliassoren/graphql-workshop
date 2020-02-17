import * as React from 'react';
import { PokemonStatsQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
  data: PokemonStatsQuery;
}

const className = 'PokemonStats';

const PokemonStats: React.FC<Props> = ({ data }) => {
  if (!data.pokemon) {
    return <div>No pokemon available</div>;
  }

  return (
    <div className={className}>
      <div className={`${className}__type`}>
        <span>Pokemon {data.pokemon.name}: </span>
        {!!data.pokemon.__typename && (
          <span className={`${className}__type`}>Type: {data.pokemon.__typename}</span>
        )}
      </div>
      <h1 className={`${className}__title`}>
        {data.pokemon.name}
        </h1>
      <div className={`${className}__attacks`}>
          Attacks
      {!!data.pokemon.attacks && !!data.pokemon.attacks.special && (
          data.pokemon.attacks.special.map( attack =>
            attack?
            <ul className={`${className}__attack`}> 
                <li>
                {attack.name}
                </li>   
                <li>
                {attack.type}
                </li>
                <li>
                {attack.damage}
                </li>
               
            </ul> : null,
          )
      )}
      </div>
    </div>
  );
};

export default PokemonStats;
