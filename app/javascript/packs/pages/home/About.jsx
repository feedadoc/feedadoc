import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import BoldLink from "../../components/BoldLink";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AmitGattani from "../../images/amit-gattani.png";
import AmySorto from "../../images/amy-sorto.png";
import AndrewCantino from "../../images/andrew-cantino.jpg";
import ChandlerMoisen from "../../images/chandler-moisen.png";
import DanielStudent from "../../images/daniel-student.png";
import GraceWickerson from "../../images/grace-wickerson.png";
import JiaxuanLi from "../../images/jiaxuan-li.png";
import KatiePennachio from "../../images/katie-pennachio.jpg";
import KeithWeissglass from "../../images/keith-weissglass.jpg";
import KellyNeuner from "../../images/kelly-neuner.jpg";
import PurinPhanichphant from "../../images/purin-phanichphant.jpg";
import SarahHarrison from "../../images/sarah-harrison.jpg";
import TylerUntisz from "../../images/tyler-untisz.jpg";

const contributors = [
  {
    name: "Amit Gattani",
    role: "Outreach",
    src: AmitGattani,
  },
  {
    name: "Amy Sorto",
    role: "Engineering",
    src: AmySorto,
  },
  {
    name: "Andrew Cantino",
    role: "Engineering",
    src: AndrewCantino,
  },
  {
    name: "Chandler Moisen",
    role: "Engineering",
    src: ChandlerMoisen,
  },
  {
    name: "Daniel Student",
    role: "Customer Engagement & Success",
    src: DanielStudent,
  },
  {
    name: "Grace Wickerson",
    role: "Partnerships",
    src: GraceWickerson,
  },
  {
    name: "Jiaxuan Li",
    role: "Account Management & Partnerships",
    src: JiaxuanLi,
  },
  {
    name: "Katie Pennachio",
    role: "Engineering",
    src: KatiePennachio,
  },
  {
    name: "Keith Weissglass",
    role: "Product/Marketing",
    src: KeithWeissglass,
  },
  {
    name: "Kelly Neuner",
    role: "UX Design",
    src: KellyNeuner,
  },
  {
    name: "Purin Phanichphant",
    role: "Design",
    src: PurinPhanichphant,
  },
  {
    name: "Sarah Harrison",
    role: "Product Management",
    src: SarahHarrison,
  },
  {
    name: "Tyler Untisz",
    role: "Engineering",
    src: TylerUntisz,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  aboutText: {
    maxWidth: "800px",
    width: "100%",
    marginBottom: "40px",
    textAlign: "center",
  },
  aboutTitle: {
    maxWidth: "850px",
    width: "100%",
    marginTop: "20px",
    marginBottom: "20px",
    textAlign: "center",
  },
  aboutGrid: {
    marginTop: "20px",
  },
  avatarName: {
    marginBottom: "10px",
    marginTop: "10px",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "0.25px",
  },
  avatarRole: {
    fontWeight: "bold",
  },
  large: {
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
}));

const Contributor = ({ name, role, src }) => {
  const classes = useStyles();
  let altText = `headshot of ${name}`;
  return (
    <>
      <Avatar alt={altText} src={src} className={classes.large} />
      <Typography
        component="p"
        variant="h6"
        color="text.paperContrast"
        className={classes.avatarName}
      >
        {name}
      </Typography>
      <Typography
        component="p"
        variant="body"
        color="text.paperContrast"
        className={classes.avatarRole}
      >
        {role}
      </Typography>
    </>
  );
};

const About = () => {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="center" py={10} flexDirection="column">
      <Typography
        component="h2"
        variant="h1"
        p="10"
        color="primary"
        className={classes.aboutTitle}
      >
        About Us
      </Typography>
      <Typography component="p" variant="h5" className={classes.aboutText}>
        HospitalHero is being built by a team of volunteers through{" "}
        <BoldLink
          color="textPrimary"
          href="https://covidaccelerator.com/"
          underline="none"
        >
          COVID Accelerator
        </BoldLink>
        , a project of{" "}
        <BoldLink
          color="textPrimary"
          href="https://impossiblelabs.io"
          underline="none"
        >
          Impossible Labs
        </BoldLink>
        .
      </Typography>
      <Container maxWidth="lg">
        <Grid container spacing={3} className={classes.aboutGrid}>
          {contributors.map((c) => (
            <Grid item xs={12} sm={4} md={3} key={c.name}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                textAlign="center"
                pb={2}
              >
                <Contributor name={c.name} role={c.role} src={c.src} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
