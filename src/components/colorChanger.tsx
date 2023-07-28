import { useRef, useState } from "react";

interface IProps {
  text: string;
  fontSize?: number;
}

export const ColorChanger: React.FC<IProps> = ({ fontSize = "16px", text }) => {
  const colorRef = useRef<HTMLInputElement>(null);
  const [color, setColor] = useState<string>("blue");

  const changeColor = (value: string | undefined) => {
    if (value === undefined) return;
    setColor(value);
  };

  return (
    <div>
      <span style={{ fontSize: `${fontSize}px`, color }}>{text}</span>
      <input name="color" ref={colorRef} />
      <button onClick={() => changeColor(colorRef.current?.value)}>
        cambiar color
      </button>
    </div>
  );
};
