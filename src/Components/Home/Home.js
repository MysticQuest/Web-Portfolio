import React from "react";
//import themes
import "./Home.css";
import "../../themes/animate.css";
import "../../themes/global.css";

const Home = () => {
  return (
    <div className="full-container-1">
      <div className="text-container">
        <h1 className="animated fadeInLeft test delay-1s">Welcome</h1>
        <h4 className="animated fadeInLeft test2 delay-2s">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor
          augue risus, ut tempor dolor tincidunt eu. Suspendisse hendrerit lacus
          enim, a tempus ante sollicitudin eu. Vivamus porta dapibus egestas.
          Aliquam euismod mauris nec nulla dictum, eget sodales leo faucibus.
          Morbi et ex neque. Vestibulum gravida aliquet orci vel dapibus.
        </h4>
        <h4 className="animated fadeInLeft test2 delay-3s">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor
          augue risus, ut tempor dolor tincidunt eu. Suspendisse hendrerit lacus
          enim, a tempus ante sollicitudin eu.
        </h4>
        <h4 className="animated fadeInLeft test2 delay-4s">
          Fusce commodo nibh et pulvinar tincidunt. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. Phasellus eu erat ac mi vehicula
          feugiat in eget ligula. Integer non tellus nec felis imperdiet auctor
          at quis ipsum. Curabitur eget pretium lorem.
        </h4>
        <h4 className="animated fadeInLeft test2 delay-5s">
          Fusce in facilisis arcu. Ut egestas vestibulum est, vitae lacinia ex
          eleifend sed. Ut rutrum ante turpis. Nullam non libero blandit,
          bibendum lectus eu, tempor sem.
        </h4>
      </div>
    </div>
  );
};

export default Home;
