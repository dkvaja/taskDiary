import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Tasklist from '../components/Tasklist'

export default function Dashboard() {
    const [tasklist, setTaskList] = useState([]);
    const [seenTaskList, setSeenTaskList] = useState([]);
    const handleAddTaskInList = (obj) => {
        console.log(obj);
        setTaskList([...tasklist, obj]);
    }
    const handleSeenTaskList = (arr) => {
        setSeenTaskList([...seenTaskList, ...arr]);
    }
    return (
        <>
            <Switch>
                <Route exact path='/' component={() => <Welcome handleAddTaskInList={handleAddTaskInList} tasklist={tasklist} handleSeenTaskList={handleSeenTaskList} />} />
                <Route path='/showtask' component={() => <Tasklist seenTaskList={seenTaskList} />} />
            </Switch>
        </>
    )
}
