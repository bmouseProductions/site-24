import { useEffect, useState } from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BackToTop() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsSticky(true);
        document.querySelector('#backTop')?.classList.remove('hidding');
      } else {
        setIsSticky(false);
        document.querySelector('#backTop')?.classList.add('hidding');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id='backTop' className={`fixed left-[27px] bottom-20 z-40 ${isSticky ? '' : 'hidding'}`}>
      <button
        className='flex justify-center items-center rounded-full py-[10px] px-[14px] bg-[#00c8ff]  shadow-[0px_0px_5px_#5404da]'
        onClick={handleBackToTop}
      >
        <FontAwesomeIcon icon={faArrowUp} className='text-[25px] text-white' />
      </button>
    </div>
  );
}
