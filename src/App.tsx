import Dashboard from '@components/Dashboard/Dashboard';
import Popup from '@components/Popup/Popup';
import Routers from '@components/Routers/Routers';
import ScrollButton from '@components/ScrollButton/ScrollButton';
import ScrollView from '@components/ScrollView/ScrollView';
import { Fragment, type FC } from 'react';

const App: FC = () => {
  return (
    <Fragment>
      <Dashboard />
      <Routers />
      <Popup />
      <ScrollView />
      <ScrollButton />
    </Fragment>
  );
}

export default App;
