import { Box } from '@mui/system';
import { Dashboard } from 'pages/dashboard/Dashboard';
import { MenuOptions } from './Components/MenuOptions';
import { ContainerPopUp } from './Components/ContainerPopUp';
import { useState, useEffect } from 'react';
import { IDashboard } from 'interfaces/IDashboard';
import { ModelForm } from 'shared/components/Model/ModelItem/ModelForm';
import { Input } from 'shared/components/Model/ModelItem/ModelInput';

export const ModelDetail = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const elementInitial:JSX.Element[] = [];
  elementInitial.push(<Input/>);
  const [elements, setElements] = useState<JSX.Element[]>(elementInitial);

  const stylesModelDetail = {
    box:{
      display:'flex', 
      height:'100vh'
    }
  };

  return(
    <Box sx={stylesModelDetail.box}>
      <Dashboard openMenuInitial={openMenu} setOpen={setOpenMenu}/>
      <Box sx={{flexGrow:'0'}}><MenuOptions /></Box>
      <Box sx={{flexGrow:'2'}}>
        <ContainerPopUp setElements={setElements}>
          {elements || []}
        </ContainerPopUp>
      </Box>
    </Box>
  );
};