import { useEffect, type FC } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks/hooks';
import DashItems from './DashItems';
import DashLogoIP from './DashLogoIP';
import DashThemes from './DashThemes';
import { useLocation } from 'react-router-dom';
import { toggleDashLocation } from '@store/features/dashSlice';

const Dashboard: FC = () => {
  const isDash = useAppSelector(state => state.dashboard.value);
  const dispatch = useAppDispatch();

  const location = useLocation();

  // Если ширина экрана <= 768: дашборд выключается:
  useEffect(() => {
    if (window.innerWidth <= 768) {
      dispatch(toggleDashLocation());
    }
  }, [location]);

  return (
    <div className={`dash ${isDash ? 'dash_active' : ''}`}>
      <DashLogoIP />
      <DashItems />
      <DashThemes />
    </div>
  );
}

export default Dashboard;