import { Button } from '@mui/material'
import React from 'react'

const footerStyle = {
  background: (theme) => theme.palette.primary['A700'],
  color: (theme) => theme.palette.error['A100']
}

const footerBotom = () => {
  return(
    <Button sx={footerStyle}>
      this is the best footer around the world
    </Button>
  )
}

export default footerBotom;