import React from "react"
import { createStyles, Grid, Theme, Typography, WithStyles, withStyles } from "@material-ui/core"
import { Link } from "gatsby"


const styles = (theme: Theme) => createStyles({
  container: {
    position: "absolute" as "absolute",
    bottom: theme.spacing(1),
    right: theme.spacing(2),
    width: "100%",
    display: "flex",
    flex: 1
  }
});

interface Props extends WithStyles<typeof styles> {}

const Footer = ({
                  classes
                }: Props) => {
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
            Built with {` `}
            <a href="https://www.gatsbyjs.org" target={"_blank"} rel={"noreferrer noopener"}>
              Gatsby
            </a>
            {"."}
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default withStyles(styles, {withTheme: true})(Footer);