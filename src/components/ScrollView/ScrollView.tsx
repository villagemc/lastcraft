import { useEffect, type FC } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollView: FC= () => {
  const location = useLocation();

  // При нажатии на ссылку переводит наверх страницы:
  useEffect(() => {
    window.scroll({
      top: 0
    });
  }, [location]);

  return null;
}

export default ScrollView;