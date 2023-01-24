import React from 'react'
import {Typography} from '@mui/material'

const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>H1 heading</Typography>
        <Typography variant='h2'>H2 heading</Typography>
        <Typography variant='h3' component='h1'>H3 heading</Typography>
        <Typography variant='h3'>H3 heading</Typography>
        <Typography variant='h4'>H4 heading</Typography>
        <Typography variant='h4' component='h1'>H3 heading</Typography>
        <Typography variant='h5'>H5 heading</Typography>
        <Typography variant='h6'>H6 heading</Typography>

        <Typography variant='subtitle1'>H1 heading</Typography>
        <Typography variant='subtitle2'>H1 heading</Typography>
    </div>
  )
}

export default MuiTypography