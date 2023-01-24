import { Stack, Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import React, { useState } from 'react'

export const MuiButton = () => {
    const [format , setformat] = useState([])
    const handleFormateChange = (updatedFormat)=>{
        setformat(updatedFormat)
    }
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button variant='text' href='https://google.com'>text</Button>
            <Button variant='contained'>contained</Button>
            <Button variant='outlined'>outlined</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='contained' color='primary'>primary </Button>
            <Button variant='contained' color='secondary'>secondary </Button>
            <Button variant='contained' color='error'>error </Button>
        </Stack>
        <Stack spacing={2} direction='row' display='block'>
            <Button variant='contained' size='small' >small</Button>
            <Button variant='contained' size='medium' >medium</Button>
            <Button variant='contained' size='large' >large</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='contained' startIcon={<SendIcon/>} disableRipple onClick={()=>alert('clicked')}>send</Button>
            <Button variant='contained' endIcon={<SendIcon/>} disableElevation>send</Button>
            <IconButton aria-label='send' ><SendIcon/></IconButton>
        </Stack>
        <Stack direction='row'>
            <ButtonGroup variant='contained' color='secondary' orientation='vertical'>
                <Button >Left</Button>
                <Button >Center</Button>
                <Button >Right</Button>
            </ButtonGroup>
        </Stack>
        <Stack direction='row'>
            <ToggleButtonGroup aria-label='text formatting' value={format} onChange={handleFormateChange}>
                <ToggleButton aria-label='bold'><FormatBoldIcon/></ToggleButton>
                <ToggleButton aria-label='italic'><FormatItalicIcon/></ToggleButton>
                <ToggleButton aria-label='underline'><FormatUnderlinedIcon/></ToggleButton>
            </ToggleButtonGroup>

        </Stack>
    </Stack>
  )
}
