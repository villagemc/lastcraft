import { Fragment, type FC } from 'react';
import Header from '@components/Routers/Header/Header';
import BanListItems from './BanListItems';
import BanListSite from './BanListSite';

const BanList: FC = () => {
  return (
    <Fragment>
      <Header title="Бан-лист"/>
      <div className="bans">
        <BanListItems />
        <BanListSite />
      </div>
    </Fragment>
  );
}

export default BanList;