import { useDispatch } from 'react-redux';
import { Badge, ButtonGroup, Card, Button } from 'react-bootstrap';

import SocialModal from '../SocialModal/SocialModal';
import { useAppContext } from '../../contexts/App.context';

import { updateSocialStatusById } from '../../ducks/socials/all';
import styles from './SocialPreview.module.scss';

const SocialPreview = ({ id, name, logo_path, is_setting, is_active }) => {
  const dispatch = useDispatch();

  const { appId } = useAppContext();

  const updateStatus = () => {
    dispatch(
      updateSocialStatusById(appId, id, {
        status: !is_active,
      })
    );
  };

  return (
    <Card className={styles.card}>
      <Card.Body>
        <Card.Title className={styles.socialPreview}>
          <div className={styles.socialTitle}>
            <img src={logo_path} className={styles.appIcon} alt='icon' />
            <p>{name}</p>
          </div>
          <Badge
            variant={
              is_setting ? (is_active ? 'success' : 'info') : 'secondary'
            }
          >
            {is_setting ? (is_active ? 'Active' : 'Disabled') : 'None'}
          </Badge>
        </Card.Title>
        <Card.Text className={'text-muted'}>
          Allow your users to login with their {name} Account
        </Card.Text>
        <ButtonGroup>
          <SocialModal id={id} mode={is_setting ? 'update' : 'create'} />
          {is_setting && (
            <Button variant='info' type='button' onClick={updateStatus}>
              {is_active ? 'Disable' : 'Active'}
            </Button>
          )}
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default SocialPreview;
