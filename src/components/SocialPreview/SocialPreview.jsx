import { Badge, ButtonGroup, Card } from 'react-bootstrap';

import styles from './SocialPreview.module.scss';
import SocialModal from '../SocialModal/SocialModal';
import DeleteSocialModal from '../DeleteSocialModal/DeleteSocialModal';

const SocialPreview = ({ id, name, isSetting }) => {
  return (
    <Card className={styles.card}>
      <Card.Body>
        <Card.Title className={styles.socialPreview}>
          <img className={styles.appIcon} alt='icon' />
          <p>{name}</p>
        </Card.Title>
        <Card.Text className={'text-muted'}>
          Allow your users to login with their {name} Account
        </Card.Text>
        <Badge variant={isSetting ? 'success' : 'info'}>
          {isSetting ? 'Active' : 'Disabled'}
        </Badge>
        <ButtonGroup>
          <SocialModal id={id} mode={isSetting ? 'update' : 'create'} />
          {isSetting && <DeleteSocialModal id={id} />}
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default SocialPreview;
