import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../Config';

const useEnquiryForm = (collectionName) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [documentId, setDocumentId] = useState(null);

  const submitEnquiryForm = async (enquiryData) => {
    setIsSubmitting(true);
    setError(null);
    setDocumentId(null);

    try {
      const docRef = await addDoc(collection(db, collectionName), enquiryData);
      setDocumentId(docRef.id);
    } catch (error) {
      setError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, error, documentId, submitEnquiryForm };
};

export default useEnquiryForm;
