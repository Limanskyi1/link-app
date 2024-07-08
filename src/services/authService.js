import { auth } from "../firebase";
import { signInWithEmailAndPassword , createUserWithEmailAndPassword} from "firebase/auth";
import { saveToLocalStorage } from "./localStorage.service";
import fireBaseService from "./fireBaseService";

class AuthService {
  async login(email, password) {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      saveToLocalStorage("user",user);
      return user; 
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      throw new Error(`Error ${errorCode}: ${errorMessage}`);
    }
  }
  async register(email,password){
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;
        saveToLocalStorage("user",user);
        await fireBaseService.setUser(user);
        return user;
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        throw new Error(`Error ${errorCode}: ${errorMessage}`);
      }
  }
}

export default new AuthService();
