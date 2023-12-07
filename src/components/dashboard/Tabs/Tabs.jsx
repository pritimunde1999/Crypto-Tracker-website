import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import Grid from '../Grid/Grid';
import "./Tabs.css"
import List from '../List/List';



export default function Tabs({coins}) {
  const [value, setValue] = useState('grid');
 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color : 'var(--white)',
    width : '50vw',
    fontSize : '1.2rem',
    fontWeight : 600,
    fontFamily : 'Inter',
    textTransform : 'capitalize'
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
     
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} variant='fullWidth'>
            <Tab label="Grid" value="grid" sx={style}/>
            <Tab label="List" value="list" sx={style}/>
          </TabList>
        </Box>
        <TabPanel value="grid" className='grid-container'>
            {
                coins.map((coin,i)=>(
                    <Grid coin={coin} key={i}/>
                ))
            }
        </TabPanel>
        <TabPanel value="list">
            <table>
            {
                coins.map((coin,i)=>(
                   <List coin={coin} key={i} />
                ))
            }
            </table>
        </TabPanel>
      </TabContext>
    </Box>
  );
}