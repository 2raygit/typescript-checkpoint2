code 1:
// Importation de React et des types nécessaires
import React, { FC } from 'react';

// Définir le type des props
type GreetingProps = {
  name: string;
}

// Composant fonctionnel avec type
const Greeting: FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

// Exportation du composant
export default Greeting;



code 2:
// Importation de React et des types nécessaires
import React, { Component } from 'react';

// Définir le type pour le state
type CounterState = {
  count: number;
}

// Définir le type pour les props (même si nous n'avons pas de props ici)
type CounterProps = {}

// Composant de classe avec type
class Counter extends Component<CounterProps, CounterState> {
  // Initialisation du state avec le type défini
  state: CounterState = {
    count: 0
  };

  // Méthode d'incrémentation avec type
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // Méthode render avec type
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// Exportation du composant
export default Counter;