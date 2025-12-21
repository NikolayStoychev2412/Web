import { useState } from "react";
const ChristmasLights = () => {
  const [color, setColor] = useState<string>("червени");

  return (
    <div className="card">
      <h2>Коледни лампички</h2>
      <p>Цвят: {color}</p>

      <button onClick={() => setColor("зелени")}>Зелени</button>
      <button onClick={() => setColor("сини")}>Сини</button>
      <button onClick={() => setColor("Жълти")}>Жълти</button>
    </div>
  );
};

export default ChristmasLights;
