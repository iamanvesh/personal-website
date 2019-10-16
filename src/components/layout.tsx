/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Header from "./header"
import "./layout.css"
import Footer from "./footer"
import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core"

const styles = (theme: Theme) => createStyles({
  container: {
    width: "80%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3)
    }
  },
});

interface Props extends WithStyles<typeof styles> {
  children: React.ReactNode,
}

const Layout = ({
                  children,
                  classes
                }: Props) => (
  <>
    <Header />
    <div className={classes.container}>
      <main>{children}</main>
    </div>
    <Footer />
  </>
)

export default withStyles(styles, {withTheme: true})(Layout);
