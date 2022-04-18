import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ConfirmedGraph from './subcomponents/charts-total/confirmed';
import RecoveredGraph from './subcomponents/charts-total/recovered';
import DeceasedGraph from './subcomponents/charts-total/deceased';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TimeLineTotal() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%', margin: '0px auto', mt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
        <Tabs sx={{ margin: '0px auto' }} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{
            textTransform: 'none', color: 'red',
            '&:hover': {
              color: 'red',
            },
            '&.Mui-selected': {
              color: 'red',
            },
          }} label="Active" {...a11yProps(0)} />
          <Tab sx={{
            textTransform: 'none', color: 'green',
            '&:hover': {
              color: 'green',
            },
            '&.Mui-selected': {
              color: 'green',
            },
          }} label="Recovered" {...a11yProps(1)} />
          <Tab sx={{
            textTransform: 'none', color: 'black',
            '&:hover': {
              color: 'black',
            },
            '&.Mui-selected': {
              color: 'black',
            },
          }} label="Deceased" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ConfirmedGraph />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RecoveredGraph />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DeceasedGraph />
      </TabPanel>
    </Box>
  );
}

export default TimeLineTotal;
