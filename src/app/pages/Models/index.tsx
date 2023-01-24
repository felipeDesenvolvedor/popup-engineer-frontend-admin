import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Link } from '@mui/material';
import { Box } from '@mui/system';
import { Dashboard } from '../dashboard/Dashboard';
import Paper from '@mui/material/Paper';
import { ModelItem } from '../../shared/components/Model/ModelItem';
import {config} from '../../config';
import { useNavigate } from 'react-router';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

interface IModel{
  popupName: string, 
  popupId:string,
  imgPreview:string
}

export const Models = () => {
  const [lista, setLista] = useState<IModel[]>(config);
  const navigate = useNavigate();

  const handleRedirectModel = (idModel:any) => {

    console.log('Teste');
    navigate(`/modelo/${idModel}`);
  };

  const buildModels = () => {
    return lista.map(listModel => {
      return (
        <React.Fragment key={listModel.popupId}>
          <Grid item xs={4}>
            <Item onClick={() => handleRedirectModel(listModel.popupId)}>
              <ModelItem>
                {'color="inherit"'}
                {listModel.popupName}
              </ModelItem>
            </Item>
          </Grid>
        </React.Fragment>
      );
    });
  };

  return (
    <Box sx={{display:'flex'}}>
      <Dashboard />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {buildModels()}
        </Grid>
      </Box>
    </Box>
  );
};