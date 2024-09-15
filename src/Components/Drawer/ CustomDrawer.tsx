
import React, { useState, ChangeEvent } from 'react';
import {
  Drawer, List, ListItem as MuiListItem, ListItemText, Divider,
  FormControl, InputLabel, Select, MenuItem, TextField, Button
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download'; 
import CircleIcon from '@mui/icons-material/Circle';
import DiamondIcon from '@mui/icons-material/Diamond';
import RectangleIcon from '@mui/icons-material/Rectangle';
import CommentIcon from '@mui/icons-material/Comment';
import { drawerStyles, listContainerStyle, listItemStyle, formControlStyle } from './style';
import { DrawerProps } from '../../utils/types/interfaces';

const ListItem = MuiListItem as React.ComponentType<any>;

const CustomDrawer: React.FC<DrawerProps> = ({
  open, onClose, onAddCircleNode, onAddRhombusNode, onAddRectangle,
  edgeType, onEdgeTypeChange, onDeleteAllNodes, onAddComments, 
  onSaveWorkflow, onLoadWorkflow, onRemoveWorkflow, savedWorkflows, onDownloadWorkflow,
}) => {
  const [workflowName, setWorkflowName] = useState<string>('');

  const handleWorkflowNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWorkflowName(e.target.value);
  };

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
                <MenuItem value="step"> Step</MenuItem>
              </Select>
            </FormControl>
          </ListItem>

          <Divider />

          <ListItem>
            <TextField
              fullWidth
              label="Workflow Name"
              value={workflowName}
              onChange={handleWorkflowNameChange}
            />
          </ListItem>

          <ListItem>
            <Button
              variant="contained"
              onClick={() => onSaveWorkflow?.(workflowName)}
              disabled={!workflowName}
              style={{ marginRight: '8px' }}
            >
              Save Workflow
            </Button>
            <Button
              variant="contained"
              onClick={() => onDownloadWorkflow?.(workflowName)} 
              disabled={!workflowName || !savedWorkflows.find(w => w.name === workflowName)}
              startIcon={<DownloadIcon />}  
              style={{ backgroundColor: '#4caf50', color: '#fff' }}  
            >
              Download Workflow
            </Button>
          </ListItem>
          
          <ListItem>
            <Button variant="contained" onClick={onDeleteAllNodes} >
              Delete All Nodes
            </Button>
          </ListItem>
          
          {savedWorkflows.length > 0 && (
            <>
              <Divider />
              <ListItemText primary="Saved Workflows" />
              {savedWorkflows.map((workflow) => (
                <ListItem key={workflow.name}>
                  <ListItemText primary={workflow.name} />
                  <Button variant="outlined" onClick={() => onLoadWorkflow?.(workflow.name)}>
                    Load
                  </Button>
                  <Button variant="outlined" color="error" onClick={() => onRemoveWorkflow?.(workflow.name)}>
                    Delete
                  </Button>
                </ListItem>
              ))}
            </>
          )}
        </List>
      </div>
    </Drawer>
  );
};

export default CustomDrawer;
