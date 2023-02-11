import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import axios from "axios";

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [search, setSearch] = useState("");
  const loadData = async () => {
    let response = await axios({
      method: "get",
      url: "http://localhost:5000/home/foodData",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    });
    let data = response.data;
    // console.log(data[0])
    // console.log(data[1])
    setFoodItem(data[0]);
    setFoodCat(data[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
        <div>
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            style={{ objectFit: "contain !important" }}
          >
            <div
              className="carousel-caption d-none d-md-block"
              style={{ zIndex: "2" }}
            >
              <div className="d-flex justify-content-center" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                {/* <button className="btn btn-outline-success" type="submit">
                  Search
                </button> */}
              </div>
            </div>

            <div
              className="carousel-inner"
              id="carousel"
              style={{ height: "100vh", justifyContent: "center" }}
            >
              <div className="carousel-item active">
                <img
                  src="https://source.unsplash.com/random/300×300?burger"
                  className="d-block w-100"
                  alt="..."
                  style={{ filter: "brightness(30%)" }}
                />
              </div>
              <div
                className="carousel-item"
                style={{ height: "100vh", justifyContent: "center" }}
              >
                <img
                  src="https://source.unsplash.com/random/300×300?pizza"
                  className="d-block w-100"
                  alt="..."
                  style={{ filter: "brightness(30%)" }}
                />
              </div>
              <div
                className="carousel-item"
                style={{ height: "100vh", justifyContent: "center" }}
              >
                <img
                  src="https://source.unsplash.com/random/300×300?dumplings"
                  className="d-block w-100"
                  alt="..."
                  style={{ filter: "brightness(30%)" }}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="container">
          {foodCat !== []
            ? foodCat.map((data) => {
                return (
                  <div className="row mb-3">
                    <div key={data._id} className="fs-3 m-3">
                      {data.CategoryName}
                    </div>
                    <hr />
                    {foodItem !== [] ? (
                      foodItem
                        .filter(
                          (item) =>
                            item.CategoryName === data.CategoryName &&
                            item.name
                              .toLowerCase()
                              .includes(search.toLowerCase())
                        )
                        .map((filterItems) => {
                          return (
                            <div
                              key={filterItems._id}
                              className="col-12 col-md-6 col-lg-3 mx-2"
                            >
                              <Card
                                foodItem={filterItems}
                                options={filterItems.options}
                              />
                            </div>
                          );
                        })
                    ) : (
                      <div>No Such Data Found</div>
                    )}
                  </div>
                );
              })
            : ""}
        </div>
        <Footer />
      </div>
    </div>
  );
}
