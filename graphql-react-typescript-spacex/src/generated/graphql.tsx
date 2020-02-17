export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Represents a Pokémon's attack types */
export type Attack = {
  /** The name of this Pokémon attack */
  name?: Maybe<Scalars["String"]>;
  /** The type of this Pokémon attack */
  type?: Maybe<Scalars["String"]>;
  /** The damage of this Pokémon attack */
  damage?: Maybe<Scalars["Int"]>;
};

/** Represents a Pokémon */
export type Pokemon = {
  /** The ID of an object */
  id: Scalars["ID"];
  /** The identifier of this Pokémon */
  number?: Maybe<Scalars["String"]>;
  /** The name of this Pokémon */
  name?: Maybe<Scalars["String"]>;
  /** The minimum and maximum weight of this Pokémon */
  weight?: Maybe<PokemonDimension>;
  /** The minimum and maximum weight of this Pokémon */
  height?: Maybe<PokemonDimension>;
  /** The classification of this Pokémon */
  classification?: Maybe<Scalars["String"]>;
  /** The type(s) of this Pokémon */
  types?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The type(s) of Pokémons that this Pokémon is resistant to */
  resistant?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The attacks of this Pokémon */
  attacks?: Maybe<PokemonAttack>;
  /** The type(s) of Pokémons that this Pokémon weak to */
  weaknesses?: Maybe<Array<Maybe<Scalars["String"]>>>;
  fleeRate?: Maybe<Scalars["Float"]>;
  /** The maximum CP of this Pokémon */
  maxCP?: Maybe<Scalars["Int"]>;
  /** The evolutions of this Pokémon */
  evolutions?: Maybe<Array<Maybe<Pokemon>>>;
  /** The evolution requirements of this Pokémon */
  evolutionRequirements?: Maybe<PokemonEvolutionRequirement>;
  /** The maximum HP of this Pokémon */
  maxHP?: Maybe<Scalars["Int"]>;
  image?: Maybe<Scalars["String"]>;
};

/** Represents a Pokémon's attack types */
export type PokemonAttack = {
  /** The fast attacks of this Pokémon */
  fast?: Maybe<Array<Maybe<Attack>>>;
  /** The special attacks of this Pokémon */
  special?: Maybe<Array<Maybe<Attack>>>;
};

/** Represents a Pokémon's dimensions */
export type PokemonDimension = {
  /** The minimum value of this dimension */
  minimum?: Maybe<Scalars["String"]>;
  /** The maximum value of this dimension */
  maximum?: Maybe<Scalars["String"]>;
};

/** Represents a Pokémon's requirement to evolve */
export type PokemonEvolutionRequirement = {
  /** The amount of candy to evolve */
  amount?: Maybe<Scalars["Int"]>;
  /** The name of the candy to evolve */
  name?: Maybe<Scalars["String"]>;
};

/** Query any Pokémon by number or name */
export type Query = {
  query?: Maybe<Query>;
  pokemons?: Maybe<Array<Maybe<Pokemon>>>;
  pokemon?: Maybe<Pokemon>;
};

/** Query any Pokémon by number or name */
export type QueryPokemonsArgs = {
  first: Scalars["Int"];
};

/** Query any Pokémon by number or name */
export type QueryPokemonArgs = {
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};
export type PokemonStatsQueryVariables = {};

export type PokemonStatsQuery = { __typename?: "Query" } & {
  pokemon: Maybe<
    { __typename?: "Pokemon" } & Pick<Pokemon, "id" | "number" | "name"> & {
        attacks: Maybe<
          { __typename?: "PokemonAttack" } & {
            special: Maybe<
              Array<
                Maybe<
                  { __typename?: "Attack" } & Pick<
                    Attack,
                    "name" | "type" | "damage"
                  >
                >
              >
            >;
          }
        >;
        evolutions: Maybe<
          Array<
            Maybe<
              { __typename?: "Pokemon" } & Pick<
                Pokemon,
                "id" | "number" | "name"
              > & {
                  weight: Maybe<
                    { __typename?: "PokemonDimension" } & Pick<
                      PokemonDimension,
                      "minimum" | "maximum"
                    >
                  >;
                  attacks: Maybe<
                    { __typename?: "PokemonAttack" } & {
                      fast: Maybe<
                        Array<
                          Maybe<
                            { __typename?: "Attack" } & Pick<
                              Attack,
                              "name" | "type" | "damage"
                            >
                          >
                        >
                      >;
                    }
                  >;
                }
            >
          >
        >;
      }
  >;
};

import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";
import * as ReactApolloHooks from "react-apollo-hooks";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const PokemonStatsDocument = gql`
  query PokemonStats {
    pokemon(name: "Pikachu") {
      id
      number
      name
      attacks {
        special {
          name
          type
          damage
        }
      }
      evolutions {
        id
        number
        name
        weight {
          minimum
          maximum
        }
        attacks {
          fast {
            name
            type
            damage
          }
        }
      }
    }
  }
`;

export const PokemonStatsComponent = (
  props: Omit<
    Omit<
      ReactApollo.QueryProps<PokemonStatsQuery, PokemonStatsQueryVariables>,
      "query"
    >,
    "variables"
  > & { variables?: PokemonStatsQueryVariables }
) => (
  <ReactApollo.Query<PokemonStatsQuery, PokemonStatsQueryVariables>
    query={PokemonStatsDocument}
    {...props}
  />
);

export type PokemonStatsProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<PokemonStatsQuery, PokemonStatsQueryVariables>
> &
  TChildProps;
export function withPokemonStats<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    PokemonStatsQuery,
    PokemonStatsQueryVariables,
    PokemonStatsProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    PokemonStatsQuery,
    PokemonStatsQueryVariables,
    PokemonStatsProps<TChildProps>
  >(PokemonStatsDocument, operationOptions);
}

export function usePokemonStatsQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<PokemonStatsQueryVariables>
) {
  return ReactApolloHooks.useQuery<
    PokemonStatsQuery,
    PokemonStatsQueryVariables
  >(PokemonStatsDocument, baseOptions);
}
