// react libraries
import * as React from 'react';

// styles
import './Button.scss';

// interfaces
import { ButtonProps } from './interfaces';

const Button = (props: ButtonProps) => {
  let { size, type, icon, name } = props;
  type = !type ? 'hollow' : type;
  size = !size ? 'regular' : size;
  
  const classNames = `button ${size} ${type}`;

  return (
    <button className={classNames}>
      {props.name} {props.icon && <img src={props.icon} />}
    </button>
  );
};

export default Button;
