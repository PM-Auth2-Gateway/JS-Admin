import { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useAppContext } from '../../contexts/App.context';
import SocialsList from '../SocialsList/SocialsList';

import { loadAllSocials, clearAllSocials } from '../../ducks/socials/all';

import selector from './AppSocialsInfo.selector';

const AppSocialsInfo = () => {
  const dispatch = useDispatch();

  const { appId } = useAppContext();
  const socials = useSelector(selector);

  useEffect(() => {
    dispatch(loadAllSocials(appId));

    return () => {
      dispatch(clearAllSocials());
    };
  }, [dispatch, appId]);

  return (
    <Row>
      <Col>
        <h4>Social networks</h4>
      </Col>
      <Col>
        <SocialsList
          list={socials.all}
          loading={socials.loading}
          error={socials.error}
        />
      </Col>
    </Row>
  );
};

export default AppSocialsInfo;
