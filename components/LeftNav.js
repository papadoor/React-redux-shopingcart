import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class DrawerLeft extends React.Component {

render() {
    return (
        <div>
            <Drawer
                docked={false}
                width={200}
                open={this.props.open}
                onRequestChange={this.props.onToggleDrawer}
            >
                <MenuItem >Menu Item</MenuItem>
                <MenuItem >Menu Item 2</MenuItem>
            </Drawer>
        </div>
    );
}
}