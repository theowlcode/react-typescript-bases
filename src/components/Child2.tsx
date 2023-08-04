import React from "react";
import { IPropsChild2 } from "../interfaces/child2.interface";

export const Child2: React.FC<IPropsChild2> = ({ text }) => {
  return <div>{text}</div>;
};
