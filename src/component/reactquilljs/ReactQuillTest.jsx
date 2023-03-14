import React, { useRef, useEffect } from "react";
import Quill from "quill";
import style from "./rectquilltest.module.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "quill/dist/quill.snow.css";
const ReactQuillTest = (props) => {
  const html = props.handleReceiveDataQuillChange.content;
  const dataReceived = props.handleReceiveDataQuillChange;
  const quillRef = useRef(null);
  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };
  const data = {
    title: dataReceived.title,
    description: dataReceived.description,
    image: dataReceived.image,
    content: dataReceived.content,
  };
  useEffect(() => {
    if (quillRef.current) {
      const quill = new Quill(quillRef.current, {
        readOnly: true,
      });
      quill.clipboard.dangerouslyPasteHTML(html);
    }
  }, [html]);

  const handleAddProduct = async (item, data) => {
    try {
      const url = `https://63f43c77864fb1d600247a6d.mockapi.io/Products/manage/${item}`;
      const response = await axios.post(url, data);
      toast.success("Blog has added!");
      console.log("Blog has added:", response.data);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };
  const handlePublishButton = async () => {
    try {
      const data = {
        title: dataReceived.title,
        description: dataReceived.description,
        image: dataReceived.image,
        content: dataReceived.content,
      };
      await handleAddProduct(``, data);
      const emptyData = {
        title: "",
        description: "",
        image: "",
        content: "",
      };
      props.onClickPublish(emptyData);
      routeChange(`/createandeditblog`);
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  const handleBacktoEditButton = (data) => {
    data = {
      title: dataReceived.title,
      description: dataReceived.description,
      image: dataReceived.image,
      content: dataReceived.content,
    };
    props.onClickBacktoEdit(data);
    routeChange(`/createandeditblog`);
  };
  return (
    <div className={style.containers}>
      {dataReceived ? (
        <>
          <div className={style.containerbutton}>
            <button
              className="btn btn-primary mb-2"
              onClick={handlePublishButton}
            >
              Publish
            </button>
            <button
              className="btn btn-primary mb-2"
              onClick={handleBacktoEditButton}
            >
              Back To Edit
            </button>
          </div>
          <div>
            <div>
              <h1>
                <span>{dataReceived.title}</span>
              </h1>
              <div className={style.imageblog}>
                <img src={dataReceived.image} />
              </div>

              <p>{dataReceived.description}</p>
            </div>

            <div
              className="quill"
              ref={quillRef}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default ReactQuillTest;
