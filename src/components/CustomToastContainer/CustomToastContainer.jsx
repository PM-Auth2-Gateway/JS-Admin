import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

const CustomToastContainer = () => (
  <ToastContainer
    position='top-center'
    autoClose={2500}
    hideProgressBar
    newestOnTop={false}
    closeOnClick
    rtl={false}
    draggable
    bodyStyle={{ color: 'black' }}
  />
);

export default CustomToastContainer;
