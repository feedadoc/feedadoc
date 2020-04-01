import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const BoldLink = withStyles({
  root: {
    fontWeight: "bold",
    borderBottom: "2px solid",
    "&:hover": {
      color: "#D50000",
      borderBottom: "4px solid",
    },
  },
})(Link);

export default BoldLink;
