
import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const CloudinaryScriptContext = createContext();

const CloudinaryUploadWidget = ({ uwConfig, setReviewData, index, reviewData }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Check if the script is already loaded
    if (!loaded) {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        // If not loaded, create and load the script
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "uw");
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
      } else {
        // If already loaded, update the state
        setLoaded(true);
      }
    }
  }, [loaded]);

  const initializeCloudinaryWidget = () => {
    if (loaded) {
      const myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);

            const modifiedReviewData = [...reviewData]
            modifiedReviewData[index].image.push(result.info.secure_url)
            setReviewData(modifiedReviewData);
          }
        }
      );

      document.getElementById("upload_widget").addEventListener(
        "click",
        () => {
          myWidget.open();
        },
        false
      );
    }
  };

  const contextValue = React.useMemo(() => ({ loaded }), [loaded]);

  return (
    <CloudinaryScriptContext.Provider value={contextValue}>
      <button
        type="submit"
        id="upload_widget"
        className="cloudinary-button"
        onClick={initializeCloudinaryWidget}
        style={{
          backgroundColor: "inherit",
          color: "black",
          border: "none",
          fontWeight: "600",
          marginTop: "4px",
          fontSize: "0.9em"
        }}
      >
        Upload Photo
      </button>
    </CloudinaryScriptContext.Provider>
  );
}

CloudinaryUploadWidget.propTypes = {
  uwConfig: PropTypes.object,
  setReviewData: PropTypes.func,
  index: PropTypes.number,
  reviewData: PropTypes.array,
}

export default CloudinaryUploadWidget