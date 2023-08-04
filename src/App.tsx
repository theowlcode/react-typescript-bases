import { useState } from "react";
import "./App.css";
import { Child } from "./components/Child";
import { Child2 } from "./components/Child2";
import { Father } from "./components/Father";
import { IPropsChild2 } from "./interfaces/child2.interface";

interface ISchema {
  id: number;
  Component: React.FC<IPropsChild2>;
  props: IPropsChild2;
}

const schema: ISchema[] = [
  {
    id: 0,
    Component: Child2,
    props: {
      text: "hola 1",
    },
  },
  {
    id: 1,
    Component: Child2,
    props: {
      text: "hola 2",
    },
  },
  {
    id: 2,
    Component: Child2,
    props: {
      text: "hola 3",
    },
  },
  {
    id: 3,
    Component: Child2,
    props: {
      text: "Este es el último child",
    },
  },
];

function App() {
  const [step, setStep] = useState<number>(0);

  const goNext = () =>
    setStep((prev) => (prev === schema.length - 1 ? 0 : prev + 1));

  const goPrevious = () =>
    setStep((prev) => (prev === 0 ? schema.length - 1 : prev - 1));

  return (
    <div>
      <h2>Parent and Childs</h2>

      <Father
        Component={schema[step].Component}
        componentProps={schema[step].props}
      >
        <button onClick={goPrevious}>go previous</button>
        <button onClick={goNext}>go next</button>
      </Father>
    </div>
  );
}

export default App;
