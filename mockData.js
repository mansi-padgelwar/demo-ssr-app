// const mockData = {
//     'en-us': {
//       1: {
//         'example-url': {
//           title: 'Component 1 Data',
//           content: 'This is data for Component 1.',
//         },
//       },
//       2: {
//         'another-url': {
//           title: 'Component 2 Data',
//           content: 'This is data for Component 2.',
//         },
//       },
//     },
//     // Add more languages and components as needed
//   };
  
//   export default mockData;
  

const mockData = {
  "en-us": {
    halloween: {
      app: {
        htmlContent: `<!DOCTYPE html>
<html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
           
            <link rel="shortcut icon" href="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/img/favicon.png" type="image/x-icon">
    
           
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
    
          
            <link rel="stylesheet" href="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/css/swiper-bundle.min.css">
    
           
            <link rel="stylesheet" href="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/css/styles.css">
    
            <title>Responsive Halloween Website</title>
        </head>
        <body>
          
            <header class="header" id="header">
                <nav class="nav container">
                    <a href="#" class="nav__logo">
                          <img src="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/img/logo.png" alt="" class="nav__logo-img"/>
                        Halloween
                    </a>
    
                    <div class="nav__menu" id="nav-menu">
                        <ul class="nav__list">
                            <li class="nav__item">
                                <a href="#home" class="nav__link active-link">Home</a>
                            </li>
    
                            <li class="nav__item">
                                <a href="#about" class="nav__link">About</a>
                            </li>
    
                            <li class="nav__item">
                                <a href="#trick" class="nav__link">Candy</a>
                            </li>
    
                            <li class="nav__item">
                                <a href="#new" class="nav__link">New</a>
                            </li>
    
                            <a href="#" class="button button--ghost">Support</a>
                        </ul>
    
                        <div class="nav__close" id="nav-close">
                            <i class='bx bx-x'></i>
                        </div>
    
                         <img src="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/img/nav-img.png" alt="" class="nav__img"/>
                    </div>
    
                    <div class="nav__toggle" id="nav-toggle">
                        <i class='bx bx-grid-alt'></i>
                    </div>
    
                </nav>
            </header>
    
            <main class="main">
              
                <section class="home container" id="home">
                    <div class="swiper home-swiper">
                        <div class="swiper-wrapper">

                            <section class="swiper-slide">
                                <div class="home__content grid">
                                    <div class="home__group">
                                         <img src="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/img/home1-img.png" alt="" class="home__img"/>
                                        <div class="home__indicator"></div>
        
                                        <div class="home__details-img">
                                            <h4 class="home__details-title">The Labu “Reiza”</h4>
                                            <span class="home__details-subtitle">The Living Pumpkin</span>
                                        </div>
                                    </div>
        
                                    <div class="home__data">
                                        <h3 class="home__subtitle">#1 Top Scariest Ghost</h3>
                                        <h1 class="home__title">UOOOO <br/> TRICK OR <br/> TREAT!!</h1>
                                        <p class="home__description">Hi, I'm Reiza, people call me "El Labu". I am currently trying to learn 
                                            something new, building my own bike with parts made only in Malaysia.
                                        </p>
    
                                        <div class="home__buttons">
                                            <a href="#" class="button">Book Now</a>
                                            <a href="#" class="button--link button--flex">Track Record <i class='bx bx-right-arrow-alt button__icon'></i></a>
                                        </div>
                                    </div>
                                </div>
                            </section>
    
                       
                            <section class="swiper-slide">
                                <div class="home__content grid">
                                    <div class="home__group">
                                         <img src="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/img/home2-img.png" alt="" class="home__img"/>
                                        <div class="home__indicator"></div>
        
                                        <div class="home__details-img">
                                            <h4 class="home__details-title">Adino & Grahami</h4>
                                            <span class="home__details-subtitle">No words can describe them</span>
                                        </div>
                                    </div>
        
                                    <div class="home__data">
                                        <h3 class="home__subtitle">#2 top Best duo</h3>
                                        <h1 class="home__title">BRING BACK <br/> MY COTTON <br/> CANDY</h1>
                                        <p class="home__description">Adino steals cotton candy from his brother and eats them all in one bite, 
                                            a hungry beast. Grahami can no longer contain his anger towards Adino.
                                        </p>
    
                                        <div class="home__buttons">
                                            <a href="#" class="button">Book Now</a>
                                            <a href="#" class="button--link button--flex">Track Record <i class='bx bx-right-arrow-alt button__icon'></i></a>
                                        </div>
                                    </div>
                                </div>
                            </section>
    
                       
                            <section class="swiper-slide">
                                <div class="home__content grid">
                                    <div class="home__group">
                                         <img src="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/img/home3-img.png" alt="" class="home__img"/>
                                        <div class="home__indicator"></div>
        
                                        <div class="home__details-img">
                                            <h4 class="home__details-title">Captain Sem</h4>
                                            <span class="home__details-subtitle">Veteran Spooky Ghost</span>
                                        </div>
                                    </div>
        
                                    <div class="home__data">
                                        <h3 class="home__subtitle">#3 Top Scariest  Ghost</h3>
                                        <h1 class="home__title">RESPAWN <br/> THE SPOOKY <br/> SKULL</h1>
                                        <p class="home__description">In search for cute little puppy, Captain Sem has come back from his tragic death. 
                                            With his hogwarts certified power he promise to be a hero for all of ghostkind.
                                        </p>
    
                                        <div class="home__buttons">
                                            <a href="#" class="button">Book Now</a>
                                            <a href="#" class="button--link button--flex">Track Record <i class='bx bx-right-arrow-alt button__icon'></i></a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </section>
                
               
                <section class="section category">
                    <h2 class="section__title">Favorite Scare <br/> Category</h2>
    
                    <div class="category__container container grid">
                        <div class="category__data">
                             <img src="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/img/category1-img.png" alt="" class="category__img"/>
                            <h3 class="category__title">Ghosts</h3>
                            <p class="category__description">Choose the ghosts, the scariest there are.</p>
                        </div>
    
                        <div class="category__data">
                             <img src="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/img/category2-img.png" alt="" class="category__img"/>
                            <h3 class="category__title">Pumpkins</h3>
                            <p class="category__description">You look at the scariest pumpkins there is.</p>
                        </div>
    
                        <div class="category__data">
                             <img src="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/img/category3-img.png" alt="" class="category__img"/>
                            <h3 class="category__title">Witch Hat</h3>
                            <p class="category__description">Pick the most stylish witch hats out there.</p>
                        </div>
                    </div>
                </section>
    
              
                <section class="section about" id="about">
                    <div class="about__container container grid">
                        <div class="about__data">
                            <h2 class="section__title about__title">About Halloween <br/> Night</h2>
                            <p class="about__description">Night of all the saints, or all the dead, is celebrated on October 31 and it is a 
                                very fun international celebration, this celebration comes from ancient origins, and is already 
                                celebrated by everyone.
                            </p>
                            <a href="#" class="button">Know more</a>
                        </div>
    
                         <img src="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/img/about-img.png" alt="" class="about__img"/>
                    </div>
                </section>
    
              
                <section class="section trick" id="trick">
                    <h2 class="section__title">Trick Or Treat</h2>
    
                    <div class="trick__container container grid">
                        <div class="trick__content">
                             <img src="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/img/trick-treat1-img.png" alt="" class="trick__img"/>
                            <h3 class="trick__title">Toffee</h3>
                            <span class="trick__subtitle">Candy</span>
                            <span class="trick__price">$11.99</span>
                            <button class="button trick__button">
                                <i class='bx bx-cart-alt trick__icon'></i>
                            </button>
                        </div>
    
                        <div class="trick__content">
                             <img src="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/img/trick-treat2-img.png" alt="" class="trick__img"/>
                            <h3 class="trick__title">Bone</h3>
                            <span class="trick__subtitle">Accessory</span>
                            <span class="trick__price">$8.99</span>
                            <button class="button trick__button">
                                <i class='bx bx-cart-alt trick__icon'></i>
                            </button>
                        </div>
    
                        <div class="trick__content">
                             <img src="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/img/trick-treat3-img.png" alt="" class="trick__img"/>
                            <h3 class="trick__title">Scarecrow</h3>
                            <span class="trick__subtitle">Accessory</span>
                            <span class="trick__price">$15.99</span>
                            <button class="button trick__button">
                                <i class='bx bx-cart-alt trick__icon'></i>
                            </button>
                        </div>
    
                        <div class="trick__content">
                             <img src="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/img/trick-treat4-img.png" alt="" class="trick__img"/>
                            <h3 class="trick__title">Candy Cane</h3>
                            <span class="trick__subtitle">Candy</span>
                            <span class="trick__price">$7.99</span>
                            <button class="button trick__button">
                                <i class='bx bx-cart-alt trick__icon'></i>
                            </button>
                        </div>
    
                        <div class="trick__content">
                             <img src="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/img/trick-treat5-img.png" alt="" class="trick__img"/>
                            <h3 class="trick__title">Pumpkin</h3>
                            <span class="trick__subtitle">Candy</span>
                            <span class="trick__price">$19.99</span>
                            <button class="button trick__button">
                                <i class='bx bx-cart-alt trick__icon'></i>
                            </button>
                        </div>
    
                        <div class="trick__content">
                             <img src="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/img/trick-treat6-img.png" alt="" class="trick__img"/>
                            <h3 class="trick__title">Ghost</h3>
                            <span class="trick__subtitle">Accessory</span>
                            <span class="trick__price">$17.99</span>
                            <button class="button trick__button">
                                <i class='bx bx-cart-alt trick__icon'></i>
                            </button>
                        </div>
                    </div>
                </section>
                
              
                <section class="section discount">
                    <div class="discount__container container grid">
                        <div class="discount__data">
                            <h2 class="discount__title">50% Discount <br/> On New Products</h2>
                            <a href="#" class="button">Go to new</a>
                        </div>
    
                         <img src="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/img/discount-img.png" alt="" class="discount__img"/>
                    </div>
                </section>
    
               
                <section class="section new" id="new">
                    <h2 class="section__title">New Arrivals</h2>
    
                    <div class="new__container container">
                        <div class="swiper new-swiper">
                            <div class="swiper-wrapper">
                                <div class="new__content swiper-slide">
                                    <div class="new__tag">New</div>
                                     <img src="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/img/new1-img.png" alt="" class="new__img"/>
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
                                     <img src="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/img/new2-img.png" alt="" class="new__img"/>
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
                                     <img src="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/img/new3-img.png" alt="" class="new__img"/>
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
                                     <img src="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/img/new4-img.png" alt="" class="new__img"/>
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
                                     <img src="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/img/new5-img.png" alt="" class="new__img"/>
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
                                     <img src="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/img/new6-img.png" alt="" class="new__img"/>
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
    
               
                <section class="section newsletter">
                    <div class="newsletter__container container">
                        <h2 class="section__title">Our Newsletter</h2>
                        <p class="newsletter__description">
                            Promotion new products and sales. Directly to your inbox
                        </p>
    
                        <form action="" class="newsletter__form">
                            <input type="text" placeholder="Enter your email" class="newsletter__input"/>
                            <button class="button">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </section>
            </main>
    
           
                <footer class="footer section">
                    <div class="footer__container container grid">
                        <div class="footer__content">
                            <a href="#" class="footer__logo">
                                 <img src="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/img/logo.png" alt="" class="footer__logo-img"/>
                                Halloween
                            </a>
    
                            <p class="footer__description">Enjoy the scariest night <br/> of your life.</p>
                            
                            <div class="footer__social">
                                <a href="https://www.facebook.com/" target="_blank" class="footer__social-link">
                                    <i class='bx bxl-facebook'></i>
                                </a>
                                <a href="https://www.instagram.com/" target="_blank" class="footer__social-link">
                                    <i class='bx bxl-instagram-alt' ></i>
                                </a>
                                <a href="https://twitter.com/" target="_blank" class="footer__social-link">
                                    <i class='bx bxl-twitter' ></i>
                                </a>
                            </div>
                        </div>
    
                        <div class="footer__content">
                            <h3 class="footer__title">About</h3>
                            
                            <ul class="footer__links">
                                <li>
                                    <a href="#" class="footer__link">About Us</a>
                                </li>
                                <li>
                                    <a href="#" class="footer__link">Features</a>
                                </li>
                                <li>
                                    <a href="#" class="footer__link">News</a>
                                </li>
                            </ul>
                        </div>
    
                        <div class="footer__content">
                            <h3 class="footer__title">Our Services</h3>
                            
                            <ul class="footer__links">
                                <li>
                                    <a href="#" class="footer__link">Pricing</a>
                                </li>
                                <li>
                                    <a href="#" class="footer__link">Discounts</a>
                                </li>
                                <li>
                                    <a href="#" class="footer__link">Shipping mode</a>
                                </li>
                            </ul>
                        </div>
    
                        <div class="footer__content">
                            <h3 class="footer__title">Our Company</h3>
                            
                            <ul class="footer__links">
                                <li>
                                    <a href="#" class="footer__link">Blog</a>
                                </li>
                                <li>
                                    <a href="#" class="footer__link">About us</a>
                                </li>
                                <li>
                                    <a href="#" class="footer__link">Our mision</a>
                                </li>
                            </ul>
                        </div>
                    </div>
    
                    <span class="footer__copy">&#169; Bedimcode. All rigths reserved</span>
    
                     <img src="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/img/footer1-img.png" alt="footer1" class="footer__img-one"/>
                     <img src="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/img/footer2-img.png" alt="footer2" class="footer__img-two"/>
                </footer>
    
                
                <a href="#" class="scrollup" id="scroll-up">
                    <i class='bx bx-up-arrow-alt scrollup__icon'></i>
                </a>
            
                <script src="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/js/scrollreveal.min.js"></script>

                
                <script src="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/js/swiper-bundle.min.js"></script>
                
              
                <script src="https://sgaidtife001.z29.web.core.windows.net/halloween/assets/js/main.js"></script>
           
        </body>
    </html>`,
      },
    },
    diwali: {
        app: {
        htmlContent: `<!DOCTYPE html>
        <html>
        <head>
            <meta http-equiv="X-UA-Compatible" content="IE=Edge;chrome=1">
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width">
            <title>How much air pollution do your favourite firecrackers cause? | Hindustan Times</title>
            <!-- google fonts -->
            <link href="https://fonts.googleapis.com/css?family=Lato:300i,400,400i,700|PT+Serif" rel="stylesheet">
            <!-- stylesheets -->
            <link rel="stylesheet" type="text/css" href="/font-awesome/css/font-awesome.min.css">
            <link rel="stylesheet" type="text/css" href="https://sgaidtife001.z29.web.core.windows.net/diwali/slick/slick.css">
            <link rel="stylesheet" type="text/css" href="https://sgaidtife001.z29.web.core.windows.net/diwali/slick/slick-theme.css">
            <link rel="stylesheet" type="text/css" href="https://sgaidtife001.z29.web.core.windows.net/diwali/css/styles.css">
              <meta name="keywords" content="Diwali, firecracker, air pollution, pollution meter, Hindustan Times, toxic air, air particulate, safe air, firecracker impact on air, air pollution by firecracker, burning cracker, ladi, anar bomb, fuljhari, fuljhadi, chakri, chakri bomb, pulpul, snake tablet" />
              <meta name="description" content="Ahead of Diwali this season, use this pollution meter from Hindustan Times to find out how toxic are your favourite firecrackers and how much it pollutes the air" />
        
              <link rel="canonical" content="http://www.hindustantimes.com/static/diwali-crackers-pollution" />
        
              <!-- facebook -->
              
              <meta property="og:site_name" content="Hindustan Times" />
              <meta property="og:type" content="article" />
              <meta property="og:title" content="How toxic are your favourite firecrackers?" />
              <meta property="og:url" content="http://www.hindustantimes.com/static/diwali-crackers-pollution" />
              <meta property="og:image" content="http://www.hindustantimes.com/static/diwali-crackers-pollution/img/social.png" />
              <meta property="og:description" content="Use our pollution meter to find out." />
              <meta property="og:image:type" content="image/png" />
              <meta property="og:type" content="website" />
        
              <!-- twitter -->
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@htTweets" />
              <meta name="twitter:title" content="How toxic are your favourite firecrackers?" />
              <meta name="twitter:description" content="Use our pollution meter to find out." />
        
              <meta name="twitter:image:src" content="http://www.hindustantimes.com/static/diwali-crackers-pollution/img/social.png" />
              <!-- Google Tag Manager -->
              <script>dataLayer=[{"section":"interactives"}];</script>
              <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push(
              {'gtm.start': new Date().getTime(),event:'gtm.js'}
              );var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KSLPR3B');</script>
              <!-- End Google Tag Manager -->
              <style type="text/css">
                .notes a{
                  color: inherit;
                  cursor: pointer;
                }
              </style>
        </head>
        <body>
            <div class="nav">
                <a href="http://www.hindustantimes.com"><img class="nav-logo" src="https://sgaidtife001.z29.web.core.windows.net/diwali/img/logo-mobile.png"></a>
                <div class="right-container">
                    <a href="https://www.facebook.com/sharer/sharer.php?u=http://www.hindustantimes.com/static/diwali-crackers-pollution" target="_blank"><i class="fa fa-facebook social-button" aria-hidden="true"></i></a>
                    <a href="http://twitter.com/intent/tweet?url=http://www.hindustantimes.com/static/diwali-crackers-pollution&amp;text=How toxic are your favourite firecrackers? &amp;via=httweets" target="_blank"><i class="fa fa-twitter social-button" aria-hidden="true"></i></a>
                </div>
            </div>
            <div class = "story">
              <h1>
                  How toxic are your favourite firecrackers?
              </h1>
              <h3 class = "byline">
                  By Gurman Bhatia
              </h3>
              <h3 class = "byline malay">
                  Illustrations by Malay Karmakar
              </h3>
              <h3 class = "byline dateline">
                  28th October, 2016
                  <span style="display: block;padding-top: 1em;font-size: 0.8em"><i>Data last updated: October 10, 2017</i></span>
              </h3>
              <div class = "rockets">
                <img src="https://sgaidtife001.z29.web.core.windows.net/diwali/img/rocket.png" class = "rocket">
                <img src="https://sgaidtife001.z29.web.core.windows.net/diwali/img/rocket.png" class = "hide-mobile rocket">
                <img src="https://sgaidtife001.z29.web.core.windows.net/diwali/img/rocket.png" class = "hide-mobile rocket">
              </div>
              <div class = "intro">
                  <p>Diwali is the worst time for India's air. Each time you burst a cracker, it produces a lot of poisonous dust. Scientists call this particulate matter. The tiniest particles (PM 2.5) are the most dangerous.<br></br>How toxic are different crackers? Use our pollution meter to find out.</p>
                  <label>Select your city</label>
                  <select id="city_selector"><option value="0">Select your city</option><option value="Delhi" selected="selected">Delhi</option><option value="Patna">Patna</option><option value="Gaya">Gaya</option><option value="Kanpur">Kanpur</option><option value="Varanasi">Varanasi</option><option value="Gurgaon">Gurgaon</option><option value="Solapur">Solapur</option><option value="Bengaluru">Bengaluru</option><option value="Chennai">Chennai</option><option value="Mumbai">Mumbai</option><option value="Hyderabad">Hyderabad</option><option value="Pune">Pune</option><option value="Lucknow">Lucknow</option><option value="Kolkata">Kolkata</option><option value="Ahmedabad">Ahmedabad</option><option value="Faridabad">Faridabad</option><option value="Chandrapur">Chandrapur</option><option value="Agra">Agra</option><option value="Jodhpur">Jodhpur</option><option value="Telangana">Telangana</option><option value="Muzaffarpur">Muzaffarpur</option><option value="Jaipur">Jaipur</option><option value="Dehradun">Dehradun</option><option value="Raipur">Raipur</option><option value="Panchkula">Panchkula</option><option value="Gandhinagar">Gandhinagar</option><option value="Bhopal">Bhopal</option><option value="Chandigarh">Chandigarh</option><option value="Ranchi">Ranchi</option><option value="Allahabad">Allahabad</option></select>
              </div>
        
              <div class = "share-text">The pollution in your city is already really bad and you haven't even burnt any crackers.<a href="http://twitter.com/intent/tweet?url=http://www.hindustantimes.com/static/diwali-crackers-pollution&amp;text=How toxic are your favourite firecrackers? &amp;via=httweets" target="_blank"><i class="fa fa-twitter social-button" aria-hidden="true"></i></a></div>
              <div class="level-container">
                <div class = "current-level-container">
                  <p class = 'ins'>PM 2.5 near you</p>
                  <p class = "current-level">
                      
                  </p>
                </div>
                <div class = "clean-air hide-mobile">Reset</div>
                <div class = "clean-air hide-desktop"><i class="fa fa-repeat" aria-hidden="true"></i></div>
              </div>
              <div class = "pollution-meter">
                  <div class = 'cal-arrow-label cal-move-arrow'>
                      <div class = 'cal-label-text hide-desktop'>Your air</div>
                      <div class = 'cal-label-text hide-mobile'>Pollution around you</div>
                      <div class = 'cal-label-arrow'></div>
                  </div>
              </div>
              <div class = "intro tap">
                  <i><p><span class = "desktop">Click</span><span class = "mobile">Tap</span> on a cracker to burst it<span class = "desktop"> and see how that affects the air that you breathe</span>.</p></i>
              </div>
        
              <div class = "crackers-container">
                <div class = "cracker-outer">
                <p>Ladi</p>
                   <div class = "cracker-con" data-which= "ladi" data-minus="146">
                       
                   </div>
                   
                </div>
                <div class = "cracker-outer">
                <p>Anar</p>
                   <div class = "cracker-con" data-which= "anar" data-minus="146">
        
                   </div>
                   
                </div>
                <div class = "cracker-outer">
                <p>Fuljhadi</p>
                   <div class = "cracker-con" data-which= "fuljhadi" data-minus="146">
        
                   </div>
                   
                </div>
                <div class = "cracker-outer">
                <p>Chakri</p>
                    <div class = "cracker-con" data-which= "chakri" data-minus="146">
        
                   </div>
                   
                </div>
                <div class = "cracker-outer">
                <p>Pulpul</p>
                    <div class = "cracker-con" data-which= "pulpul" data-minus="146">
        
                   </div>
                   
                </div>
                <div class = "cracker-outer">
                <p>Snake tablet</p>
                    <div class = "cracker-con" data-which= "snake" data-minus="146">
        
                   </div>
                </div>
              </div>
              
              <div class = "notes">
                <h3>Notes</h3>
                <p class = "copy">
               Air quality data for different cities is an average sourced from Hindustan Times' <a href = "http://airquality.hindustantimes.com/" target="_blank">air quality portal.</a> Data on how much pollution different crackers cause is based on a study by the Pune-based Chest Research Foundation (CRF). The study was conducted in an open area and measured PM 2.5 values from a distance that one would ideally maintain from a given cracker. According to the study, the affect of firecrackers on your immediate surroundings diminishes over time but the times varies depending on the pollutant. The simulation takes that time into account. <i>Data was last updated at 4:30 p.m. on October 10, 2017.</i>
                </p>
              </div>
            </div>
            <footer class="footer-basic-centered">
              <p class="footer-links">
                <a href="http://www.hindustantimes.com/">Home</a>
                •
                <a href="http://www.hindustantimes.com/contact-us">Contact</a>
                •
                <a href="http://www.hindustantimes.com/privacy-policy/">Privacy</a>
                •
                <a href="http://www.hindustantimes.com/disclaimer">Disclaimer</a>
              </p>
        
              <p class="footer-company-name">
                HT Media Limited © 2016
              </p>
            </footer>
            <script type="text/javascript" src = "js/jquery.min.js"></script>
            <script type="text/javascript" src = "slick/slick.min.js"></script>
            <script type="text/javascript" src = "js/bundle.js?v2"></script>
            <!-- analytics -->
                <script type="text/javascript">
                  var _comscore = _comscore || [];
                  _comscore.push({
                      c1 : "2",
                      c2 : "6035286"
                  });
                  (function() {
                      var s = document.createElement("script"), el = document.getElementsByTagName("script")[0];
                      s.async = true;
                      s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
                      el.parentNode.insertBefore(s, el);
                  })();
                </script>
                <!-- chartbeat -->
                <script type='text/javascript'>
                    var _sf_async_config = _sf_async_config || {};
                    /** CONFIGURATION START **/
                    _sf_async_config.uid = 63228
                    _sf_async_config.domain = "hindustantimes.com";
                    _sf_async_config.useCanonical = true;
                    _sf_async_config.sections = 'ht-indepth';
                    //CHANGE THIS
                    _sf_async_config.authors = 'Gurman Bhatia';
                    //CHANGE THIS
                    /** CONFIGURATION END **/
                    (function() {
                        function loadChartbeat() {
                            window._sf_endpt = (new Date()).getTime();
                            var e = document.createElement('script');
                            e.setAttribute('language', 'javascript');
                            e.setAttribute('type', 'text/javascript');
                            e.setAttribute('src', '//static.chartbeat.com/js/chartbeat.js');
                            document.body.appendChild(e);
                        }
        
                        var oldonload = window.onload;
                        window.onload = ( typeof window.onload != 'function') ? loadChartbeat : function() {
                            oldonload();
                            loadChartbeat();
                        };
                    })();
                </script>
                <!-- Google Tag Manager (noscript) -->
                <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KSLPR3B"
                height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
                <!-- End Google Tag Manager (noscript) -->
        </body>
        </html>`,
        }
      },
  },
  fr: {
    component1: {
      page1: {
        htmlContent: "<h1>Bonjour depuis Composant 1, Page 1</h1>",
      },
      page2: {
        htmlContent: "<h1>Bonjour depuis Composant 1, Page 2</h1>",
      },
    },
    component2: {
      page1: {
        htmlContent: "<h1>Bonjour depuis Composant 2, Page 1</h1>",
      },
      page2: {
        htmlContent: "<h1>Bonjour depuis Composant 2, Page 2</h1>",
      },
    },
  },
};

export default mockData;
