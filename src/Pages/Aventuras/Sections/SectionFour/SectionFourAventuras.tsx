import gioAventuras from '../.././../../assets/images/Aventuras/SectionFour/gioAventuras.webp'
import patenseAventuras from '../.././../../assets/images/Aventuras/SectionFour/patenseAventuras.webp'
import agroAventuras from '../.././../../assets/images/Aventuras/SectionFour/agroAventuras.webp'
import olharAventuras from '../.././../../assets/images/Aventuras/SectionFour/olharAventuras.webp'

import domd from '../.././../../assets/images/Aventuras/SectionFour/bomd+Aventuras.webp'

import morgoAventuras from '../.././../../assets/images/Aventuras/SectionFour/morgoAventuras.webp'
import cardealAventuras from '../.././../../assets/images/Aventuras/SectionFour/cardealAventuras.webp'
import zoomiesAventuras from '../.././../../assets/images/Aventuras/SectionFour/zoomiesAventuras.webp'
import cultivandoAventuras from '../.././../../assets/images/Aventuras/SectionFour/cultivandoAventuras.webp'

export default function SectionFour(){

    return (
      <section className="container px-5 lg:px-10 xl:px-20 py-10 pb-20 mx-auto">
        <div className="flex flex-col md:flex-row gap-5 md:gap-0">
          <a 
            href=""
            className='w-1/3'
          >
            <img 
              src={gioAventuras}
              alt="" 
              className="w-full"
            />
          </a>
          

          <a 
            href=""
            className='w-1/3'
          >
            <img 
              src={patenseAventuras}
              alt="" 
              className="w-full"
            />
          </a>


          <div className='w-1/3 flex flex-col gap-5 md:gap-0'>
            <a 
              href=""
              className=''
            >
              <img 
                src={agroAventuras}
                alt="" 
                className=""
              />
            </a>
            

            <a 
              href=""
              className=''
            >
              <img 
                src={olharAventuras}
                alt="" 
                className=""
              />
            </a>
            
          </div>
        </div>

        <a 
          href=""
          className='w-1/3'
        >
          <img 
            src={domd}
            alt="" 
            className="w-full"
          />
        </a>
        

        <div className="flex flex-col md:flex-row-reverse gap-5 md:gap-0">
          <a 
            href=""
            className='w-1/3'
          >
            <img 
              src={zoomiesAventuras}
              alt="" 
              className=""
            />
          </a>
          

          <a 
            href=""
            className='w-1/3'
          >
            <img 
              src={cultivandoAventuras}
              alt="" 
              className=""
            />
          </a>
          

          <div className='w-1/3 flex flex-col gap-5 md:gap-0'>
            <a 
              href=""
              className=''
            >
              <img 
                src={morgoAventuras}
                alt="" 
                className="w-full"
              />
            </a>
            

            <a 
              href=""
              className=''
            >
              <img 
                src={cardealAventuras}
                alt="" 
                className="w-full"
              />
            </a>
            
          </div>
        </div>
      </section>
    )
}