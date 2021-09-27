import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import { Button, Stack, Typography, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Tasklist from '../components/Tasklist';

export default function Welcome({ handleAddTaskInList, tasklist, handleSeenTaskList }) {
    const [isAddTaskOpen, setIsAddTaskOpen] = useState(false)
    const [isGeneratorOpen, setIsGeneratorOpen] = useState(false)
    const [task, setTask] = useState('');
    const [generated, setGenerated] = useState('');
    console.log("tasklist", tasklist, tasklist.length)

    useEffect(() => {
        console.log('i am change', generated);
    }, [generated])

    const handleTaskChange = (e) => {
        setTask(e.target.value);
    }
    const handleClose = () => {
        setIsAddTaskOpen(false);
    };
    const closeGenerator = () => {
        setIsGeneratorOpen(false);
    };
    const handleAddTask = async () => {
        setTimeout(handleAddTaskInList({
            id: Math.round(Math.random() * 100000),
            description: task,
            createdOn: new Date().toJSON()
        }), 0)
        setIsAddTaskOpen(false);
        setTask('');
    }
    const updateTask = (ids) => {
        const seenTasks = tasklist.filter((task) => task.id === tasklist[ids].id);
        console.log("seenTask", seenTasks, ids);
        handleSeenTaskList(seenTasks)
    }
    const generateTask = () => {
        if (tasklist && tasklist.length > 0) {
            let rid = Math.round(Math.random() * (tasklist.length - 1));
            console.log(tasklist[rid].id);
            setGenerated(tasklist[rid].description);
            setIsGeneratorOpen(true);
            // updateTask(rid);
        }
    }
    return (
        <Container maxWidth={false} sx={{
            display: "flex",
            pt: '20vh',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: ' rgba(66, 165, 246, 0.3)',
            minHeight: '100vh',
        }} >
            <Dialog open={isAddTaskOpen} onClose={handleClose}>
                <DialogTitle sx={{ textAlign: 'center', fontSize: '1.5rem', color: 'text.primary', fontWeight: 'bold' }}>Add Task</DialogTitle>
                <DialogContent>
                    <TextField id="outlined-basic" margin="dense" autoFocus placeholder="Add Task Description" value={task} onChange={handleTaskChange} variant="outlined" autoComplete="off" fullWidth />
                </DialogContent>
                <DialogActions sx={{ margin: 'auto' }}>
                    <Button onClick={handleAddTask} disabled={!task} variant='contained' >Add Task</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={isGeneratorOpen} onClose={handleClose}>
                <DialogTitle sx={{ textAlign: 'center', fontSize: '1.5rem', color: 'text.primary', fontWeight: 'bold' }}>Generated Task</DialogTitle>
                <DialogContent sx={{ m: 'auto' }} >
                    <Typography variant={'p'} align='center' >
                        {!!generated && generated}
                    </Typography>
                </DialogContent>
                <DialogActions sx={{ margin: 'auto' }}>
                    <Button onClick={closeGenerator} variant='contained' >Okay</Button>
                </DialogActions>
            </Dialog>
            <Typography variant={'h3'} align='center' fontWeight='bold' color='text.primary' gutterBottom >
                Welcome to the
                <Typography variant={'h4'} align='center' fontWeight='bold' bgcolor='white' borderRadius={2} p={1} color='primary' >
                    Task Diary
                </Typography>
            </Typography>
            <Stack direction='row' direction={{ xs: 'column', md: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} mt={10} >
                <Button onClick={() => setIsAddTaskOpen(true)} variant="contained" sx={{
                    px: 4,
                    py: 2,
                    fontSize: 30
                }}  >Add Task</Button>
                <Button variant="contained" sx={{
                    px: 4,
                    py: 2,
                    fontSize: 30
                }}
                    onClick={generateTask}
                >Fetch Task</Button>
                <Button variant="contained" component={Link} sx={{
                    px: 4,
                    py: 2,
                    fontSize: 30
                }}
                    to='/showtask'>Show Seen Task</Button>
            </Stack>
        </Container>
    )
}
