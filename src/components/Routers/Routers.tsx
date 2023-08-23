import type { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Shop from './Shop/Shop';
import Rules from './Rules/Rules';
import BanList from './Bans/BanList';

const Routers: FC = () => {
  return (
    <div className="content">
      <Routes>
        <Route path='' element={
          <Shop />
        }/>
        <Route path='rules' element={
          <Rules />
        }/>
        <Route path='banlist' element={
          <BanList />
        }/>
        <Route path='*' element={
          <Navigate to='' /> 
        } />
      </Routes>
    </div>
  );
}

export default Routers;