import React from "react";
//import plugins
import ReactFullpage from "@fullpage/react-fullpage";
import Particles from "react-particles-js";
import { params } from "./themes/particlesjs-config";
//import my components
import ResponsiveDrawer from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import WebProjects from "./Components/WebProjects/WebProjects";
import Games from "./Components/Games/Games";
//import styles
import "./App.css";

// var gCD = false;
// window.onscroll = function() {
//   if (gCD === false) {
//     console.log("scrolled");
//     gCD = true;
//     window.fullpage_api.setAllowScrolling(false, "all");
//     window.fullpage_api.setKeyboardScrolling(false, "all");

//     setTimeout(
//       function() {
//         window.fullpage_api.setAllowScrolling(true, "all");
//         window.fullpage_api.setKeyboardScrolling(true, "all");
//         console.log("timeout ended");
//         gCD = false;
//       },
//       [100]
//     );
//   }
// };

const App = () => (
  <div>
    <ResponsiveDrawer />

    <ReactFullpage
      //fullpage options
      // parallax={false}
      // parallaxOptions={{
      //   type: "reveal",
      //   percentage: 62,
      //   property: "translate"
      // }}
      // scrollOverflowReset={true} //if you have sections with scrollbar resets the section on change
      // cards={true} //an effect
      // cardsOptions={{
      //   perspective: 50,
      //   fadeContent: true,
      //   fadeBackground: true
      // }}
      offsetSections={false} //used to show non full screen section parts
      resetSliders={true}
      // controlArrows={true}
      animateAnchor={true}
      keyboardScrolling={true}
      dragAndMove={true}
      // fadingEffect={"slides"}
      menu={"#menu"} // menu for anchors
      loopHorizontal={true}
      licenseKey={"GPLv3"}
      activeClass={"active"} //adds an active class to the correct menu button
      anchors={["firstPage", "secondPage", "thirdPage", "fourthPage"]}
      lockAnchors={true} //anchor feature
      navigation={true} //enables cool dots
      // arrowNavigation={true} //enables arrows for slides
      slidesNavigation={true}
      slidesNavPosition={"bottom"}
      // navigationTooltips={[]} //tooltips for the navdots
      scrollingSpeed={1000} /* used this for something to work... */
      sectionsColor={[]}
      scrollBar={true}
      // easing={"easeInOutCubic"}
      // easingcss3={"ease"}
      // css3={true}
      autoScrolling={true}
      fitToSection={true}
      // fixedElements={"#navbar"}
      loopBottom={true}
      // scrollHorizontally={true}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section container1 fp-noscroll">
              <Particles
                id="particle-effects"
                className="particles-js"
                params={params}
              />
              <Home />
            </div>
            <div className="section container2 fp-noscroll">
              <h1>Section 2</h1>
            </div>
            <div className="section container3 fp-noscroll">
              <h1>Section 3</h1>
            </div>
            <div className="section container4 fp-noscroll">
              <div className="slide">
                <h1>Section 4</h1>
              </div>
              <div className="slide">
                <h1>Section 4</h1>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  </div>
);

/* <div class="section">Whole viewport</div>
<div class="section fp-auto-height">Auto height</div> --- this is for scrollable bigger sections*/

// onScroll={() => {
//   console.log(window.fullpage_api.getActiveSection());
// }}

export default App;
