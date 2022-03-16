import { initializeApp } from 'firebase/app';
import { connectDatabaseEmulator, getDatabase, onValue, ref, set } from 'firebase/database';
import { useState, useEffect } from 'react';
import { connectAuthEmulator, getAuth, GoogleAuthProvider, onIdTokenChanged, signInWithPopup, signOut, signInWithCredential } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const database = getDatabase(firebase);

if (window.Cypress) {
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
  connectDatabaseEmulator(database, "127.0.0.1", 9000);

  signInWithCredential(auth, GoogleAuthProvider.credential(
    '{"sub": "urdPpjEZjQDKdHFYvtoauwKHyQbc", "email": "spot2937@gmail.com", "email_verified": true}'
 ));
}

export const useData = (path, transform) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
  
    useEffect(() => {
      const dbRef = ref(database, path);
     // const devMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
  
      return onValue(dbRef, (snapshot) => {
        const val = snapshot.val();
       
        setData(transform ? transform(val) : val);
        setLoading(false);
        setError(null);
      }, (error) => {
        setData(null);
        setLoading(false);
        setError(error);
      }, {
        onlyOnce: false
      });
    }, [path, transform]);
    
    return [data, loading, error];
  };


  export const setData = (path, value) => (
    set(ref(database, path), value)
  );


  export const pushToFirebase = async (route, userid, data) => {
    if (data) {
      try {
        await setData(`users/${userid}/info/${route}`, data);
    
      } catch (error) {
        alert(error);
      }
    }
  };

  export const changeAvaliability = async (StationID, avaliable) =>
  {
    try{
      await setData("Locations/"+StationID+"/avaliable", avaliable);
      }catch(error)
      {
       alert(error);
      }
  }

  export const useUserState = () => {
    const [user, setUser] = useState();
    useEffect(() => {
      onIdTokenChanged(getAuth(firebase), setUser);
    }, []); 


      
    return user;
  };
  
  export const signInWithG = () => {
    signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
  };

  export const signOutOfG = () => signOut(getAuth(firebase));

