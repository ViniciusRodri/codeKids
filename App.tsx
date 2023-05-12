import { TailwindProvider, useTailwind} from 'tailwind-rn';
import utilities from './tailwind.json';
import Home from './screens/home';
import Idade from './screens/idade';

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <Idade />
    </TailwindProvider>
  );
}
