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
import { WithStyles, withStyles } from "@material-ui/core"

const styles = {
  container: {
    width: "90%",
    margin: "auto"
  }
};

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
