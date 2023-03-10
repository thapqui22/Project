import React, { useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "./reactquilljs.scss";
import ImageResize from "quill-image-resize-module-react";
import ImageCompress from "quill-image-compress";
import QuillResize from "quill-resize-module";
import { toast } from "react-toastify";
import "quill/dist/quill.snow.css";
Quill.register("modules/ImageResize", ImageResize);
Quill.register("modules/imageCompress", ImageCompress);
Quill.register("modules/resize", QuillResize);

const ReactQuillJs = (props) => {
  const quillRef = useRef("");
  const titleRef = useRef("");
  const titleimageRef = useRef("");
  const descriptionRef = useRef();
  const [statusSave, setStatusSave] = useState(true);
  const [statusLinkURL, setStatusLinkURL] = useState("Link URL Image");

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
      quality: 0.7,
      maxWidth: 1000,
      maxHeight: 1000,
      imageType: "image/jpeg",
      debug: true,
    },
    resize: {
      modules: ["Resize", "DisplaySize", "Toolbar"],
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

  const handleButtonPreview = () => {
    setStatusSave(false);
    titleRef.current.value = "";
    titleimageRef.current.value = "";
    descriptionRef.current.value = "";
  };
  const handleButtonSave = () => {
    setStatusSave(true);
    titleRef.current.value = "";
    titleimageRef.current.value = "";
    descriptionRef.current.value = "";
  };
  const handleLinkButtonDropDownList = () => {
    setStatusLinkURL("Link URL Image");
  };
  const handleUploadButtonDropDownList = () => {
    setStatusLinkURL("UpLoad Image");
  };
  const handlePreviewButtonAlert = () => {
    switch (true) {
      case titleRef.current.value === "":
        toast.error("Title is empty, please fill in");
        break;
      case titleimageRef.current.value === "":
        toast.error("Title Image is empty, please fill in");
        break;
      case descriptionRef.current.value === "":
        toast.error("Description is empty, please fill in");
        break;
      case quillRef.current.value === "":
        toast.error("Quill Field is empty, please fill in");
        break;
      default: {
        const data = {
          title: titleRef.current.value,
          description: descriptionRef.current.value,
          image: titleimageRef.current.value,
          data: quillRef.current.value,
        };
        console.log(data);
        props.onClickPreview(data);
      }
    }
    // if (
    //   titleRef.current.value !== "" &&
    //   titleimageRef.current.value !== "" &&
    //   descriptionRef.current.value !== "" &&
    //   quillRef.current.value !== ""
    // ) {
    //   const data = {
    //     title: titleRef.current.value,
    //     description: descriptionRef.current.value,
    //     image: titleimageRef.current.value,
    //     data: quillRef.current.value,
    //   };
    //   console.log(data);
    //   props.onClickPreview(data);
    // } else {
    //   toast.error("Field is empty, please fill in");
    // }
  };
  const handlePublishButtonAlert = () => {
    if (
      titleRef.current.value !== "" &&
      titleimageRef.current.value !== "" &&
      descriptionRef.current.value !== "" &&
      quillRef.current.value !== ""
    ) {
      const data = {
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        image: titleimageRef.current.value,
        data: quillRef.current.value,
      };
      console.log(data);
      props.onClickPreview(data);
    } else {
      toast.error("Field is empty, please fill in");
    }
  };
  return (
    <>
      <div className="container">
        <ReactQuill
          ref={quillRef}
          theme="snow"
          modules={modules}
          formats={formats}
        />
        <div className="containerbutton">
          <button
            className="btn btn-danger mb-2"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={handleButtonPreview}
          >
            Preview
          </button>
          <button
            className="btn btn-danger mb-2"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={handleButtonSave}
          >
            Save
          </button>
          <button className="btn btn-danger mb-2">Clear</button>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Title and Title Image:
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Title:
                  </label>
                  <input
                    ref={titleRef}
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>
                <div className="form-group">
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {statusLinkURL}
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <div
                        className="dropdown-item"
                        onClick={handleLinkButtonDropDownList}
                      >
                        Link URL Image
                      </div>
                      <div
                        className="dropdown-item"
                        onClick={handleUploadButtonDropDownList}
                      >
                        Upload
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="form-group">
                  {statusLinkURL === "Link URL Image" ? (
                    <input
                      placeholder="https://fastly.picsum.photos/id/0/5000/3333.jpg"
                      ref={titleimageRef}
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                  ) : (
                    <input
                      ref={titleimageRef}
                      type="file"
                      className="form-control-file"
                      id="exampleFormControlFile1"
                    />
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">
                    Description:
                  </label>
                  <textarea
                    ref={descriptionRef}
                    className="form-control"
                    id="message-text"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              {statusSave === true ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handlePublishButtonAlert}
                >
                  Publish
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handlePreviewButtonAlert}
                >
                  Preview
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReactQuillJs;
