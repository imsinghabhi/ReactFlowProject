import React from 'react';
import {
  Drawer, List, ListItem as MuiListItem, ListItemText, Divider,
  FormControl, InputLabel, Select, MenuItem, SelectChangeEvent
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { drawerStyles, listContainerStyle, listItemStyle, formControlStyle } from './style'; // Adjust the path as needed

const ListItem = MuiListItem as React.ComponentType<any>;

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  onAddCircleNode: () => void;
  onAddRhombusNode: () => void;
  onAddRectangle: () => void;
  edgeType?: string;
  onEdgeTypeChange?: (event: SelectChangeEvent<string>) => void;
  onDeleteAllNodes: () => void; 
  onAddComments?: () => void; 
}

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
            <AddIcon />
            <ListItemText primary="Add Circle Node" />
          </ListItem>
          <Divider />
          <ListItem style={listItemStyle} onClick={onAddComments}> 
            <AddIcon />
            <ListItemText primary="Add Comments" />
          </ListItem>
          <Divider />
          <ListItem style={listItemStyle} onClick={onAddRhombusNode}> 
            <AddIcon />
            <ListItemText primary="Add Rhombus Node" />
          </ListItem>
          <Divider />
          <ListItem style={listItemStyle} onClick={onAddRectangle}> 
            <AddIcon />
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
