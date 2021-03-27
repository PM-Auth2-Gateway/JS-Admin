import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const BackButton = () => {
  const history = useHistory();
  return (
    <Button variant='secondary' onClick={history.goBack}>
      Back
    </Button>
  );
};

export default BackButton;
