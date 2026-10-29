import { useState } from "react";

const ObjectRadio = () => {
  const [selectedMode, setSelectedMode] = useState("UPI");
  
  const payments = [
    { id: "Jazzcash", info: "Instant transfer via Jazzcash apps" },
    { id: "Card", info: "pay using credit or debit card" },
  ];

  return (
    <div className="select-none">
      {payments.map((item) => {
        return (
          <label key={item.id} htmlFor={item.id}>
            <input
              id={item.id}
              type="radio"
              name="payments"
              value={item.id}
              checked={selectedMode === item.id}
              onChange={(e) => setSelectedMode(e.target.value)}
            />
            {item.id}
          </label>
        );
      })}

      <p>Mode of payment : {selectedMode}</p>
      <p>Details : {payments.find((obj) => obj.id === selectedMode).info}</p>
    </div>
  );
};

export default ObjectRadio;
