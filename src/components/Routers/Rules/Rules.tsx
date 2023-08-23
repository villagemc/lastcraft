import { Fragment, type FC } from 'react';
import Header from '@components/Routers/Header/Header';
import RulesItems from './RulesItems';

const Rules: FC = () => {
  return (
    <Fragment>
      <Header title="Правила" />
      <div className="rules">
        <RulesItems />
      </div>
    </Fragment>
  );
}
export default Rules;