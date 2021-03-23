import { useEffect } from 'react';
const useGoogleAuth = () => {
  useEffect(() => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        clientId:
          '792255729562-tjcf5k4uv35et7e3v0e1g2pkmqibpsn8.apps.googleusercontent.com',
      });
    });
  }, []);

  const login = () => {
    return window.gapi.auth2
      .getAuthInstance()
      .signIn()
      .then((user) => {
        const profile = user.getBasicProfile();
        const userData = {
          name: profile.getName(),
          email: profile.getEmail(),
          picture: profile.getImageUrl(),
        };
        return userData;
      })
      .then((res) => res);
  };

  const logout = () => {
    return window.gapi.auth2.getAuthInstance().signOut();
  };

  return { loginWithGoogle: login, logoutWithGoogle: logout };
};

export default useGoogleAuth;
