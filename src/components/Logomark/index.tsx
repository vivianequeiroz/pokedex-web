import { FunctionComponent } from 'react';
import Logo from '../../assets/Logo.svg';

export const Logomark: FunctionComponent = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={Logo} alt="logomark" className="h-16 w-16" />
      <span className="text-3xl font-bold">Pokédex</span>
    </div>
  );
};
