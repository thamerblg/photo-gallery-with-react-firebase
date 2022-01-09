import { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadFile = () => {
  // eslint-disable-next-line
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const hundelChange = (e) => {
    let selected = e.target.files[0];
    const typesImage = ["image/png", "image/gif", "image/jpeg"];
    if (selected && typesImage.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image type png, gif or jpeg");
    }
  };
  return (
    <form>
      <label>
        <input type="file" accept="image/*" onChange={hundelChange} />
        <span>Add a new image</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="file">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadFile;
