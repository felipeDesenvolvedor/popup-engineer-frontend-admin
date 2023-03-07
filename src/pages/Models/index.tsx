import React, {useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Link } from '@mui/material';
import { Box } from '@mui/system';
import { Dashboard } from 'pages/dashboard/Dashboard';
import Paper from '@mui/material/Paper';
import { ModelItem } from 'shared/components/Model/ModelItem';
import {config} from 'config';
import { useNavigate } from 'react-router';
import { ControllersModels } from 'controllers/ControllersModels';
import { IModel } from 'interfaces/IModel';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const controllersModels = new ControllersModels();
console.log();

export const Models = () => {
  const [lista, setLista] = useState<IModel[]>([]);
  const [openMenu, setOpenMenu] = useState(true);
  const navigate = useNavigate();

  const handleRedirectModel = (idModel:any) => {
    navigate(`/modelo/${idModel}`);
  };

  useEffect(() => {
    setLista(controllersModels.buscarModels());
  }, []);

  const buildModels = () => {
    return lista.map(listModel => {
      return (
        <React.Fragment key={listModel.popupId}>
          <Grid item xs={4}>
            <Item onClick={() => handleRedirectModel(listModel.popupId)}>
              <ModelItem setElements={() => console.log('')}>
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
      <Dashboard openMenuInitial={openMenu} setOpen={() => false}/>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {buildModels()}
        </Grid>
      </Box>
    </Box>
  );
};