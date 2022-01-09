import { motion } from "framer-motion";
import { useEffect } from "react";
import UseStorage from "../hooks/UseStorage";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = UseStorage(file);
  //console.log(progress, url);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  return (
    <motion.div
      className="progress-bar" /*style={{ width: progress + "%" }}*/
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};

export default ProgressBar;
