type Step1Props = {
  onNext: () => void;
};

const Step1 = ({ onNext }: Step1Props) => {
  return (
    <div>
      <h2>Bem-vindo!</h2>
      <p>Seja bem-vindo ao formulário de várias etapas.</p>
      <button onClick={onNext}>Próxima etapa</button>
    </div>
  );
};

export default Step1;
