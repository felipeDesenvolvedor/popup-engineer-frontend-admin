import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { Dashboard } from '../dashboard/Dashboard';
import Paper from '@mui/material/Paper';
import { ModelItem } from '../../shared/components/Model/ModelItem';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const Models = () => {
  return (
    <Box sx={{display:'flex'}}>
      <Dashboard />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item><ModelItem/></Item>
          </Grid>
          <Grid item xs={4}>
            <Item><ModelItem/></Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};