import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppContext } from '../../contexts/App.context';
import { Spinner } from 'react-bootstrap';

import SocialPreview from '../SocialPreview/SocialPreview';

import { loadAllSocials, clearAllSocials } from '../../ducks/socials/all';
import selector from './SocialsList.selector';

const SocialsList = () => {
  const dispatch = useDispatch();

  const { appId } = useAppContext();
  const { all, loading } = useSelector(selector);

  useEffect(() => {
    dispatch(loadAllSocials(appId));

    return () => {
      dispatch(clearAllSocials());
    };
  }, [dispatch, appId]);

  return loading ? (
    <Spinner animation='border' />
  ) : (
    <>
      {all.map(({ id, name, imgUrl, isSetting }) => (
        <SocialPreview
          key={id}
          id={id}
          name={name}
          isSetting={isSetting}
          img={imgUrl}
        />
      ))}
    </>
  );
};

export default SocialsList;
