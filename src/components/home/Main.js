import { TextField } from "@mui/material";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import banner1 from "../../images/banners/banner1.jpg";
function Main() {
  return (
    <div className="home-main">
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        responsive={{
          0: {
            items: 1.1,
          },
          600: {
            items: 1.3,
          },
          1000: {
            items: 1,
          },
        }}
        center
        items={1}
        nav>
        <div class="item">
          <img src={banner1} className="carousel-image" />
        </div>
      </OwlCarousel>
      <div className="sell-form-lg">
        <TextField
          // variant="filled"
          label="Category"
          id="category"
          size="small"
        />
      </div>
    </div>
  );
}

export default Main;
