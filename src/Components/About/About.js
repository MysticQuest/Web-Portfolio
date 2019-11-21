import React from "react";
//import themes
//import Fade from "@material-ui/core/Fade";
import Slide from "@material-ui/core/Slide";
import "../../themes/global.css";
//import active section
import { activeIndex } from "../../App";

//properties for animations
// mountOnEnter unmountOnExit material ui animations place/remove the component from the drop
//direction="up" slide direction
// style={{ transformOrigin: '0 0 0' }} the origin for anims like "grow"
//{...(checked ? { timeout: 1000 } : {})} // transformation speed

var activateAnim = false;

const About = () => {
  if (activeIndex === 3) {
    activateAnim = true;
  } else {
    activateAnim = false;
  }

  // const classes = useStyles();

  return (
    <div className="full-container-1">
      <div className="text-container">
        <Slide
          style={{ transitionDelay: activateAnim ? "3000ms" : "0ms" }}
          // style={{ transitionDelay: "5000ms" }}
          direction="right"
          in={activateAnim}
        >
          <h1>Thanks for visiting</h1>
        </Slide>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor
          augue risus, ut tempor dolor tincidunt eu. Suspendisse hendrerit lacus
          enim, a tempus ante sollicitudin eu. Vivamus porta dapibus egestas.
          Aliquam euismod mauris nec nulla dictum, eget sodales leo faucibus.
          Morbi et ex neque. Vestibulum gravida aliquet orci vel dapibus.
        </h4>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor
          augue risus, ut tempor dolor tincidunt eu. Suspendisse hendrerit lacus
          enim, a tempus ante sollicitudin eu.
        </h4>
        <h4>
          Fusce commodo nibh et pulvinar tincidunt. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. Phasellus eu erat ac mi vehicula
          feugiat in eget ligula. Integer non tellus nec felis imperdiet auctor
          at quis ipsum. Curabitur eget pretium lorem.
        </h4>
        <h4>
          Fusce in facilisis arcu. Ut egestas vestibulum est, vitae lacinia ex
          eleifend sed. Ut rutrum ante turpis. Nullam non libero blandit,
          bibendum lectus eu, tempor sem.
        </h4>
      </div>
    </div>
  );
};

export default About;
