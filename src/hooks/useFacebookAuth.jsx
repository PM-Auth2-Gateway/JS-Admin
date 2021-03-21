import { useEffect, useState } from 'react';

export const useFacebookAuth = () => {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '839201246938380',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v10.0',
      });
    };
  }, []);

  const login = () => {
    window.FB.login(() => {
      window.FB.api('/me?fields=id,name,email,picture', (user) => {
        setUser(user);
        setAuthenticated(true);
      });
    });
  };

  const logout = () => {
    window.FB.logout(() => {
      setAuthenticated(false);
    });
  };

  return { login, user, authenticated, logout };
};
