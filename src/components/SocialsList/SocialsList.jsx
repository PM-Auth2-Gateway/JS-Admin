import { Spinner } from 'react-bootstrap';

import SocialPreview from '../SocialPreview/SocialPreview';

const SocialsList = ({ list, loading, error }) => {
  return loading ? (
    <Spinner animation='border' />
  ) : (
    <>
      {list.map(({ id, name, imgUrl }) => (
        <SocialPreview key={id} id={id} name={name} img={imgUrl} />
      ))}
    </>
  );
};

export default SocialsList;
