import React from 'react';
import { Box, Heading } from 'grommet';

const Header = () => (
  <Box pad='medium' align='center' justify='between' background='#1e88e5'>
    <Box direction='row' justify='between' gap='small'>
      <Heading margin='none' level='3'style={{ font: "25px Roboto" }}>
      Mutual Fund Performance
      </Heading>
    </Box>
  </Box>
);

export default Header;
