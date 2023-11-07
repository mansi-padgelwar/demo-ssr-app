import Image from 'next/image';
import React from 'react';
import styles from "../public/assets/css/styles.css";

function Component() {
  return (
    <div>
      <header className={styles.header} id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            {/* <Image src="/assets/img/logo.png" alt="" className="nav__logo-img" width={1000} height={1000}/> */}
            Halloween
          </a>

          <div className="nav__menu" id="nav-menu">
            {/* Navigation menu content */}
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i className='bx bx-grid-alt'></i>
          </div>
        </nav>
      </header>

      <main className="main">
        <section className="home container" id="home">
          <div className="swiper home-swiper">
            <div className="swiper-wrapper">
              {/* Home Slider sections */}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </section>

        <section className="section category">
          <h2 className="section__title">Favorite Scare <br /> Category</h2>
          <div className="category__container container grid">
          <div class="category__container container grid">
                    <div class="category__data">
                        {/* <img src="assets/img/category1-img.png" alt="" class="category__img"> */}
                        <h3 class="category__title">Ghosts</h3>
                        <p class="category__description">Choose the ghosts, the scariest there are.</p>
                    </div>

                    <div class="category__data">
                        {/* <img src="assets/img/category2-img.png" alt="" class="category__img"> */}
                        <h3 class="category__title">Pumpkins</h3>
                        <p class="category__description">You look at the scariest pumpkins there is.</p>
                    </div>

                    <div class="category__data">
                        {/* <img src="assets/img/category3-img.png" alt="" class="category__img"> */}
                        <h3 class="category__title">Witch Hat</h3>
                        <p class="category__description">Pick the most stylish witch hats out there.</p>
                    </div>
                </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="about__container container grid">
            {/* About section content */}
          </div>
        </section>

        <section className="section trick" id="trick">
          <h2 className="section__title">Trick Or Treat</h2>
          <div className="trick__container container grid">
          <section class="section trick" id="trick">
                <h2 class="section__title">Trick Or Treat</h2>

                <div class="trick__container container grid">
                    <div class="trick__content">
                    
                        {/* <Image src="../assets/img/trick-treat1-img.png" alt="" class="trick__img"/> */}
                        <h3 class="trick__title">Toffee</h3>
                        <span class="trick__subtitle">Candy</span>
                        <span class="trick__price">$11.99</span>
                        <button class="button trick__button">
                            <i class='bx bx-cart-alt trick__icon'></i>
                        </button>
                    </div>

                    <div class="trick__content">
                        {/* <Image src="../assets/img/trick-treat2-img.png" alt="" class="trick__img"/> */}
                        <h3 class="trick__title">Bone</h3>
                        <span class="trick__subtitle">Accessory</span>
                        <span class="trick__price">$8.99</span>
                        <button class="button trick__button">
                            <i class='bx bx-cart-alt trick__icon'></i>
                        </button>
                    </div>

                    <div class="trick__content">
                        {/* <Image src="../assets/img/trick-treat3-img.png" alt="" class="trick__img"/> */}
                        <h3 class="trick__title">Scarecrow</h3>
                        <span class="trick__subtitle">Accessory</span>
                        <span class="trick__price">$15.99</span>
                        <button class="button trick__button">
                            <i class='bx bx-cart-alt trick__icon'></i>
                        </button>
                    </div>

                    <div class="trick__content">
                        {/* <Image src="../assets/img/trick-treat4-img.png" alt="" class="trick__img"/> */}
                        <h3 class="trick__title">Candy Cane</h3>
                        <span class="trick__subtitle">Candy</span>
                        <span class="trick__price">$7.99</span>
                        <button class="button trick__button">
                            <i class='bx bx-cart-alt trick__icon'></i>
                        </button>
                    </div>

                    <div class="trick__content">
                        {/* <Image src="../assets/img/trick-treat5-img.png" alt="" class="trick__img"/> */}
                        <h3 class="trick__title">Pumpkin</h3>
                        <span class="trick__subtitle">Candy</span>
                        <span class="trick__price">$19.99</span>
                        <button class="button trick__button">
                            <i class='bx bx-cart-alt trick__icon'></i>
                        </button>
                    </div>

                    <div class="trick__content">
                        {/* <Image src="../assets/img/trick-treat6-img.png" alt="" class="trick__img"/> */}
                        <h3 class="trick__title">Ghost</h3>
                        <span class="trick__subtitle">Accessory</span>
                        <span class="trick__price">$17.99</span>
                        <button class="button trick__button">
                            <i class='bx bx-cart-alt trick__icon'></i>
                        </button>
                    </div>
                </div>
            </section>
          </div>
        </section>

        <section className="section discount">
          <div className="discount__container container grid">
          <section class="section discount">
                <div class="discount__container container grid">
                    <div class="discount__data">
                        <h2 class="discount__title">50% Discount <br/> On New Products</h2>
                        <a href="#" class="button">Go to new</a>
                    </div>

                    {/* <Image src="../assets/img/discount-img.png" alt="" class="discount__img"/> */}
                </div>
            </section>
          </div>
        </section>

        <section className="section new" id="new">
          <h2 className="section__title">New Arrivals</h2>
          <div className="new__container container">
            <div className="swiper new-swiper">
              <div className="swiper-wrapper">
              <section class="section new" id="new">
                <h2 class="section__title">New Arrivals</h2>

                <div class="new__container container">
                    <div class="swiper new-swiper">
                        <div class="swiper-wrapper">
                            <div class="new__content swiper-slide">
                                <div class="new__tag">New</div>
                                {/* <Image src="../assets/img/new1-img.png" alt="" class="new__img"/> */}
                                <h3 class="new__title">Haunted House</h3>
                                <span class="new__subtitle">Accessory</span>
                                
                                <div class="new__prices">
                                    <span class="new__price">$14.99</span>
                                    <span class="new__discount">$29.99</span>
                                </div>

                                <button class="button new__button">
                                    <i class='bx bx-cart-alt new__icon'></i>
                                </button>
                            </div>
        
                            <div class="new__content swiper-slide">
                                <div class="new__tag">New</div>
                                {/* <Image src="../assets/img/new2-img.png" alt="" class="new__img"/> */}
                                <h3 class="new__title">Halloween Candle</h3>
                                <span class="new__subtitle">Accessory</span>
        
                                <div class="new__prices">
                                    <span class="new__price">$11.99</span>
                                    <span class="new__discount">$21.99</span>
                                </div>

                                <button class="button new__button">
                                    <i class='bx bx-cart-alt new__icon'></i>
                                </button>
                            </div>
        
                            <div class="new__content swiper-slide">
                                <div class="new__tag">New</div>
                                {/* <Image src="../assets/img/new3-img.png" alt="" class="new__img"/> */}
                                <h3 class="new__title">Witch Hat</h3>
                                <span class="new__subtitle">Accessory</span>
        
                                <div class="new__prices">
                                    <span class="new__price">$4.99</span>
                                    <span class="new__discount">$9.99</span>
                                </div>

                                <button class="button new__button">
                                    <i class='bx bx-cart-alt new__icon'></i>
                                </button>
                            </div>
        
                            <div class="new__content swiper-slide">
                                <div class="new__tag">New</div>
                                {/* <Image src="../assets/img/new4-img.png" alt="" class="new__img"/> */}
                                <h3 class="new__title">Rip</h3>
                                <span class="new__subtitle">Accessory</span>
        
                                <div class="new__prices">
                                    <span class="new__price">$24.99</span>
                                    <span class="new__discount">$44.99</span>
                                </div>

                                <button class="button new__button">
                                    <i class='bx bx-cart-alt new__icon'></i>
                                </button>
                            </div>
        
                            <div class="new__content swiper-slide">
                                <div class="new__tag">New</div>
                                {/* <Image src="../assets/img/new5-img.png" alt="" class="new__img"/> */}
                                <h3 class="new__title">Terrifying Crystal Ball</h3>
                                <span class="new__subtitle">Accessory</span>
        
                                <div class="new__prices">
                                    <span class="new__price">$5.99</span>
                                    <span class="new__discount">$12.99</span>
                                </div>

                                <button class="button new__button">
                                    <i class='bx bx-cart-alt new__icon'></i>
                                </button>
                            </div>
        
                            <div class="new__content swiper-slide">
                                <div class="new__tag">New</div>
                                {/* <Image src="../assets/img/new6-img.png" alt="" class="new__img"/> */}
                                <h3 class="new__title">Witch Broom</h3>
                                <span class="new__subtitle">Accessory</span>
        
                                <div class="new__prices">
                                    <span class="new__price">$7.99</span>
                                    <span class="new__discount">$14.99</span>
                                </div>

                                <button class="button new__button">
                                    <i class='bx bx-cart-alt new__icon'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
              </div>
            </div>
          </div>
        </section>

        <section className="section newsletter">
          <div className="newsletter__container container">
            <h2 className="section__title">Our Newsletter</h2>
            <p className="newsletter__description">
              Promotion new products and sales. Directly to your inbox
            </p>
            <form action="" className="newsletter__form">
              <input type="text" placeholder="Enter your email" className="newsletter__input" />
              <button className="button">
                Subscribe
              </button>
            </form>
          </div>
        </section>

        <footer className="footer section">
          <div className="footer__container container grid">
            <div className="footer__content">
              <a href="#" className="footer__logo">
                {/* <Image src="../assets/img/logo.png" alt="" className="footer__logo-img" /> */}
                Halloween
              </a>

              <p className="footer__description">Enjoy the scariest night <br /> of your life.</p>

              <div className="footer__social">
                <a href="https://www.facebook.com/" target="_blank" className="footer__social-link">
                  <i className='bx bxl-facebook'></i>
                </a>
                <a href="https://www.instagram.com/" target="_blank" className="footer__social-link">
                  <i className='bx bxl-instagram-alt' ></i>
                </a>
                <a href="https://twitter.com/" target="_blank" className="footer__social-link">
                  <i className='bx bxl-twitter' ></i>
                </a>
              </div>
            </div>

            <div className="footer__content">
              <h3 className="footer__title">About</h3>

              <ul className="footer__links">
                <li>
                  <a href="#" className="footer__link">About Us</a>
                </li>
                <li>
                  <a href="#" className="footer__link">Features</a>
                </li>
                <li>
                  <a href="#" className="footer__link">News</a>
                </li>
              </ul>
            </div>

            <div className="footer__content">
              <h3 className="footer__title">Our Services</h3>

              <ul className="footer__links">
                <li>
                  <a href="#" className="footer__link">Pricing</a>
                </li>
                <li>
                  <a href="#" className="footer__link">Discounts</a>
                </li>
                <li>
                  <a href="#" className="footer__link">Shipping mode</a>
                </li>
              </ul>
            </div>

            <div className="footer__content">
              <h3 className="footer__title">Our Company</h3>

              <ul className="footer__links">
                <li>
                  <a href="#" className="footer__link">Blog</a>
                </li>
                <li>
                  <a href="#" className="footer__link">About us</a>
                </li>
                <li>
                  <a href="#" className="footer__link">Our mission</a>
                </li>
              </ul>
            </div>
          </div>
          <span className="footer__copy">&#169; Bedimcode. All rights reserved</span>
          {/* <Image src="../assets/img/footer1-img.png" alt="" className="footer__img-one" />
          <Image src="../assets/img/footer2-img.png" alt="" className="footer__img-two" /> */}
        </footer>


        <a href="#" className="scrollup" id="scroll-up">
          <i className='bx bx-up-arrow-alt scrollup__icon'></i>
        </a>
      </main>
    </div>
  );
}

export default Component;







