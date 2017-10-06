import { Grid } from 'material-ui';
import amber from 'material-ui/colors/amber';
import deepPurple from 'material-ui/colors/deepPurple';
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import * as React from 'react';
import { Helmet } from 'react-helmet';

import NavBar from '../components/nav-bar/nav-bar.component';

type Props = {
  children: () => React.ReactNode
}

const TemplateWrapper = ({ children }: Props) => (
  <MuiThemeProvider theme={theme}>
    <div>
      <Helmet
        title="Hallingdata"
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" }
        ]}
      />
      <NavBar />
      <Grid container spacing={0}>
        {children()}
      </Grid>
    </div>
  </MuiThemeProvider>
)

export default TemplateWrapper

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: amber
  }
})
