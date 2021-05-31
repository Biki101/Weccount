import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAAVld7M1njYKFDe6oEb_50e5XjF2LuuKM",
  authDomain: "weccount-bc700.firebaseapp.com",
  projectId: "weccount-bc700",
  storageBucket: "weccount-bc700.appspot.com",
  messagingSenderId: "525332505179",
  appId: "1:525332505179:web:a9a3400f67e9aeb7f3957e",
  measurementId: "G-XQSHJ0DJTL",
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const displayName = userAuth.displayName;
    const email = userAuth.email;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

const database = firebase.database(); //gets the database
const membersRef = database.ref("members");

//delete data in firebase
export const removeMember = (memberName) => {
  membersRef.on("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      const childData = childSnapshot.val();
      if (childData.name === memberName) {
        childSnapshot.ref.remove();
      }
    });
  });
};
//get array of members from firebase
export const getMembers = () => {
  const membersList = [];
  membersRef.on("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      const item = childSnapshot.val();
      item.key = childSnapshot.key;
      membersList.push(item);
    });
    console.log(membersList);
  });
  return membersList;
};

//members data to firebase
export const createMember = async (memberCredentials) => {
  //pushing the object to the reference members
  await membersRef.push(memberCredentials);
};

//set members' daily gains
export const setMembersDailyGains = async (name, gain, expense, date) => {
  const dbName = name.replace(/\s/g, "");
  const memberGainsRef = database.ref(`dailyGains/${dbName}/${date}`);
  const gainObj = {
    date: date,
    gain: gain,
    expense: expense,
  };
  await memberGainsRef.push(gainObj);
};

export const db = firebase.firestore();
//get members' daily gains
export const getMembersDailyGains = (name) => {
  const dbName = name.replace(/\s/g, "");
  const memberGainsRef = database.ref(`dailyGains/${dbName}`);
  const gainsList = [];
  try {
    memberGainsRef.on("value", function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        childSnapshot.forEach(function (cchildSnapshot) {
          cchildSnapshot.forEach(function (ccchildSnapshot) {
            const item = ccchildSnapshot.val();
            item.key = ccchildSnapshot.key;
            gainsList.push(item);
          });
        });
      });
      console.log(gainsList);
    });
  } catch (error) {
    console.log(error);
  }
  console.log(gainsList);
  return gainsList;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
