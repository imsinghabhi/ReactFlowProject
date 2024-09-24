

import React, { useState, ChangeEvent } from 'react';
import {
  Drawer, List, ListItem as MuiListItem, ListItemText, Divider,
  FormControl, InputLabel, Select, MenuItem, TextField, Button, Typography, Box
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import CircleIcon from '@mui/icons-material/Circle';
import DiamondIcon from '@mui/icons-material/Diamond';
import RectangleIcon from '@mui/icons-material/Rectangle';
import CommentIcon from '@mui/icons-material/Comment';
import { drawerStyles, listContainerStyle, listItemStyle, formControlStyle, buttonStyle, btnStyle } from './style'; // Adjusted import for buttonStyle
import { DrawerProps } from '../../utils/types/interfaces';

const ListItem = MuiListItem as React.ComponentType<any>;

const CustomDrawer: React.FC<DrawerProps> = ({
  open, onClose, onAddCircleNode, onAddRhombusNode, onAddRectangle,
  edgeType, onEdgeTypeChange, onDeleteAllNodes, onAddComments,
  onSaveWorkflow, onLoadWorkflow, onRemoveWorkflow, savedWorkflows, onDownloadWorkflow, onCreateNewWorkflow
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
      <Box sx={listContainerStyle}>
        <List>
          <Typography variant="h6" sx={{ padding: '1px', textAlign: 'center' }}>
            Workflow Editor
          </Typography>
          <Divider />

          <ListItem sx={listItemStyle} onClick={onAddCircleNode}>
            <CircleIcon sx={{ marginRight: '8px', color: '#1976d2' }} />
            <ListItemText primary="Add Circle Node" />
          </ListItem>
          <Divider />
          <ListItem sx={listItemStyle} onClick={onAddComments}>
            <CommentIcon sx={{ marginRight: '8px', color: '#ff9800' }} />
            <ListItemText primary="Add Comments" />
          </ListItem>
          <Divider />
          <ListItem sx={listItemStyle} onClick={onAddRhombusNode}>
            <DiamondIcon sx={{ marginRight: '8px', color: '#e91e63' }} />
            <ListItemText primary="Add Rhombus Node" />
          </ListItem>
          <Divider />
          <ListItem sx={listItemStyle} onClick={onAddRectangle}>
            <RectangleIcon sx={{ marginRight: '8px', color: '#4caf50' }} />
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
                <MenuItem value="step">Step</MenuItem>
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
              variant="outlined"
              sx={{ marginBottom: '6px' }}
            />
          </ListItem>

          <ListItem sx={{ justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => onCreateNewWorkflow?.(workflowName)}
              sx={buttonStyle}
            >
              Add New Workflow
            </Button>
          </ListItem>

          <ListItem sx={{ justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => onSaveWorkflow?.(workflowName)}
              disabled={!workflowName}
              sx={btnStyle}
            >
              Save
            </Button>
            <Button
              variant="contained"
              onClick={() => onDownloadWorkflow?.(workflowName)}
              disabled={!workflowName || !savedWorkflows.find(w => w.name === workflowName)}
              startIcon={<DownloadIcon />}
              sx={{ ...btnStyle, backgroundColor: '#4caf50', color: '#fff' }}
            >
              Download
            </Button>
          </ListItem>

          {savedWorkflows.length > 0 && (
            <>
              <Divider sx={{ marginTop: '6px' }} />
              <Typography variant="subtitle1" sx={{ textAlign: 'center', marginTop: '6px' }}>
                Saved Workflows
              </Typography>
              {savedWorkflows.map((workflow) => (
                <ListItem key={workflow.name} sx={{ justifyContent: 'space-between' }}>
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
      </Box>
    </Drawer>
  );
};

export default CustomDrawer;
