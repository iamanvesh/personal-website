import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { createStyles, Grid, Theme, Typography, withStyles, WithStyles } from "@material-ui/core"
import Linkify from "../components/Linkify"

const styles = (theme: Theme) => createStyles({
  container: {
    marginTop: theme.spacing(5)
  }
});

interface Props extends WithStyles<typeof styles> {}

const IndexPage = ({
                     classes
                   }: Props) => {
  const zemoso = <Linkify link={"https://zemosolabs.com"} text={"@ZeMoSoLabs"} />;
  const reactjs = <Linkify text={"React"} link={"https://reactjs.org"} />;
  const android = <Linkify text={"Android"} link={"https://developer.android.com"} />;
  const laanc = <Linkify text={"LAANC"} link={"https://www.faa.gov/uas/programs_partnerships/data_exchange/"} />;

  const github = <Linkify text={"Github"} link={"http://github.com/iamanvesh"}/>;
  const linkedin = <Linkify text={"LinkedIn"} link={"https://www.linkedin.com/in/anvesh-arrabochu"}/>;
  const email = <Linkify text={"Email"} link={"mailto:anvesh.arrabochu@gmail.com"} />;

  return (
    <Layout>
      <SEO title="About" />
      <Grid
        className={classes.container}
        container
        spacing={3}
        direction={"column"}>
        <Grid item>
          <Typography variant={"h6"}>👋 Hi.</Typography>
        </Grid>
        <Grid item>
          <Typography variant={"body1"}>
            I'm Anvesh. I'm a Software Engineer based in Hyderabad, India. I have a passion for
            software development and love to create for Web & Android. While I'm not writing code
            I'm either binging on Netflix or reading. I love to travel and someday I hope I can
            afford to do it full time (read: looking for remote opportunities).
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant={"body1"}>
            I'm well versed with {reactjs} & {android} and can write robust, maintainable &
            fault tolerant code following best practices and architectural patterns such as
            Redux / MVVM / MVC.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant={"body1"}>
            I'm currently working as a Senior Software Engineer {zemoso}, where I get to work
            with some amazing startups from various industries. Right now, I'm building a single page
            application using {reactjs} for an aviation startup, which helps drone operators &
            first responders reserve an airspace and notify the FAA via {laanc}.
          </Typography>
        </Grid>
        <Grid item>
          You can view some of my work on {github}. Reach out to me on {linkedin} or via {email}.
        </Grid>
      </Grid>
    </Layout>
  )
}

export default withStyles(styles, {withTheme: true})(IndexPage);
