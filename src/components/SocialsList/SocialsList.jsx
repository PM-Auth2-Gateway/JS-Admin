import { Spinner } from 'react-bootstrap';

import SocialPreview from '../SocialPreview/SocialPreview';

const SocialsList = ({ list, loading, error }) => {
  return loading ? (
    <Spinner animation='border' />
  ) : (
    <>
      {list.map(({ id, name, imgUrl, isSetting }) => (
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
