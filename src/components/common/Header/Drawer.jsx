import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';


export default function TemporaryDrawer() {
    const [open, setOpen] = useState(false)




    return (
        <div>


            <IconButton onClick={() => setOpen(true)}>
                <MenuRoundedIcon className='link'/>
            </IconButton>
            <Drawer
                anchor={'right'}
                open={open}
                onClose={() => setOpen(false)}
            >
                <div className='drawer-div'>
                <NavLink className='link' to='/'>Home</NavLink>
           <NavLink className='link' to='/compare'>Compare</NavLink>
           <NavLink className='link' to='/watchlist'>Watchlist</NavLink>
           <NavLink to='/dashboard'>
           <Button text="Dashboard" onClick={()=>{console.log("clicked")}}/>
           </NavLink>
                </div>
            </Drawer>


        </div>
    );
}