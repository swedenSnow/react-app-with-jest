import {
  firebase,
  googleAuthProvider,
  githubAuthProvider,
} from '../firebase/firebase';

export const login = uid => ({
  type: 'LOGIN',
  uid,
});

export const startLogin = () => {
  return () => {
    return firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(result => {
        const token = result.credential.accessToken;
        const user = result.user;
      })
      .catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        if (errorCode === 'auth/account-exists-with-different-credential') {
          alert('You have signed up with a different provider for that email.');
        } else {
          console.error('Something went wrong', error);
        }
      });
  };
};

export const startLoginGit = () => {
  return () => {
    return firebase
      .auth()
      .signInWithPopup(githubAuthProvider)
      .then(result => {
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
      })
      .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        if (errorCode === 'auth/account-exists-with-different-credential') {
          alert('You have signed up with a different provider for that email.');
          // Handle linking here if your app allows it.
        } else {
          console.error('Something went wrong', error);
        }
      });
  };
};

export const logout = () => ({
  type: 'LOGOUT',
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
