/* ---------------------------------------- */
/* || FIREBASE API - V.3.0 ||
/*
/* Last update: 02 04 2023
/* By Daniel Izef Barreto Tejada

/* AUTH CORE API FUNTIONS
    - signUpSingleUserOnAuthByEmailAndPassword (userEmail, userPassword)
    - signInSingleUserOnAuthByEmailAndPassword (userEmail, userPassword)
    - signOutSingleUserOnAuth ()
    - deleteThisSingleUserOnAuth ()


/* FIRESTORE CORE API FUNTIONS
-> CREATE
    - createSingleUserProfileOnFirestoreByUserProfileDocument (userProfileDocument)
    - createSingleUserFileOnFirestoreByUserFileDocument (userFileDocument)

-> READ
    - readSingleUserProfileFromFirestoreByUserEmail (userEmail)
    - readSingleUserProfileFromFirestoreByUserProfileID (userProfileID)
    - readAllUserProfilesFromFirestoreForAdmin ()

    - readSingleUserFileFromFirestoreByUserFileID (userFileID)
    - readAllUserFilesFromFirestoreByUserProfileID (userProfileID)
    - readAllUserFilesFromFirestoreByUserEmail (userEmail)
    - readAllUserFilesFromFirestoreForAdmin ()

-> UPDATE
    - updateSingleUserProfileOnFirestoreByUserProfileIDAndUpdateDocument (userProfileID, updateDocument)

    - updateSingleUserFileOnFirestoreByUserFileIDAndUpdateDocument (userFileID, updateDocument)

-> DELETE
    - deleteSingleUserProfileOnFirestoreByUserProfileID (userProfileID)

    - deleteSingleUserFileOnFirestoreByUserFileID (userFileID)


/* STORAGE CORE API FUNTIONS
    - uploadSingleImageToStorageByImageAttachment (imageAttachment, compressSize)

    - getSingleImageURLFromStorageByImageID (imageID)

    - deleteSingleImageOnStorageByImageID (imageID)


/* DOCUMENT SAMPLE
    - USER PROFILE
    {
        email: "@"
        fist:
        last:
        bird:
    }

    - USER FILE
    {
        ownerid: 
        name:
        description:
        images: [imageid, imageid]
    }

*/

/* ---------------------------------------- */
/* || LIBRARY IMPORTS || */

