import { motion } from "framer-motion";

const Modal = ({ selectedImage, setSelectedImage }) => {
  const hundelClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImage(null);
    }
  };
  return (
    <motion.div
      className="backdrop"
      onClick={hundelClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImage}
        alt="selectedImg"
        initial={{ y: "-100vh" }}
        animate={{ y: "0" }}
      />
    </motion.div>
  );
};

export default Modal;
