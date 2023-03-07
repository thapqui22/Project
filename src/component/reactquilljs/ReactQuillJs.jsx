import React from "react";
import { useQuill } from "react-quilljs";
import "./reactquilljs.scss";
import "quill/dist/quill.snow.css";

const ReactQuillJs = () => {
  const { quill, quillRef } = useQuill();

  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
      });
    }
  }, [quill]);

  return (
    <div className="container">
      <div className="childecontainer">
        <div ref={quillRef} />
      </div>
    </div>
  );
};

export default ReactQuillJs;
