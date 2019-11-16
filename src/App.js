import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./App.css";
import ResponsiveDrawer from "./Components/Navigation";
//import Detector from "./Components/Detector";

window.onscroll = function() {
  // console.log(window.fullpage_api.getActiveSection().index);
  var activeSection = window.fullpage_api.getActiveSection().index;
  return activeSection;
};

const activeSection = window.onscroll;

//import pic1 from "./pic1.png";
//import pic2 from "./pic2.png";

//{console.log(fullpageApi.getActiveSection().index)}
//<button onClick={() => fullpageApi.moveSectionDown()}></button>

// console.log(window.fullpage_api.getActiveSection().index);

const App = () => (
  <div>
    <ResponsiveDrawer />
    <ReactFullpage
      //fullpage options
      parallax={true}
      parallaxOptions={{
        type: "reveal",
        percentage: 62,
        property: "translate"
      }}
      scrollOverflowReset={true}
      cards={false}
      cardsOptions={{
        perspective: 50,
        fadeContent: true,
        fadeBackground: true
      }}
      resetSliders={true}
      controlArrows={true}
      animateAnchor={true}
      keyboardScrolling={true}
      dragAndMove={true}
      fadingEffect={"slides"}
      menu={"#menu"}
      loopBottom={true}
      licenseKey={"GPLv3"}
      activeClass={"active"}
      anchors={["firstPage", "secondPage", "thirdPage", "fourthPage"]}
      lockAnchors={true}
      navigation={true}
      arrowNavigation={true}
      slidesNavigation={true}
      slidesNavPosition={"bottom"}
      navigationTooltips={[]}
      scrollingSpeed={1000} /* Options here */
      scrollBar={true}
      sectionsColor={[]}
      // afterLoad={(origin, destination, direction) => {
      //   console.log("after slide load event", {
      //     origin,
      //     destination,
      //     direction
      //   });
      // }}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section container1 fp-noscroll">
              <h1>Section 1</h1>
            </div>
            <div className="section container2 fp-noscroll">
              <h1>Section 2</h1>
            </div>
            <div className="section container2 fp-noscroll">
              <h1>Section 3</h1>
            </div>
            <div className="section container2 fp-noscroll">
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

export { App, activeSection };
