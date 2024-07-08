import { doc, setDoc , getDoc, updateDoc} from "firebase/firestore";
import { db ,storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

class FireBaseService {
  async setUser(user) {
    try {
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        id: user.uid,
        links: [],
        avatar: "",
        user_last_name: "",
        user_name: "",
      });
    } catch (error) {
        console.error(error);
    } 
  }
  async getUserData(userId) {
    if(userId){
      try {
        const userDoc = await getDoc(doc(db, "users", userId));
        if (userDoc.exists()) {
          return userDoc.data();
        } else {
          return null;
        }
      } catch (error) {
        console.error("Error getting user data:", error);
      }
    }
    
  }
  async uploadAndUpdateUserAvatar(userId, file) {
    try {
      const storageRef = ref(storage, `${userId}_profile.jpg`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      await uploadTask;
      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        avatar: downloadURL,
      });
      console.log("User avatar uploaded and updated successfully");
      return downloadURL;
    } catch (error) {
      console.error("Error uploading and updating user avatar:", error);
      throw error;
    }
  }
  async updateUserData(userId, data) {
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, data);
      console.log("User details updated successfully");
      return data;
    } catch (error) {
      console.error("Error updating user details:", error);
      throw error;
    }
  }
}


export default new FireBaseService();