import { motion } from "framer-motion";
import UseFirestore from "../hooks/UseFirestore";

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = UseFirestore("images");
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImage(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="aploded-pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
