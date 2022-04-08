// import React from 'react'
// import { ListItemText } from '@mui/material'

// export default function Listnav({routes}) {
//   return (
//     <ListItemText
//     primary={routes.name}
//     sx={{ color: (theme) => theme.palette.primary[500] }}
//   />
//   )
// }

import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';

const LisNavItem = ({routes}) => {

  return (
    <ListItem button component={NavLink} to={routes.to} >
      <>
      <ListItemIcon> {routes.icon} </ListItemIcon>
      <ListItemText primary={routes.name} />
      </>
    </ListItem>
  )
}

export default LisNavItem