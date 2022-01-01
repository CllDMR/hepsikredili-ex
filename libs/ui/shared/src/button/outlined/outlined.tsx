import { FC } from 'react';
import { ButtonBaseProps } from '..';
import './outlined.module.css';

export interface ButtonOutlinedProps extends ButtonBaseProps {
  variant: 'outlined';
}

export const ButtonOutlined: FC<ButtonOutlinedProps> = (props) => (
  <div>
    <h1>Welcome to ButtonOutlined!</h1>
  </div>
);

export default ButtonOutlined;
