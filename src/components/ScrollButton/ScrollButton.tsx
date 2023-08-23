import { useEffect, useState, type FC } from 'react';
import { IoIosArrowUp } from 'react-icons/io'

const ScrollButton: FC = () => {
  const [isScroll, setIsScroll] = useState(false);

  // Появление иконки для размотки вверх:
  useEffect(() => {
    const toggleScroll = () => {
      window.scrollY > 0
        ? setIsScroll(true)
        : setIsScroll(false)
    }

    window.addEventListener('scroll', toggleScroll);

    return () => {
      window.removeEventListener('scroll', toggleScroll);
    }
  }, []);

  // При клике попадаем наверх страницы:
  const changeScroll = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  } 

  return (
    isScroll ? <div className="scroll-button" onClick={changeScroll}>
      <IoIosArrowUp className="scroll-button__icon" />
    </div> : null
  );
}

export default ScrollButton;