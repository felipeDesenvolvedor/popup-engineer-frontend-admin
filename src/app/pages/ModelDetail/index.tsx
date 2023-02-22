import { Box } from '@mui/system';
import { Dashboard } from '../dashboard/Dashboard';
import { MenuOptions } from './Components/MenuOptions';
import { ContainerPopUp } from './Components/ContainerPopUp';
import { useState, useEffect } from 'react';
import { IDashboard } from '../../interfaces/IDashboard';
import { ModelForm } from '../../shared/components/Model/ModelItem/ModelForm';
import { ModelTitulo } from '../../shared/components/Model/ModelItem/ModelTitulo';
import { ModelSubtitulo } from '../../shared/components/Model/ModelItem/ModelSubtitulo';
import { ModelTexto } from '../../shared/components/Model/ModelItem/ModelTexto';

export const ModelDetail = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const [elements, setElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const elementsMap = [];
    elementsMap.push(<ModelTitulo/>);
    elementsMap.push(<ModelSubtitulo/>);
    elementsMap.push(<ModelTexto/>);
    elementsMap.push(<ModelForm/>);
    setElements(elementsMap);
  }, []);

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
        <ContainerPopUp>
          {elements}
        </ContainerPopUp>
      </Box>
    </Box>
  );
};