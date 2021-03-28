import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppContext } from '../../contexts/App.context';

import SocialPreview from '../SocialPreview/SocialPreview';

import { loadAllSocials, clearAllSocials } from '../../ducks/socials/all';
import selector from './SocialsList.selector';
import Preloader from '../Preloader/Preloader';

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
    <Preloader />
  ) : (
    <>
      {all.map(({ id, name, logo_path, is_setting, is_active }) => (
        <SocialPreview
          key={id}
          id={id}
          name={name}
          is_setting={is_setting}
          is_active={is_active}
          logo_path={logo_path}
        />
      ))}
    </>
  );
};

export default SocialsList;
