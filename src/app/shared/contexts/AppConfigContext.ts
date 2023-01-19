import { createContext } from 'react';
import { defaultConfig } from '../../config/defaultConfig';

export const AppConfigContext = createContext(defaultConfig);
AppConfigContext.displayName = 'AppConfigContext';