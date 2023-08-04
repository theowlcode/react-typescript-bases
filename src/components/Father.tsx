import React from "react";
import { IPropsChild2 } from "../interfaces/child2.interface";

interface IProps {
  // children: React.ReactElement[] | React.ReactElement;
  children: JSX.Element | JSX.Element[];
  Component: React.FC<IPropsChild2>;
  componentProps: IPropsChild2;
}
export const Father: React.FC<IProps> = ({
  children,
  Component,
  componentProps,
}) => {
  return (
    <div>
      <h3>Soy el padre</h3>
      {children}
      <Component {...componentProps} />
    </div>
  );
};
