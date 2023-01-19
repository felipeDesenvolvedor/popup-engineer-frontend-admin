import { useContext, useEffect, useState } from 'react';
import Popup from './Popup.js';
import { AppConfigContext } from '../../contexts/index';
import { config, defaultConfig } from '../../../config';

const Overlay = props => {
  const { configStyle } = useContext(AppConfigContext);
  return (
    <div className="overlay" style={configStyle.overlay}>{props.children}</div>
  );
};

const OverlayContainer = () => {

  const [configStyle, setConfigStyle] = useState();

  useEffect(() => {
    setConfigStyle(config || defaultConfig);
  }, []);

  useEffect(() => {
    console.log(configStyle);
  }, [configStyle]);

  return (
    <>
      {configStyle && 
      <AppConfigContext.Provider value={{configStyle, setConfigStyle}}>
        <Overlay>
          <Popup/>
        </Overlay>
      </AppConfigContext.Provider>
      }
    </>
  ); 
};

export default OverlayContainer;