import React from 'react';
import { Box } from 'grommet';
import * as d3 from 'd3';
import Layout from '../components/layout';


class Index extends React.Component {

  render() {
    return (
      <Layout>
        <br />
        <Box direction='row' align='center'>
          <svg height={200} width={300} id='AnscombesQuartet'></svg>
          <p>hello</p>
        </Box>
      </Layout>
    );
  }
}

export default Index;
