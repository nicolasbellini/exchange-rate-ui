import { createTheme } from "@mui/material";
import { blue, green } from "@mui/material/colors";
import { border } from "@mui/system";

const theme = createTheme({
    palette: {
        primary: {
            main: green
        }
    },

    navBar: {
        backgroundColor: "red",
        color: "white",
        border: "1px solid black"
    }

  });


  export default theme