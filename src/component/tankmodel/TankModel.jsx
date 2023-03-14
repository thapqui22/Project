import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import style from "./tankModel.module.scss";
import axios from "axios";
import PaginationTankModel from "./PaginationTankModel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
const TankModel = () => {
  let url = "https://63f43c77864fb1d600247a6d.mockapi.io/Products/manage";
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const handleClickChangePage = (data) => {
    setCurrentPage(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      setData(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className={style.containers}>
      <MDBContainer fluid>
        {currentItems.map((item) => (
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
                      <h5>{item.title}</h5>
                      <p>
                        <FontAwesomeIcon icon={faQuoteLeft} />
                        {item.description}
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faPencil} />
                        {item.author}
                      </p>
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

      <PaginationTankModel onClickChangePage={handleClickChangePage} />
    </div>
  );
};

export default TankModel;
