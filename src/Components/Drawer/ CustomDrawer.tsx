import React, { useState, ChangeEvent } from 'react';
import { Drawer, List, Divider, Box } from '@mui/material';
import { CircleIcon, DiamondIcon, RectangleIcon, CommentIcon, DownloadIcon } from '../../Assests/Icons/index';
import { drawerStyles, listContainerStyle, listItemStyle, typographyStyle, selectStyle, textFieldStyle, addNewWorkflowButtonStyle, buttonContainerStyle, saveButtonStyle, downloadButtonStyle, savedWorkflowsContainerStyle, savedWorkflowsTitleStyle } from './style';
import { DrawerProps } from '../../utils/Interfaces/types';
import CommonButton from '../CommonComponents/CommonButton';
import CommonTypography from '../CommonComponents/CommonTypography';
import CommonTextField from '../CommonComponents/CommonTextField';
import CommonSelect from '../CommonComponents/CommonSelect';
import { edgeTypeOptions } from '../../utils/Constants/EdgeType';

const CustomDrawer: React.FC<DrawerProps> = ({
  open, onClose, onAddCircleNode, onAddRhombusNode, onAddRectangle,
  edgeType, onEdgeTypeChange, onAddComments, onSaveWorkflow,
  onLoadWorkflow, onRemoveWorkflow, savedWorkflows, onDownloadWorkflow, onCreateNewWorkflow
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
          <CommonTypography text="Workflow Editor" variant="h6" sx={typographyStyle} />
          <Divider />

          <CommonButton onClick={onAddCircleNode} sx={listItemStyle} startIcon={<CircleIcon sx={{ color: '#1976d2' }} />}>
            Add Circle Node
          </CommonButton>
          <Divider />

          <CommonButton onClick={onAddComments} sx={listItemStyle} startIcon={<CommentIcon sx={{ color: '#ff9800' }} />}>
            Add Comments
          </CommonButton>
          <Divider />

          <CommonButton onClick={onAddRhombusNode} sx={listItemStyle} startIcon={<DiamondIcon sx={{ color: '#e91e63' }} />}>
            Add Rhombus Node
          </CommonButton>
          <Divider />

          <CommonButton onClick={onAddRectangle} sx={listItemStyle} startIcon={<RectangleIcon sx={{ color: '#4caf50' }} />}>
            Add Rectangle Node
          </CommonButton>
          <Divider />

          <CommonSelect
            label="Edge Type"
            value={edgeType}
            onChange={onEdgeTypeChange}
            options={edgeTypeOptions}
            sx={selectStyle}
          />
          <Divider />

          <CommonTextField
            label="Workflow Name"
            value={workflowName}
            onChange={handleWorkflowNameChange}
            variant="outlined"
            sx={textFieldStyle}
          />
          <Divider />

          <CommonButton
            onClick={() => onCreateNewWorkflow?.(workflowName)}
            variant="contained"
            color="primary"
            sx={addNewWorkflowButtonStyle}
          >
            Add New Workflow
          </CommonButton>

          <Box sx={buttonContainerStyle}>
            <CommonButton
              onClick={() => onSaveWorkflow?.(workflowName)}
              variant="contained"
              color="secondary"
              disabled={!workflowName}
              sx={saveButtonStyle}
            >
              Save
            </CommonButton>

            <CommonButton
              onClick={() => onDownloadWorkflow?.(workflowName)}
              variant="contained"
              disabled={!workflowName || !savedWorkflows.find(w => w.name === workflowName)}
              startIcon={<DownloadIcon />}
              sx={downloadButtonStyle}
            >
              Download
            </CommonButton>
          </Box>

          {savedWorkflows.length > 0 && (
            <>
              <Divider sx={{ marginTop: '6px' }} />
              <CommonTypography text="Saved Workflows" variant="subtitle1" sx={savedWorkflowsTitleStyle} />
              {savedWorkflows.map((workflow) => (
                <Box key={workflow.name} sx={savedWorkflowsContainerStyle}>
                  <CommonTypography text={workflow.name} />
                  <CommonButton variant="outlined" onClick={() => onLoadWorkflow?.(workflow.name)}>
                    Load
                  </CommonButton>
                  <CommonButton variant="outlined" color="error" onClick={() => onRemoveWorkflow?.(workflow.name)}>
                    Delete
                  </CommonButton>
                </Box>
              ))}
            </>
          )}
        </List>
      </Box>
    </Drawer>
  );
};

export default CustomDrawer;
