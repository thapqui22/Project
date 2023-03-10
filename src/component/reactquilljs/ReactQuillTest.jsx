import React, { useRef, useEffect } from "react";
import Quill from "quill";

import "quill/dist/quill.snow.css";

const ReactQuillTest = (props) => {
  const html = props.handleReceiveDataQuillChange.data;
  const quillRef = useRef(null);

  useEffect(() => {
    if (quillRef.current) {
      const quill = new Quill(quillRef.current, {
        readOnly: true,
      });
      quill.clipboard.dangerouslyPasteHTML(html);
    }
  }, [html]);

  return (
    <>
      <div className="container">
        <div className="containerbutton">
          <button className="btn btn-primary mb-2">Publish</button>
          <button className="btn btn-primary mb-2">ComeBack</button>
        </div>
        <div
          className="quill"
          ref={quillRef}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </>
  );
};

export default ReactQuillTest;
