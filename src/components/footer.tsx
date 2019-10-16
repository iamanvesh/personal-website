import React from "react"
import { createStyles, Grid, Theme, Typography, WithStyles, withStyles } from "@material-ui/core"
import { Link } from "gatsby"
import Linkify from "./Linkify"


const styles = (theme: Theme) => createStyles({
  container: {
    [theme.breakpoints.up("sm")]: {
      position: "absolute" as "absolute",
      bottom: theme.spacing(1),
      right: theme.spacing(2),
    },
    width: "100%",
    display: "flex",
    flex: 1,
    zIndex: 1,
    backgroundColor: "#fff"
  }
});

interface Props extends WithStyles<typeof styles> {}

const Footer = ({
                  classes
                }: Props) => {
  const gatsby = <Linkify text={"Gatsby"} link={"https://www.gatsbyjs.org"} />
  return (
    <footer className={classes.container}>
      <Grid
        container
        spacing={1}
        justify={"flex-end"}>
        <Grid item>
          <Typography variant={"caption"}>© {new Date().getFullYear()},  </Typography>
          <Typography variant={"caption"}>
            <Link to={"/"}>Anvesh Arrabochu</Link>
            {"."}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant={"caption"}>
            Built with {gatsby}.
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default withStyles(styles, {withTheme: true})(Footer);