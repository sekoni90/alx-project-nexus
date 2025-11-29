// lib/auth.ts
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail as sendPasswordResetEmailFirebase,
  confirmPasswordReset as confirmPasswordResetFirebase,
  applyActionCode,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  User,
} from 'firebase/auth';
import { auth } from './firebase';

// Register user with email and password
export const registerUser = async (email: string, password: string): Promise<User> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Sign in user with email and password
export const signInUser = async (email: string, password: string): Promise<User> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Sign in with Google
export const signInWithGoogle = async (): Promise<User> => {
  try {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    return userCredential.user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Sign in with GitHub
export const signInWithGithub = async (): Promise<User> => {
  try {
    const provider = new GithubAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    return userCredential.user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Sign in with Facebook
export const signInWithFacebook = async (): Promise<User> => {
  try {
    const provider = new FacebookAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    return userCredential.user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Send password reset email
export const sendPasswordResetEmail = async (email: string): Promise<void> => {
  try {
    await sendPasswordResetEmailFirebase(auth, email);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Confirm password reset
export const confirmPasswordReset = async (code: string, newPassword: string): Promise<void> => {
  try {
    await confirmPasswordResetFirebase(auth, code, newPassword);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Verify email
export const verifyEmail = async (code: string): Promise<void> => {
  try {
    await applyActionCode(auth, code);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Sign out user
export const signOutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

