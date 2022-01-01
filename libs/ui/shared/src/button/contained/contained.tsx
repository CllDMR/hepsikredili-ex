import { FC } from 'react';
import { ButtonBaseProps } from '..';
import './contained.module.css';

export interface ButtonContainedProps extends ButtonBaseProps {
  variant: 'contained';
}

export const ButtonContained: FC<ButtonContainedProps> = (props) => (
  <button className="bg-red-900 border-8 border-green-800 ">
    <span>{props.title}</span>
  </button>
);

export default ButtonContained;
