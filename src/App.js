import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import "./App.css";

import ResponsiveDrawer from "./Components/NavigationDR1";

//import pic1 from "./pic1.png";
//import pic2 from "./pic2.png";

const App = () => (
  <div>
    <ResponsiveDrawer />
    <ReactFullpage
      //fullpage options
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <div>
            <ReactFullpage.Wrapper>
              <div className="section container1">
                {/* <p>Section 1 (welcome to fullpage.js)</p> */}
                {/* <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button> */}
              </div>
              <div className="section container2">{/* <p>Section 2</p> */}</div>
            </ReactFullpage.Wrapper>
          </div>
        );
      }}
    />
  </div>
);

export default App;
