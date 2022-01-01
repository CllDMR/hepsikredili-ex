import { FC } from 'react';
import { ButtonBaseProps } from '..';
import './flat.module.css';

export interface ButtonFlatProps extends ButtonBaseProps {
  variant: 'flat';
}

export const ButtonFlat: FC<ButtonFlatProps> = (props) => (
  <div>
    <h1>Welcome to ButtonFlat!</h1>
  </div>
);

export default ButtonFlat;
