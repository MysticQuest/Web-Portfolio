import React from "react";
import platGif from "../../images/gameImages/plat.gif";
import tankGif from "../../images/gameImages/tanks.gif";

const Hidden = () => {

    return (
        <div display="none">
            <img src={platGif} alt="" />
            <img src={tankGif} alt="" />
        </div>
    );
};

export default Hidden;
