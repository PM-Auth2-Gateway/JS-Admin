import { useEffect } from 'react';

export const useFacebookAuth = () => {
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '839201246938380',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v10.0',
      });
    };
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);

  const login = () =>
    new Promise((resolve) => {
      if (window.FB)
        window.FB.login((res) => {
          if (res.authResponse) {
            window.FB.api('/me?fields=id,name,email,picture', (user) => {
              resolve(user);
            });
          }
        });
    });

  const logout = () =>
    new Promise((resolve) => {
      if (window.FB)
        window.FB.logout(() => {
          resolve();
        });
    });

  return { loginWithFacebook: login, logoutWithFacebook: logout };
};
