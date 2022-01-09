import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

const UseFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore // in order to lising to the document inside the collection
      .collection(collection) // get the collection from firestore
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        // listing to the realtime data update every time an image was addet to the database
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    return () => unsub();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts}
  }, [collection]);
  return { docs };
};

export default UseFirestore;
