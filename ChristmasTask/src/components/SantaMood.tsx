import { useState } from "react";

const SantaMood = () => {
  const [isHappy, setIsHappy] = useState<boolean>(true);

  return (
    <div className="card">
      <h2>Настроението на Дядо Коледа</h2>
      <p>{isHappy ? "Весел Дядо Коко" : "Уморен Дядо Коко"}</p>

      <button onClick={() => setIsHappy(!isHappy)}>
        Смени настроението
      </button>
    </div>
  );
};

export default SantaMood;
