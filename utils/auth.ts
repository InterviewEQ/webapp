import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup,
    UserCredential
  } from "firebase/auth";
  import { auth } from "@/utils/firebase";  // Assuming firebase.ts is in the same folder as auth.ts
  
  interface AuthResult {
    success: boolean;
    userCredential?: UserCredential;
    error?: string;
  }
  
  // Function to sign up with email and password
  export const emailSignup = async (email: string, password: string): Promise<AuthResult> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return { success: true, userCredential };
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error signing up with email and password:", error);
        return { success: false, error: error.message };
      }
      return { success: false, error: 'An unknown error occurred.' };
    }
  };
  
  // Function to login with email and password
  export const emailLogin = async (email: string, password: string): Promise<AuthResult> => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return { success: true, userCredential };
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error signing in with email and password:", error);
        return { success: false, error: error.message };
      }
      return { success: false, error: 'An unknown error occurred.' };
    }
  };
  
  // Function to login with Google
  export const googleLogin = async (): Promise<AuthResult> => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      return { success: true, userCredential };
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error signing in with Google:", error);
        return { success: false, error: error.message };
      }
      return { success: false, error: 'An unknown error occurred.' };
    }
  };
  