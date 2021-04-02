import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id="3254354345"
          title="New Apple iPad Pro 2020 (12.9-inch, Wi-Fi, 128GB) with Magic Pen - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
        <Product
          id="49538094"
          title="Apple 15 MacBook Pro, Retina, Touch Bar, 2.9GHz Intel Core i7 Quad Core, 16GB RAM, 512GB SSD, Space Grey"
          price={1439.95}
          rating={5}
          image="https://m.media-amazon.com/images/I/613cwcMzysL._AC_UL640_FMwebp_QL65_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="4903850"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={199.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="23445930"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
          id="12321341"
          title="Black+Decker Thermal Coffee Maker, 12 Cup, Programmable, Digital Controls, Black And Silver"
          price={79.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71GqC2u1JpL._AC_UY436_FMwebp_QL65_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="49053850"
          title="Bulova Men's 44mm Marine Star Chronograph Watch"
          price={407.15}
          rating={3}
          image="https://m.media-amazon.com/images/I/71yXpOcP4SL._AC_UL640_FMwebp_QL65_.jpg"
        />
        <Product
          id="23445230"
          title="Wilson Evolution Black Edition Official Basketball"
          price={54.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/91vdgs5FY4L._AC_UL640_FMwebp_QL65_.jpg"
        />
        <Product
          id="3254354845"
          title="ZRIANG Men's Oxford Classic Cap Toe Lace-up Dress Shoes"
          price={130.56}
          rating={4}
          image="https://m.media-amazon.com/images/I/71Fkk+cwF9L._AC_UL640_FMwebp_QL65_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="49038520"
          title="PAERDE Men's Driving Polarized Sunglasses for Men Al-Mg Metal Frame Ultra Light PA09"
          price={159.49}
          rating={3}
          image="https://m.media-amazon.com/images/I/51Qu9M0OV2L._AC_UL640_FMwebp_QL65_.jpg"
        />
        <Product
          id="23945930"
          title="Lavazza Espresso Gran Crema Beans, 1000gm(Packaging May Vary)"
          price={35.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71kR2YAS+jL._AC_UL640_FMwebp_QL65_.jpg"
        />
        <Product
          id="3254354348"
          title="Tazo Organic Chai Black Tea Bags, 20 Count (Pack of 6)"
          price={20.59}
          rating={4}
          image="https://m.media-amazon.com/images/I/91Q9WiiP3nL._AC_SX960_SY720_.jpg"
        />
      </div>
    </div>
  );
}

export default Home
