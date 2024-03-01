interface BtnProps {
  text: string;
  tipo: "tipo1" | "tipo2";
}

export const Botao = ({ text, tipo }: BtnProps) => {
  const getBackgroundColor = () => {
    if (tipo === "tipo1") {
      return "bg-[#760BFF]  text-white shadow-botao";
    } else if (tipo === "tipo2") {
      return "bg-white text-black shadow-botao2 "; // Note que você deve fornecer uma cor válida aqui
    }
  };

  return (
    <button
      className={`h-[80px] w-full text-xl font-semibold rounded-[57px]  font-montserrat transition-all ${getBackgroundColor()}`}
    >
      {text}
    </button>
  );
};
