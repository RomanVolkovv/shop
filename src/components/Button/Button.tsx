import React from 'react';

interface Props {
  title: string;
}

const Button: React.FC<Props> = ({ title }) => {
  return <button>{title}</button>;
};

export default Button;
