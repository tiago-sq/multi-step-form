import React, { useState } from 'react';

type Step3Props = {
  onNext: (year: number) => void;
};

const Step3 = ({ onNext }: Step3Props) => {
  const [year, setYear] = useState(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYear(Number(event.target.value));
  };

  const handleNextClick = () => {
    onNext(year);
  };

  return (
    <div>
      <h2>Etapa 3</h2>
      <label>
        Data de Nascimento:
        <input
          type="text"
          value={year}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button onClick={handleNextClick}>Próxima etapa</button>
    </div>
  );
};

export default Step3;
