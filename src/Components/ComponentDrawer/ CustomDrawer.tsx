import React, { useState, ChangeEvent } from 'react';
import { Drawer, List, Divider, Box } from '@mui/material';
import { 
  CircleIcon, 
  DiamondIcon, 
  RectangleIcon, 
  CommentIcon, 
  DownloadIcon 
} from '../../Assests/Icons'; 
import { 
  drawerStyles, 
  listContainerStyle, 
  listItemStyle, 
  typographyStyle, 
  selectStyle, 
  textFieldStyle, 
  addNewWorkflowButtonStyle, 
  buttonContainerStyle, 
  saveButtonStyle, 
  downloadButtonStyle, 
  savedWorkflowsContainerStyle, 
  savedWorkflowsTitleStyle 
} from './StylesDrawer';
import { DrawerProps } from '../../Utils/Interfaces/Types';
import CommonButton from '../CommonComponents/ComponentButton';
import CommonTypography from '../CommonComponents/ComponentTypography';
import CommonTextField from '../CommonComponents/ComponentTextField';
import CommonSelect from '../CommonComponents/ComponentSelect';
import { edgeTypeOptions } from '../../Utils/Constants/ConstantEdgeType';
import { theme } from '../../Utils/Themes/Theme'; 
import {
  workflowEditorText,
  addCircleNodeText,
  addCommentsText,
  addRhombusNodeText,
  addRectangleNodeText,
  edgeTypeText,
  workflowNameText,
  addNewWorkflowText,
  saveText,
  downloadText,
  savedWorkflowsText,
  loadText,
  deleteText,
} from '../../Utils/Translation/Translations';

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
          <CommonTypography text={workflowEditorText} variant="h6" sx={typographyStyle} />
          <Divider />

          <CommonButton 
            onClick={onAddCircleNode} 
            sx={listItemStyle} 
            startIcon={<CircleIcon sx={{ color: theme.colors.primary }} />} 
          >
            {addCircleNodeText}
          </CommonButton>
          <Divider />

          <CommonButton 
            onClick={onAddComments} 
            sx={listItemStyle} 
            startIcon={<CommentIcon sx={{ color: theme.colors.secondary }} />} 
          >
            {addCommentsText}
          </CommonButton>
          <Divider />

          <CommonButton 
            onClick={onAddRhombusNode} 
            sx={listItemStyle} 
            startIcon={<DiamondIcon sx={{ color: theme.colors.error }} />} 
          >
            {addRhombusNodeText}
          </CommonButton>
          <Divider />

          <CommonButton 
            onClick={onAddRectangle} 
            sx={listItemStyle} 
            startIcon={<RectangleIcon sx={{ color: theme.colors.success }} />} 
          >
            {addRectangleNodeText}
          </CommonButton>
          <Divider />

          <CommonSelect
            label={edgeTypeText}
            value={edgeType}
            onChange={onEdgeTypeChange}
            options={edgeTypeOptions}
            sx={selectStyle}
          />
          <Divider />

          <CommonTextField
            label={workflowNameText}
            value={workflowName}
            onChange={handleWorkflowNameChange}
            variant="outlined"
            sx={textFieldStyle}
          />
      

          <CommonButton
            onClick={() => onCreateNewWorkflow?.(workflowName)}
            variant="contained"
            color="primary"
            sx={addNewWorkflowButtonStyle}
          >
            {addNewWorkflowText}
          </CommonButton>

          <Box sx={buttonContainerStyle}>
            <CommonButton
              onClick={() => onSaveWorkflow?.(workflowName)}
              variant="contained"
              color="secondary"
              disabled={!workflowName}
              sx={saveButtonStyle}
            >
              {saveText}
            </CommonButton>

            <CommonButton
              onClick={() => onDownloadWorkflow?.(workflowName)}
              variant="contained"
              disabled={!workflowName || !savedWorkflows.find(w => w.name === workflowName)}
              startIcon={<DownloadIcon />}
              sx={downloadButtonStyle}
            >
              {downloadText}
            </CommonButton>
          </Box>

          {savedWorkflows.length > 0 && (
  <>
    <Divider sx={{ marginTop: '6px' }} />
    <CommonTypography text={savedWorkflowsText} variant="subtitle1" sx={savedWorkflowsTitleStyle} />
    {savedWorkflows.map(({ name }) => ( 
      <Box key={name} sx={savedWorkflowsContainerStyle}>
        <CommonTypography text={name} />
        <Box>
          <CommonButton variant="outlined" onClick={() => onLoadWorkflow?.(name)}>
            {loadText}
          </CommonButton>
          <CommonButton variant="outlined" color="error" onClick={() => onRemoveWorkflow?.(name)}>
            {deleteText}
          </CommonButton>
        </Box>
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
