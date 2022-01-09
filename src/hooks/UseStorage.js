import { useEffect, useState } from "react";
import {
  projectFirestore,
  projectStorage,
  timestamp,
} from "../firebase/config";

// hundling ours files-upload and return some useful-values about the upload such as upload-progress, error and image-url after uploading

const UseStorage = (file) => {
  const [progress, setProgress] = useState(0); // Represent the progress of the upload
  const [error, setError] = useState(null); // Represent the error coming through of the upload
  const [url, setUrl] = useState(null); // The image-url that come from storage after the image has been uploaded

  // that function will run every time when the file has been changed
  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images");

    storageRef
      .put(file) // asynchrone, it take some time to do
      .on(
        "state_changed",
        (snap) => {
          // time to upload the file
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percentage);
        },
        (err) => {
          setError(err);
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          const createdAt = timestamp();
          collectionRef.add({ url, createdAt });
          setUrl(url);
        }
      );
  }, [file]);
  return { progress, error, url };
};

export default UseStorage;
