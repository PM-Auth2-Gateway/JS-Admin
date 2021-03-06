import { Row, Col } from 'react-bootstrap';
import SocialsList from '../SocialsList/SocialsList';

const AppSocialsInfo = () => {
  return (
    <Row>
      <Col>
        <h4>Social networks</h4>
      </Col>
      <Col>
        <SocialsList />
      </Col>
    </Row>
  );
};

export default AppSocialsInfo;
