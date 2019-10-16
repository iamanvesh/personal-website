import { Link } from "gatsby"
import React from "react"
import { Grid, Theme, WithStyles, withStyles } from "@material-ui/core"


const styles = {
  gridContainer: {
    width: "100%",
    display: "flex",
    flex: 1
  },
  link: {
    textDecoration: 'none'
  }
};

interface Props extends WithStyles<typeof styles> {
  theme: Theme
}

const Header = ({
                  theme,
                  classes
                } : Props) => {

  return (
    <header>
      <div className={classes.gridContainer}>
        <Grid
          container
          justify={"flex-end"}
          spacing={4}
          alignContent={"space-between"}>
          <Grid item>
            <Link to={"/"} className={classes.link}>About</Link>
          </Grid>
          <Grid item>
            <Link to={"/"} className={classes.link}>Work</Link>
          </Grid>
            <Grid item>
              <Link to={"/"} className={classes.link}>Blog</Link>
            </Grid>
        </Grid>
      </div>
    </header>
  );
}

export default withStyles(styles, {withTheme: true})(Header);
