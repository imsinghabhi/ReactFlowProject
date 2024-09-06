import React from 'react';
import {
  Drawer, List, ListItem as MuiListItem, ListItemText, Divider,
  FormControl, InputLabel, Select, MenuItem, SelectChangeEvent
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import DiamondIcon from '@mui/icons-material/Diamond';
import RectangleIcon from '@mui/icons-material/Rectangle';
import CommentIcon from '@mui/icons-material/Comment';
import { drawerStyles, listContainerStyle, listItemStyle, formControlStyle } from './style';
import { DrawerProps } from '../../utils/types/interfaces';

const ListItem = MuiListItem as React.ComponentType<any>;

const CustomDrawer: React.FC<DrawerProps> = ({
  open, onClose, onAddCircleNode, onAddRhombusNode, onAddRectangle,
  edgeType, onEdgeTypeChange, onDeleteAllNodes, onAddComments 
}) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      variant="persistent"
      sx={drawerStyles}
    >
      <div style={listContainerStyle}>
        <List>
          <ListItem style={listItemStyle} onClick={onAddCircleNode}> 
            <CircleIcon />
            <ListItemText primary="Add Circle Node" />
          </ListItem>
          <Divider />
          <ListItem style={listItemStyle} onClick={onAddComments}> 
            <CommentIcon />
            <ListItemText primary="Add Comments" />
          </ListItem>
          <Divider />
          <ListItem style={listItemStyle} onClick={onAddRhombusNode}> 
            <DiamondIcon />
            <ListItemText primary="Add Rhombus Node" />
          </ListItem>
          <Divider />
          <ListItem style={listItemStyle} onClick={onAddRectangle}> 
            <RectangleIcon />
            <ListItemText primary="Add Rectangle Node" />
          </ListItem>
          <Divider />
          <ListItem>
            <FormControl fullWidth sx={formControlStyle}> 
              <InputLabel variant="outlined" shrink>
                Edge Type
              </InputLabel>
              <Select
                value={edgeType}
                onChange={onEdgeTypeChange}
                fullWidth
                label="Edge Type"
                variant="outlined" 
              >
                <MenuItem value="default">Default</MenuItem>
                <MenuItem value="straight">Straight</MenuItem>
                <MenuItem value="smoothstep">Smooth Step</MenuItem>
              </Select>
            </FormControl>
          </ListItem>
          <Divider />
        </List>
      </div>
    </Drawer>
  );
};

export default CustomDrawer;