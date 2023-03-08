import React, { useEffect } from "react";
import { useQuill } from "react-quilljs";
import ReactQuill, { Quill } from "react-quill";
import "./reactquilljs.scss";
import ImageResize from "quill-image-resize-module-react";
import ImageCompress from "quill-image-compress";
import "quill/dist/quill.snow.css";

const ReactQuillJs = () => {
  const { quill, quillRef } = useQuill();
  Quill.register("modules/ImageResize", ImageResize);
  Quill.register("modules/imageCompress", ImageCompress);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      [{ align: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ color: [] }, { background: [] }],
      ["link", "image", "video"],
    ],
    ImageResize: {
      modules: ["Resize", "DisplaySize"],
    },

    imageCompress: {
      quality: 0.7, // default
      maxWidth: 1000, // default
      maxHeight: 1000, // default
      imageType: "image/jpeg", // default
      debug: true, // default
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "align",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "color",
    "background",
    "link",
    "image",
    "video",
  ];
  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
      });
    }
  }, [quill]);
  const handleDataChange = (data) => {
    console.log(data);
  };
  return (
    <div className="container">
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={""}
        onChange={(e) => handleDataChange(e)}
      />
    </div>
  );
};

export default ReactQuillJs;
