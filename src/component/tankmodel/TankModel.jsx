import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from "mdb-react-ui-kit";
import style from "./tankModel.module.scss";
import axios from "axios";

const TankModel = () => {
  let url = "https://63f43c77864fb1d600247a6d.mockapi.io/Products/products";
  const [data, setData] = useState(null);

  const UpdateProduct = (itemId, data) => {
    let url = `https://63f43c77864fb1d600247a6d.mockapi.io/Products/products/${itemId}`;
    return axios
      .put(url, data)
      .then((response) => {
        console.log("Item updated:", response.data);
      })
      .catch((error) => {
        console.error("Error updating item:", error);
      });
  };
  const itemId = 2;
  const newData = { name: "Test update 2", description: "123456789" };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      setData(response.data);
    };
    fetchData();
    UpdateProduct(itemId, newData);
    console.log(data);
  }, []);

  return (
    <div>
      {data ? (
        <MDBContainer fluid>
          {data.map((item) => (
            <MDBRow className="justify-content-center mb-0" key={item.id}>
              <MDBCol md="10" xl="8">
                <MDBCard className="shadow-0 border rounded-3 mt-2 mb-1">
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol md="10" lg="3" className="mb-4 mb-lg-0">
                        {item.image ? (
                          <img className={style.imgItem} src={item.image} />
                        ) : (
                          <img
                            className={style.imgItem}
                            src="https://images.pexels.com/photos/59945/strawberry-fruit-delicious-red-59945.jpeg"
                          />
                        )}
                        <a href="#!">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.15)",
                            }}
                          ></div>
                        </a>
                      </MDBCol>
                      <MDBCol md="8">
                        <h5>{item.name}</h5>
                        <div className="mt-1 mb-0 text-muted small">
                          <span>100% cotton</span>
                          <span className="text-primary"> • </span>
                          <span>Light weight</span>
                          <span className="text-primary"> • </span>
                          <span>
                            Best finish
                            <br />
                          </span>
                        </div>
                        <div className="mb-2 text-muted small">
                          <span>Unique design</span>
                          <span className="text-primary"> • </span>
                          <span>For men</span>
                          <span className="text-primary"> • </span>
                          <span>
                            Casual
                            <br />
                          </span>
                        </div>
                        <p>{item.description}</p>
                        <div>
                          <button className={style.detals}>Details</button>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          ))}
        </MDBContainer>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default TankModel;
