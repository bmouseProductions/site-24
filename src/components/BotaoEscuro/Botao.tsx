
interface BtnProps {
  text: string;
  link: string;
}


export const Botao = ({ text, link }: BtnProps) => {
  
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  return (
    <a
      href={link}
      onClick={handleBackToTop}
      className={`!h-[50px] pt-1 w-full flex justify-center items-center text-lg font-semibold text-center text-[#0fff94] rounded-[57px] uppercase transition-all border-2 border-[#0fff94] `}
    >
      {text}
    </a>
  );
};
