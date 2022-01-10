import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="uff" />

                <div className="home__row">
                    <Product 
                        title='The lean startup' 
                        price={1499} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg" 
                        rating={5}
                    />
                    <Product 
                        title='kitchen mixer' 
                        price={6000} 
                        image="https://www.compareprix.in/images/resizeimages/product/235/rsz_kitchen_king_woodland_750_w_mixer_grinder.jpg?v=74" 
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="4903850"
                        title="samsung ted curved tv"
                        price={50000}
                        image="https://cdn1.smartprix.com/rx-ilfu1oJUk-w240-h290/samsung-43nu7470-43.webp"
                        rating={4}
                    />
                    <Product 
                        id="4908350"
                        title="iphone XR"
                        price={47500}
                        image="https://rukminim1.flixcart.com/image/416/416/jnj7iq80/mobile/u/b/g/apple-iphone-xr-mryj2hn-a-original-imafa6zkm7qhv2zd.jpeg?q=70"
                        rating={4}
                    />
                    <Product 
                        id="4903805"
                        title="amazon echo 3rd gen"
                        price={9749}
                        image="https://media.4rgos.it/i/Argos/3087192_R_Z001A?w=1500&h=880&qlt=70&fmt=webp"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                    id="1234567"
                        title="tensorbook the best for deep learning"
                        price={248555}
                        image="data:image/jpeg;base64,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"
                        rating={5}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
