import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCNm2pzGqXt2jzPWM2-TzWOXAXi49ogEkA",
  authDomain: "invoice-app-ae59e.firebaseapp.com",
  projectId: "invoice-app-ae59e",
  storageBucket: "invoice-app-ae59e.appspot.com",
  messagingSenderId: "944262579851",
  appId: "1:944262579851:web:adbfba9ec55864271f368e",
};

initializeApp(firebaseConfig);

// SIGN IN WITH GOOGLE SECTION START
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  //if user data does not exist
  //create / set the document with the data from userAuth

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error crating the user:", error.message);
    }
  }

  //if user data exists
  //return userDocRef
  return userDocRef;
};

export const getInvoiceDoc = async (invoiceId) => {
  const invoiceDocRef = doc(db, "invoices", invoiceId);

  const invoiceSnapshot = await getDoc(invoiceDocRef);
  return invoiceSnapshot.data();
};

export const addCollectionAndDocuments = async function (collectionKey, objectsToAdd) {
  const collectionRef = collection(db, collectionKey);

  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.id);

    batch.set(docRef, object);
  });
  await batch.commit();
};

export const getInvoicesAndDocuments = async function () {
  const collectionRef = collection(db, "invoices");

  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const categoryMap = querySnapshot.docs.reduce(function (sum, docSnapshot) {
    // console.log(docSnapshot.data());
    const data = docSnapshot.data();
    sum[data.id] = data;
    return sum;
  }, {});

  return categoryMap;
};
