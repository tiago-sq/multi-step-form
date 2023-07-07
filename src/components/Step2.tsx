import React, { useState } from 'react';

type Step2Props = {
  onNext: (name: string) => void;
};

const Step2 = ({ onNext }: Step2Props) => {
  const [name, setName] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleNextClick = () => {
    if (name.trim() !== '') {
      onNext(name);
    }
  };

  return (
    <div>
      <h2>Etapa 2</h2>
      <label>
        Nome:
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button onClick={handleNextClick}>Próxima etapa</button>
    </div>
  );
};

export default Step2;
