import * as React from 'react';
import { RocketQuery } from '../../generated/graphql';
import './styles.css';

export interface OwnProps {
  handleIdChange: (newId: number) => void;
}

interface Props extends OwnProps {
  data: RocketQuery
}

const className = 'Rocket';

const Rockets: React.FC<Props> = ({ data, handleIdChange }) => (
  <div className={className}>
    <h3>Rockets</h3>
    <ol className={`${className}__list`}>
      {!!data.rockets. &&
       }
    </ol>
  </div>
);

export default Rockets;
