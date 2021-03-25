import { Row, Col } from 'react-bootstrap';
import SocialsList from '../SocialsList/SocialsList';

const AppSocialsInfo = ({ socials, loading, error }) => {
  return (
    <Row>
      <Col>
        <h4>Social networks</h4>
      </Col>
      <Col>
        <SocialsList list={socials} loading={loading} error={error} />
      </Col>
    </Row>
  );
};

export default AppSocialsInfo;
