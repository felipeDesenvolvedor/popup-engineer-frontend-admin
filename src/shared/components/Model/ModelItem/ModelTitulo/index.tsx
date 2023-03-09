import React from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material';

interface ITitulo {
  color:string;
  fontSize:string;
  fontFamily:string;
}

export const Titulo = styled(({styleTitle:ITitulo, text, className}) => <Box className={className}><h3>{text}</h3></Box>)`
  color:${prop => prop.styleTitle.color};
  font-size:${prop => prop.styleTitle.fontSize};
  font-family: ${prop => prop.styleTitle.fontFamily}, sans-serif;
`;