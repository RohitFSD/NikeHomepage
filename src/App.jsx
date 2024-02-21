import "./App.css";

const App =()=>{
    return( 
            <div>
                <nav>
        <div className="logo">
          <img src="nike-logo.png" alt="logo" height="88" width="100"/>
        </div>
        <ul>
         <li href="#">Menu</li>
         <li href="#">Location</li>
         <li href="#">About</li>
         <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
      <main className="hero">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
                    SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH
                    OUR 
                    SHOES.
                </p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>
                <div className="shooping"></div>
                <p>Also Available on</p>
                <div className="brand-icons">
                    <img src="amazon.png" alt="Amazon-logo"/>
                    <img src="flipkart.png" alt="Flipkart-logo" />
                </div>
            </div>
            <div className="hero-image">
                <img src="shoe_image.png" alt="shoes-image" />
            </div>
        </main>
            </div>
    );

};
export default App;