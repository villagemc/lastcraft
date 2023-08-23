import { useEffect, type FC } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useAppSelector, useAppDispatch } from '@store/hooks/hooks';
import { decrementSite, incrementSite, backwardSite, forwardSite } from '@store/features/siteSlice';

const BanListSite: FC = () => {
  const site = useAppSelector(state => state.site);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const toggleButton = () => {
      dispatch(backwardSite());
      dispatch(forwardSite());
    }

    toggleButton();
  })

  // Кнопка назад:
  const clickBackwardSite = () => {
    if (site.count > 1) {
      dispatch(decrementSite());
    }
  }

  // Кнопка вперед:
  const clickForwardSite = () => {
    const result = Math.ceil(site.total / 20);
    if (site.count < result) {
      dispatch(incrementSite());
    } 
  }

  return (
    <div className="bans__counts">
      <button
        className="bans__button"
        type="button"
        disabled={site.isBackward}
        onClick={clickBackwardSite}
      ><BsArrowLeft />
      </button>
      <span className="bans__count">{site.count}</span>
      <button
        className="bans__button"
        type="button"
        disabled={site.isForward}
        onClick={clickForwardSite}
      ><BsArrowRight />
      </button>
    </div>
  );
}

export default BanListSite;