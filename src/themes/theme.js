import { createTheme, makeStyles } from "@mui/material";
import { blue, green } from "@mui/material/colors";
import { border } from "@mui/system";

const useStyles = makeStyles({
    root: {
      background: 'green',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });


  export default useStyles