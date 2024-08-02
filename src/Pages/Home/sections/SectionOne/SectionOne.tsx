import Header from "../../../../components/Header/Header";
import banner from '../../../../assets/images/Home/banner.svg'
import bannerSE from '../../../../assets/images/Home/SectionOne/bannerSE.webp'
import cameraHome from '../../../../assets/images/Home/SectionOne/cameraHome.webp'

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

export const SectionOne = () => {
  /*MODAL VIDEO*/
  /*
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenRECAP, setIsModalOpenRECAP] = useState(false);

  const openModalVideoInstitucional = () => setIsModalOpen(true);
  const closeModalVideoInstitucional = () => setIsModalOpen(false);

  const openModalVideoRECAP = () => setIsModalOpenRECAP(true);
  const closeModalVideoRECAP = () => setIsModalOpenRECAP(false);

  const VideoInstitucional: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    return (
      <>
        {isOpen && (
          <div className="pt-10 fixed z-[10000] inset-0 bg-black bg-opacity-50 flex items-start justify-center">
            <div className='container mx-auto px-5 md:px-10'>
              <div className='flex justify-end'>
                <button 
                  className='w-10 h-10 mb-5 md:mb-0 botaoClose'
                  onClick={onClose}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                    <path strokeLinecap="round" className='w-full h-full ' strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <iframe
                className="mx-auto w-full md:max-w-[600px] md:h-[400px] lg:max-w-[700px] lg:h-[515px] xl:max-w-[1000px] h-[200px] rounded-3xl"
                src="https://www.youtube.com/embed/dJmUMM-m2Wo?si=J6AIbRnem7C4ixz-"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
            </div>
          </div>
        )}
      </>
    );
  };

  const VideoRECAP: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    return (
      <>
        {isOpen && (
          <div className="pt-10 fixed z-[10000] inset-0 bg-black bg-opacity-50 flex items-start justify-center">
            <div className='container mx-auto px-5 md:px-10'>
              <div className='flex justify-end'>
                <button 
                  className='w-10 h-10 mb-5 md:mb-0 botaoClose'
                  onClick={onClose}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                    <path strokeLinecap="round" className='w-full h-full ' strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <iframe
                className="mx-auto w-full md:max-w-[600px] md:h-[400px] lg:max-w-[700px] lg:h-[515px] xl:max-w-[1000px] h-[200px] rounded-3xl"
                src="https://www.youtube.com/embed/36jOLshV4_M?si=ulug941jefsgDsFE"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
            </div>
          </div>
        )}
      </>
    );
  };
  */

  return (
    <section className=" md:pt-10 bg-section-one mx-auto">
      <Header />
      <div className="container px-5 lg:px-10 xl:px-20 mx-auto flex gap-10 flex-col">
        
        <img 
          src={banner} 
          alt=""
          className="w-full"
        />
        

        <div className="flex flex-col lg:flex-row gap-5 xl:gap-10 justify-between items-center  ">
          
          <a 
            className="!h-full lg:!h-[330px] w-full md:max-w-[555px] lg:max-w-none lg:!w-[70%] flex flex-col items-center justify-end rounded-[10px] transition-all bg-saudeEmpreende card-empresa"
            href="https://saudeempreende.com.br/"
            target='_blank'
          >
            <img className="lg:hidden rounded-[10px] w-full" src={bannerSE}  alt="" />
            <div className="w-full h-[120px] px-5 xl:px-7 efeito-vidro rounded-[10px] hidden lg:flex items-center justify-between gap-10 text-white ">
              <div className="w-full flex flex-col gap-2">
                {" "}
                <h2 className="text-lg font-bold">Saúde Empreende</h2>
                <p className="text-sm">
                  A plataforma que vai inovar o jeito de fazer Marketing Médico! 
                </p>
              </div>
              <div>
                <div
                  className="!h-[50px] flex items-center justify-center !w-[50px] rounded-full border  border-white transition-all button-card"
                >
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 !text-black">
                    <path strokeLinecap="round" className='' strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="lg:hidden mt-5 max-w-[90%]">
              <h2 className="text-lg font-bold">Saúde Empreende</h2>
              <p className="text-sm">
                A plataforma que vai inovar o jeito de fazer marketing médico!
              </p>
            </div>
          </a>


          <a
            className="!h-full lg:!h-[330px] lg:!w-[30%] flex flex-col items-center justify-end rounded-[10px] transition-all bg-cameraHome card-empresa"
            href="/servicos/audiovisual"
          >
            <img className="lg:hidden rounded-[10px] w-full" src={cameraHome}  alt="" />
            <div className="h-[120px] px-5 xl:px-7 efeito-vidro rounded-[10px] hidden lg:flex items-center justify-between xl:gap-5 text-white ">
              <div className="flex flex-col gap-2">
                {" "}
                <h2 className="text-lg font-bold">Studios Bmouse</h2>
                <p className='text-sm'>
                  Somos especialistas em transformar histórias em obras impactantes!
                </p>
              </div>
              <div>
                <div
                  className="!h-[50px] flex items-center justify-center !w-[50px] rounded-full border  border-white transition-all button-card"
                >
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 !text-black">
                    <path strokeLinecap="round" className='' strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="lg:hidden mt-5 max-w-[90%]">
              <h2 className="text-lg font-bold">Studios Bmouse</h2>
              <p className="text-sm">
                Somos especialistas em transformar histórias em obras impactantes!
              </p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};
