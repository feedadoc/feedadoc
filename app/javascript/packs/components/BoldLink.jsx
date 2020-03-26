import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const BoldLink = withStyles({
  root: {
    fontWeight: 'bold'
  },
})(Link);

export default BoldLink;