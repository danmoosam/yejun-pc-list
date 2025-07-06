
import { useState } from "react";

const initialCards = [
  {
    id: 1,
    name: "First Love A Ver.",
    type: "앨범",
    image: "https://via.placeholder.com/200x280?text=Yejun+PC+1",
    quantity: 1,
  },
  {
    id: 2,
    name: "Season's Greetings",
    type: "굿즈",
    image: "https://via.placeholder.com/200x280?text=Yejun+PC+2",
    quantity: 0,
  },
];

export default function App() {
  const [cards, setCards] = useState(initialCards);
  const [filter, setFilter] = useState("전체");

  const handleQuantityChange = (id, delta) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id
          ? { ...card, quantity: Math.max(card.quantity + delta, 0) }
          : card
      )
    );
  };

  const filteredCards =
    filter === "전체" ? cards : cards.filter((card) => card.type === filter);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ebf4ff', padding: '1rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', color: '#1e3a8a', fontWeight: 'bold' }}>YEJUN PHOTOCARD LIST</h1>

      <div style={{ margin: '1rem 0' }}>
        {['전체', '앨범', '굿즈'].map((type) => (
          <button key={type} onClick={() => setFilter(type)} style={{ margin: '0 0.5rem' }}>
            {type}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem' }}>
        {filteredCards.map((card) => (
          <div key={card.id} style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem' }}>
            <img src={card.image} alt={card.name} style={{ width: '100%', borderRadius: '0.5rem' }} />
            <p style={{ marginTop: '0.5rem', fontWeight: 'bold', color: '#1e3a8a' }}>{card.name}</p>
            <div style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <button onClick={() => handleQuantityChange(card.id, -1)}>-</button>
              <span style={{ margin: '0 0.5rem' }}>{card.quantity}</span>
              <button onClick={() => handleQuantityChange(card.id, 1)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
