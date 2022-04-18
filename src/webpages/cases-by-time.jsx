import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TimeLineDaily from '../components/timelineDaily';
import TimeLineTotal from '../components/timelineTotal';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <>
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
        </>
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

export default function CasesByTime() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (

        <Box sx={{ width: '100%', margin: '0px auto', mt: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <Tabs sx={{ margin: '0px auto' }} value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Total" {...a11yProps(0)} />
                    <Tab label="Daily" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <TimeLineTotal />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TimeLineDaily />
            </TabPanel>
        </Box>
    )
}
