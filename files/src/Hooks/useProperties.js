import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../Config';


const useProperties = (collectionName) => {
  const [propertiesData, setProperties] = useState([]);
  const [isContinue, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const q = collection(db, collectionName);
      const unsubscribe = await onSnapshot(q, (querySnapshot) => {
        const cities = [];
        querySnapshot.forEach((doc) => {
          cities.push({ id: doc.id, ...doc.data() });
        });
        setProperties(cities);
        setIsLoading(false);
      });

      return () => {
        // Clean up the snapshot listener when the component unmounts
        unsubscribe();
      };
    };

    fetchData();
  }, [collectionName]);

  return { propertiesData, isContinue };
};

export default useProperties;
