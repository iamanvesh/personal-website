import React from "react"
import Layout from "../components/layout"
import { createStyles, Theme, Typography, withStyles, WithStyles } from "@material-ui/core"


const styles = (theme: Theme) => createStyles({});

interface Props extends WithStyles<typeof styles> {}

const Work = ({}: Props) => (
  <Layout>
    <Typography variant={"h6"}>WIP</Typography>
  </Layout>
);

export default withStyles(styles, {withTheme: true})(Work);