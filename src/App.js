import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./App.css";
import ResponsiveDrawer from "./Components/Navigation";

window.onscroll = function() {
  var activeSection = window.fullpage_api.getActiveSection().index;
  console.log(activeSection);
  return activeSection;
};
const activeSection = window.onscroll;

//import pic1 from "./pic1.png";
//import pic2 from "./pic2.png";

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
      // animateAnchor={true}
      keyboardScrolling={true}
      dragAndMove={true}
      // fadingEffect={"slides"}
      menu={"#menu"} // menu for anchors
      loopBottom={true}
      licenseKey={"GPLv3"}
      activeClass={"active"} //adds an active class to the correct menu button
      anchors={["firstPage", "secondPage", "thirdPage", "fourthPage"]}
      lockAnchors={true} //anchor feature
      navigation={true} //enables cool dots
      // arrowNavigation={true} //enables arrows for slides
      // slidesNavigation={true}
      slidesNavPosition={"bottom"}
      // navigationTooltips={[]}
      scrollingSpeed={1000} /* used this for something to work... */
      sectionsColor={[]}
      scrollBar={true}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section container1 fp-noscroll">
              <h1>Section 1</h1>
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

export { App, activeSection };
