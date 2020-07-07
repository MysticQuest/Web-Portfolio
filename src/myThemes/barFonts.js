import { createMuiTheme } from "@material-ui/core/styles";
// import "typeface-pacifico";

const fontTheme1 = createMuiTheme({
  typography: {
    body1: {
      fontStyle: "bold",
      fontFamily: 'Comic Neue !important',
      // fontWeight: 400,
      fontSize: 25,
      color: "rgba(250, 250, 250, 0.9)"
    }
  }
});

export default fontTheme1;