import { auth } from "./firebaseConfig";
import { db } from "./firebaseConfig";
import { storage } from "./firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  deleteUser,
} from "firebase/auth";
import {
  addDoc,
  collection,
  query,
  where,
  doc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { v4 } from "uuid";

/* ---------------------------------------- */

// Connection Test.
export const connection = () => {
  console.log("Firebase API v3.0 connected.");
};

/* ---------------------------------------- */
/* AUTH CORE API FUNTIONS */

/**
 * Sign up a single user on Firebase Auth using email and password.
 * @param {string} userEmail
 * @param {string} userPassword
 * @returns {object} userCredential {object}.
 * @version 3.0
 */
export const signUpSingleUserOnAuthByEmailAndPassword = async (
  userEmail,
  userPassword
) => {
  /* Input validation */
  if (userEmail === null || typeof userEmail !== "string") {
    console.log("userEmail is invalid.");
    return;
  }
  if (userPassword === null || typeof userPassword !== "string") {
    console.log("userPassword is invalid.");
    return;
  }

  /* Execution */
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userEmail,
      userPassword
    );
    //console.log(userCredential);
    return userCredential;
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * Sign in a single user on Firebase Auth using email and password.
 * @param {string} userEmail
 * @param {string} userPassword
 * @returns {object} firebaseUser {object}.
 * @version 3.0
 */
export const signInSingleUserOnAuthByEmailAndPassword = async (
  userEmail,
  userPassword
) => {
  /* Input validation */
  if (userEmail === null || typeof userEmail !== "string") {
    console.log("userEmail is invalid.");
    return;
  }
  if (userPassword === null || typeof userPassword !== "string") {
    console.log("userPassword is invalid.");
    return;
  }

  /* Execution */
  try {
    const firebaseUser = await signInWithEmailAndPassword(
      auth,
      userEmail,
      userPassword
    );
    console.log(firebaseUser);
    return firebaseUser;
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * Sign out a single user on Firebase Auth.
 * @version 3.0
 */
export const signOutSingleUserOnAuth = async () => {
  /* Execution */
  try {
    await signOut(auth);
    console.log("Signed out succesfully.");
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * Delete this single user on Firebase Auth.
 * @version 3.0
 */
export const deleteThisSingleUserOnAuth = async () => {
  /* Local variables */
  const auth = getAuth();
  const user = auth.currentUser;

  /* Execution */
  try {
    await deleteUser(user);
    console.log("User deleted from Auth.");
  } catch (error) {
    console.log(error.message);
  }
};

/* ---------------------------------------- */
/* FIRESTORE CORE API FUNTIONS */

/* -> CREATE */

/**
 * Create a single user profile on Firebase Firestore using a user profile document.
 * @param {object} userProfileDocument
 * @returns {string} Document ID {string}.
 * @version 3.0
 */
export const createSingleUserProfileOnFirestoreByUserProfileDocument = async (
  userProfileDocument
) => {
  /* Input validation */
  if (userProfileDocument === null || typeof userProfileDocument !== "object") {
    console.log("userProfileDocument is invalid.");
    return;
  }

  /* Execution */
  try {
    const docRef = await addDoc(collection(db, "users"), userProfileDocument);
    //console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

/**
 * Create a single user file on Firebase Firestore using a user file document.
 * @param {object} userFileDocument
 * @returns {string} Document ID {string}.
 * @version 3.0
 */
export const createSingleUserFileOnFirestoreByUserFileDocument = async (
  userFileDocument
) => {
  /* Input validation */
  if (userFileDocument === null || typeof userFileDocument !== "object") {
    console.log("userFileDocument is invalid.");
    return;
  }

  /* Execution */
  try {
    const docRef = await addDoc(collection(db, "files"), userFileDocument);
    //console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

/* -> READ */

/**
 * Read a single user profile on Firebase Firestore using userEmail.
 * @param {string} userEmail
 * @returns {object} userProfile {object}.
 * @version 3.0
 */
export const readSingleUserProfileFromFirestoreByUserEmail = async (
  userEmail
) => {
  /* Input validation */
  if (userEmail === null || typeof userEmail !== "string") {
    console.log("userProfileDocument is invalid.");
    return;
  }

  /* Local variables */
  const q = query(
    collection(db, "users"),
    where("email", "==", String(userEmail))
  );
  let userProfile;

  /* Execution */
  try {
    // Send request.
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // Set last response.
      userProfile = doc.data(doc);
      // Adding user id to an object.
      userProfile.id = doc.id;
      //console.log(doc.id);
    });
    //console.log("Document data:", userProfile);
    return userProfile;
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * Read a single user profile on Firebase Firestore using userProfileID.
 * @param {string} userProfileID
 * @returns {object} userProfile {object}.
 * @version 3.0
 */
export const readSingleUserProfileFromFirestoreByUserProfileID = async (
  userProfileID
) => {
  /* Input validation */
  if (userProfileID === null || typeof userProfileID !== "string") {
    console.log("userProfileID is invalid.");
    return null;
  }

  /* Local variables */
  const docID = userProfileID;
  const docRef = doc(db, "users", docID);
  let userProfile;

  /* Execution */
  try {
    // Send request.
    let querySnapshot = await getDoc(docRef);
    // Check if exists the document.
    if (querySnapshot.exists()) {
      //console.log("Document raw data:", querySnapshot.data());
      // Adding user id to an object.
      userProfile = querySnapshot.data();
      userProfile.id = userProfileID;
      //console.log("Document data:", userProfile);
      // Return the response.
      return userProfile;
    } else {
      // doc.data() will be undefined in this case.
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * Read all user profiles on Firebase Firestore for admin.
 * @returns {array} userProfiles {array}.
 * @version 3.0
 */
export const readAllUserProfilesFromFirestoreForAdmin = async () => {
  /* Execution */
  try {
    // Request
    const querySnapshot = await getDocs(collection(db, "users"));
    //console.log(querySnapshot.docs);
    let userProfiles = [];
    querySnapshot.forEach((doc) => {
      //console.log(Object.values(doc.data(doc)));
      userProfiles.push(doc.data(doc));
    });
    // Return
    //console.log(userProfiles);
    return userProfiles;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

//--

/**
 * Read a single user file on Firebase Firestore using userFileID.
 * @param {string} userFileID
 * @returns {object} userFile {object}.
 * @version 3.0
 */
export const readSingleUserFileFromFirestoreByUserFileID = async (
  userFileID
) => {
  /* Input validation */
  if (userFileID === null || typeof userFileID !== "string") {
    console.log("userFileID is invalid.");
    return null;
  }

  /* Local variables */
  const docID = userFileID;
  const docRef = doc(db, "files", docID);
  let userFile;

  /* Execution */
  try {
    // Send request.
    let querySnapshot = await getDoc(docRef);
    // Check if exists the document.
    if (querySnapshot.exists()) {
      //console.log("Document raw data:", querySnapshot.data());
      // Adding user id to an object.
      userFile = querySnapshot.data();
      //console.log("Document data:", userFile);
      // Adding user id to an object.
      userFile.id = doc.id;
      //console.log(doc.id);
      // Return the response.
      return userFile;
    } else {
      // doc.data() will be undefined in this case.
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * Read all user files on Firebase Firestore using userProfileID.
 * @param {string} userProfileID
 * @returns {array} userFiles {array}.
 * @version 3.0
 */
export const readAllUserFilesFromFirestoreByUserProfileID = async (
  userProfileID
) => {
  /* Input validation */
  if (userProfileID === null || typeof userProfileID !== "string") {
    console.log("userProfileID is invalid.");
    return null;
  }

  /* Local variables */
  const q = query(
    collection(db, "files"),
    where("ownerid", "==", String(userProfileID))
  );
  let userFiles = [];

  /* Execution */
  try {
    // Request
    const querySnapshot = await getDocs(q);
    // Adding into array.
    querySnapshot.forEach((doc) => {
      //console.log(Object.values(doc.data(doc)));
      const userFile = doc.data();
      userFile.id = doc.id;
      //console.log(userFile)
      userFiles.push(userFile);
    });
    // Return.
    //console.log(userFiles);
    return userFiles;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

/**
 * Read all user files on Firebase Firestore using userEmail.
 * @param {string} userFileID
 * @returns {array} userFiles {array}.
 * @version 3.0
 */
export const readAllUserFilesFromFirestoreByUserEmail = async (userEmail) => {
  /* Input validation */
  if (userEmail === null || typeof userEmail !== "string") {
    console.log("userEmail is invalid.");
    return null;
  }

  /* Execution */
  // Searching user profile by email
  const userProfile = await readSingleUserProfileFromFirestoreByUserEmail(
    userEmail
  );
  //console.log(userProfile);
  if (userProfile !== undefined) {
    //console.log(userProfile.id);
    // Searching user files by user profile id
    const userFiles = await readAllUserFilesFromFirestoreByUserProfileID(
      userProfile.id
    );
    // Return
    console.log(userFiles);
    return userFiles;
  }
};

/**
 * Read all user files on Firebase Firestore for admin.
 * @returns {array} userFiles {array}.
 * @version 3.0
 */
export const readAllUserFilesFromFirestoreForAdmin = async () => {
  /* Execution */
  try {
    // Request
    const querySnapshot = await getDocs(collection(db, "files"));
    //console.log(querySnapshot.docs);
    let userFiles = [];
    querySnapshot.forEach((doc) => {
      //console.log(Object.values(doc.data(doc)));
      userFiles.push(doc.data(doc));
    });
    // Return
    //console.log(userFiles);
    return userFiles;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

/* -> UPDATE */

/**
 * Update a single user profile on Firebase Firestore by an user profile id and an update document.
 * @param {string} userProfileID
 * @param {object} updateDocument
 * @returns {object} userProfile (Updated)
 */
export const updateSingleUserProfileOnFirestoreByUserProfileIDAndUpdateDocument =
  async (userProfileID, updateDocument) => {
    /* Input validation */
    if (userProfileID === null || typeof userProfileID !== "string") {
      console.log("userProfileID is invalid.");
      return null;
    }
    if (updateDocument === null || typeof updateDocument !== "object") {
      console.log("updateDocument is invalid.");
      return null;
    }

    /* Local variables */
    const docID = userProfileID;
    const docRef = doc(db, "users", docID);

    /* Execution */
    try {
      // Send request.
      let querySnapshot = await getDoc(docRef);
      // Check if exists the document.
      if (querySnapshot.exists()) {
        //console.log("Document data:", querySnapshot.data());
        // Make the update with a new object.
        await updateDoc(docRef, updateDocument);
        // Refreshing the query with the updated document.
        querySnapshot = await getDoc(docRef);
        //console.log("Document data:", querySnapshot.data());
        // Return the response.
        return querySnapshot.data();
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

/**
 * Update a single user file on Firebase Firestore by an user file id and an update document.
 * @param {string} userFileID
 * @param {object} updateDocument
 * @returns {object} userFile (Updated)
 */
export const updateSingleUserFileOnFirestoreByUserFileIDAndUpdateDocument =
  async (userFileID, updateDocument) => {
    /* Input validation */
    if (userFileID === null || typeof userFileID !== "string") {
      console.log("userFileID is invalid.");
      return null;
    }
    if (updateDocument === null || typeof updateDocument !== "object") {
      console.log("updateDocument is invalid.");
      return null;
    }

    /* Local variables */
    const docID = userFileID;
    const docRef = doc(db, "files", docID);

    /* Execution */
    try {
      // Send request.
      let querySnapshot = await getDoc(docRef);
      // Check if exists the document.
      if (querySnapshot.exists()) {
        //console.log("Document data:", querySnapshot.data());
        // Make the update with a new object.
        await updateDoc(docRef, updateDocument);
        // Refreshing the query with the updated document.
        querySnapshot = await getDoc(docRef);
        // Return
        //console.log("Document data:", querySnapshot.data());
        return querySnapshot.data();
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

/* -> DELETE */

/**
 * Delete a single user profile on Firebase Firestore by an user profile id.
 * @param {string} userProfileID
 */
export const deleteSingleUserProfileOnFirestoreByUserProfileID = async (
  userProfileID
) => {
  /* Input validation */
  if (userProfileID === null || typeof userProfileID !== "string") {
    console.log("userProfileID is invalid.");
    return null;
  }

  /* Local variables */
  const docID = userProfileID;
  const docRef = doc(db, "users", docID);

  /* Execution */
  try {
    // Send request.
    let querySnapshot = await getDoc(docRef);
    // Check if exists the document.
    if (querySnapshot.exists()) {
      //console.log("Document data:", querySnapshot.data());
      // Delete doc.
      await deleteDoc(docRef);
      // Return
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (error) {
    console.log(error.message);
  }
};

//--

/**
 * Delete a single user file on Firebase Firestore by an user file id.
 * @param {string} userFileID
 */
export const deleteSingleUserFileOnFirestoreByUserFileID = async (
  userFileID
) => {
  /* Input validation */
  if (userFileID === null || typeof userFileID !== "string") {
    console.log("userProfileID is invalid.");
    return null;
  }

  /* Local variables */
  const docID = userFileID;
  const docRef = doc(db, "files", docID);

  /* Execution */
  try {
    // Send request.
    let querySnapshot = await getDoc(docRef);
    // Check if exists the document.
    if (querySnapshot.exists()) {
      //console.log("Document data:", querySnapshot.data());
      // Delete doc.
      await deleteDoc(docRef);
      // Return
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (error) {
    console.log(error.message);
  }
};

/* ---------------------------------------- */
/* STORAGE CORE API FUNTIONS */

/**
 * Upload a single image URL from Firebase Storage using imageAttachment and return the Download URL.
 * @param {string} imageAttachment
 * @returns {string} imageID {string}
 * @version 3.0
 */
export const uploadSingleImageToStorageByImageAttachment = async (
  imageAttachment
) => {
  /* Input validation */
  if (imageAttachment === null || imageAttachment === "undefined") {
    console.log("imageAttachment is invalid.");
    return;
  }

  /* Local variables */
  const imageID = v4();
  const imageRef = ref(storage, `images/${imageID}`);

  /* Execution */
  try {
    await uploadBytes(imageRef, imageAttachment);
    //const uploadResult = await uploadBytes(imageRef, imageAttachment);
    //const resultURL = await getDownloadURL(uploadResult.ref);
    //console.log("Image saved in:", resultURL);
    console.log("Image ID: ", imageID);
    // Return
    return imageID;
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * Get a single image URL from Firebase Storage using ImageID.
 * @param {string} imageID
 * @returns {string} imageURL {string}
 * @version 3.0
 */
export const getSingleImageURLFromStorageByImageID = async (imageID) => {
  /* Input validation */
  if (imageID === null || imageID === "string") {
    console.log("imageID is invalid.");
    return;
  }

  /* Local variables */
  const pathReference = ref(storage, `images/${imageID}`);

  /* Execution */
  try {
    const resultURL = await getDownloadURL(pathReference);
    console.log("Image URL: ", resultURL);
    // Return
    return resultURL;
  } catch (error) {
    console.log(error.message);
  }

  /*  try {
    await getDownloadURL(pathReference).then((resultURL) => {
      console.log("Image URL: ", resultURL);
      return resultURL;
    });
  } catch (error) {
    console.log(error.message);
  }*/
};

/**
 * Delete a single image from Firebase Storage using ImageID.
 * @param {string} imageID
 * @version 3.0
 */
export const deleteSingleImageOnStorageByImageID = async (imageID) => {
  /* Input validation */
  if (imageID === null || imageID === "string") {
    console.log("imageID is invalid.");
    return;
  }

  /* Local variables */
  const pathReference = ref(storage, `images/${imageID}`);

  /* Execution */
  try {
    await deleteObject(pathReference);
    console.log("Image deleted.");
  } catch (error) {
    console.log(error.message);
  }
};
