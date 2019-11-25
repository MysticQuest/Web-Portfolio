import React from "react";
//import plugins
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
//import { Parallax, Background } from "react-parallax";
// import ReactFullpage from '@fullpage/react-fullpage/dist/react-fullpage-commonjs'; //commonjs lib for nextjs ssr etc
//import my components
import ResponsiveDrawer from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import ProjectCategories from "./Components/Projects/PCategories";
import GameCategories from "./Components/Games/GCategories";
import Icons from "./Components/About/MyLinks";
//import styles
import "./App.css";
import Particles from "react-particles-js";
import { humidity } from "./themes/humidity";
import { fireflies2 } from "./themes/fireflies2";
//hooks?
//import { useAnimHandler } from "./hooks/useAnimHandler";

var activeIndex = 0;

const App = () => (
  <div>
    <Icons />
    <ResponsiveDrawer />
    <ReactFullpage
      //fullpage options
      parallax={true}
      parallaxOptions={{
        type: "cover",
        percentage: 62,
        property: "translate"
      }}
      scrollOverflow={true}
      // scrollOverflowReset={true} //if you have sections with scrollbar resets the section on change
      // cards={true} //an effect
      // cardsOptions={{
      //   perspective: 50,
      //   fadeContent: true,
      //   fadeBackground: true
      // }}
      // fadingEffect={"sections"}
      offsetSections={false} //used to show non full screen section parts
      resetSliders={false}
      // controlArrows={true}
      animateAnchor={true}
      keyboardScrolling={true}
      dragAndMove={true}
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
      // sectionsColor={["black", "black", "black", "black"]}
      scrollBar={false}
      // easing={"easeInOutCubic"}
      // easingcss3={"ease"}
      // css3={true}
      autoScrolling={true}
      fitToSection={true}
      // fixedElements={"ResponsiveDrawer"}
      loopBottom={false}
      // scrollHorizontally={true}
      // bigSectionsDestination={"top"}
      normalScrollElements={".scroll"}
      // normalScrollElementTouchThreshold={1}
      touchSensitivity={5}
      // some extra afterLoad parameters origin, destination, direction, index
      afterLoad={(origin, destination, direction) => {
        // console.log("afterLoad event", destination.index);
        //alert("Section ended loading");
        activeIndex = destination.index;
        // console.log(activeIndex);
      }}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section container1 fp-content">
              <Particles
                id="particle-effects"
                className="particles-js"
                params={humidity}
              />

              <Home />
            </div>

            <div className="section container2 ">
              <ProjectCategories />
            </div>
            <div className="section container3 ">
              <GameCategories />
            </div>
            <div className="section container4 ">
              <Particles
                id="particle-effects"
                className="particles-js"
                params={fireflies2}
              />
              <About />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  </div>
);

/* <div class="section fp-auto-height">Auto height</div> --- this auto adjust height for smaller/bigger sections*/

export { App, activeIndex };
