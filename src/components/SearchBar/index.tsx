import React, { SyntheticEvent } from 'react';

import './index.scss';

type InputProps = {
  name: string;
  value: string;
  onChange: (event: SyntheticEvent) => void;
};

const Input: React.FC<InputProps> = ({ name, value, onChange }) => {
  return (
    <input
    name={name}
    value={value}
    onChange={onChange}
    />
  )
};

export default Input;
