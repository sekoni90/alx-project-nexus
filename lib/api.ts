import { doc, setDoc, getDoc, updateDoc, deleteDoc, collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebase';

// Create a document in Firestore
export const createDocument = async (collectionName: string, documentId: string, data: any): Promise<void> => {
  try {
    await setDoc(doc(db, collectionName, documentId), data);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Get a document from Firestore
export const getDocument = async (collectionName: string, documentId: string): Promise<any> => {
  try {
    const docRef = doc(db, collectionName, documentId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      throw new Error('Document not found');
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Update a document in Firestore
export const updateDocument = async (collectionName: string, documentId: string, data: any): Promise<void> => {
  try {
    const docRef = doc(db, collectionName, documentId);
    await updateDoc(docRef, data);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Delete a document from Firestore
export const deleteDocument = async (collectionName: string, documentId: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, collectionName, documentId));
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Get documents from Firestore with query
export const getDocuments = async (collectionName: string, field: string, operator: any, value: any): Promise<any[]> => {
  try {
    const q = query(collection(db, collectionName), where(field, operator, value));
    const querySnapshot = await getDocs(q);
    const documents: any[] = [];
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() });
    });
    return documents;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Add a document to Firestore
export const addDocument = async (collectionName: string, data: any): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    return docRef.id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};