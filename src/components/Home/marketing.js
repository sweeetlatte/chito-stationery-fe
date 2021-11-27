import React, { useContext } from "react";
import "../../style/Home/marketing.css";

import washiTape from "../../assets/Images/washi_tape.jpg";
import sticker from "../../assets/Images/sticker.jpg";
import stickyNote from "../../assets/Images/sticky_note.jpg";
import { Link } from "react-router-dom";
import { FilterContext } from "../../contexts/filter_context";

export const Marketing = () => {
  const { handleQuery } = useContext(FilterContext);
  return (
    <div className="marketing">
      <div className="marketing-title">
        <h2 className="marketing-title-name">shop all stationery</h2>
      </div>
      <div className="marketing-cards">
        <div className="marketing-child-card">
          <Link to="/shop?type=sticker" className="marketing-child">
            <div className="marketing-img">
              <img src={sticker} alt="sticker" />
            </div>
            <div className="marketing-script">
              <p>STICKER</p>
            </div>
          </Link>
        </div>
        <div className="marketing-child-card">
          <Link to="/shop?type=washi%20tape" className="marketing-child">
            <div className="marketing-img">
              <img src={washiTape} alt="washi-tape" />
            </div>
            <div className="marketing-script">
              <p>WASHI TAPE</p>
            </div>
          </Link>
        </div>
        <div className="marketing-child-card">
          <Link to="/shop?type=sticky%20note" className="marketing-child">
            <div className="marketing-img">
              <img src={stickyNote} alt="sticky-note" />
            </div>
            <div className="marketing-script">
              <p>STICKY NOTE</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

/* <Row className="marketing-content justify-content-xl-center text-center">
          <Col lg="4">
            <Row>
              <img
                className="marketing-image mx-5"
                src={washiTape}
                alt="washi tape"
              />
            </Row>
            <Row>
              <p className="marketing-subTitle">washi tape</p>
            </Row>
          </Col>
          <Col lg="4">
            <Row>
              <img
                className="marketing-image mx-5"
                src={washiTape}
                alt="washi tape"
              />
            </Row>
            <Row>
              <p className="marketing-subTitle">washi tape</p>
            </Row>
          </Col>
          <Col lg="4">
            <Row>
              <img
                className="marketing-image mx-5"
                src={washiTape}
                alt="washi tape"
              />
            </Row>
            <Row>
              <p className="marketing-subTitle">washi tape</p>
            </Row>
          </Col>
        </Row> */
