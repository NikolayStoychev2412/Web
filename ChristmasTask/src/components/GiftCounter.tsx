import { useState } from "react";

const GiftCounter = () => {
  const [gifts, setGifts] = useState<number>(0);

  return (
    <div className="card">
      <h2>Подаръци под елхата</h2>
      <p>Общо подаръци: {gifts}</p>

      <button onClick={() => setGifts(gifts + 1)}>Добави подарък</button>
      <button onClick={() => setGifts(0)}>Отвори всички подаръци</button>
    </div>
  );
};

export default GiftCounter;
