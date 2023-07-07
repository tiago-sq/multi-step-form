type Step4Props = {
  age: number;
  name: string;
  onReset: () => void;
};

const Step4 = ({ age, name, onReset }: Step4Props) => {
  return (
    <div>
      <h2>Última Etapa</h2>
      <p>{`${name} possui ${2023 - age} anos de idade.`}</p>
      <button onClick={onReset}>Reiniciar</button>
    </div>
  );
};

export default Step4;
