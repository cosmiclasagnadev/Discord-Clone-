import React from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';

function Sidebar() {
    return (
        <div className='sidebar'>

            <div className="sidebar__top">
                <h3>Cosmic Programmer</h3>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                    <ExpandMoreIcon />
                    <h4>Text Channels</h4>
                    </div>

                    <AddIcon className="sidebar__addChannel"></AddIcon>
                </div>

                <div className="sidebar__channelsList">
                    <SidebarChannel />
                </div>
            </div>

            <div className="sidebar__voice">
                <SignalCellularAltIcon 
                    className="sidebar__voiceIcon"
                    fontSize="large"
                />
            </div>
        </div>
    )
}

export default Sidebar
