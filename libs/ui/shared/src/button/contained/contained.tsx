import { FC } from 'react';
import { ButtonBaseProps } from '..';
import './contained.module.css';

export interface ButtonContainedProps extends ButtonBaseProps {
  variant: 'contained';
}

export const ButtonContained: FC<ButtonContainedProps> = (props) => (
  <div>
    <h1>Welcome to ButtonContained!</h1>
  </div>
);

export default ButtonContained;
