import React from 'react'
import DisplayTodos from './DisplayTodos'
import {NavLink} from 'react-router-dom'


const Home = () => {
    return (
        <>

            <div className="container mt-4">
                <NavLink to='/create'>

                    <button type="" name="addtask" id="addtask" className="btn btn-info btn-block" value="addtask">Add Task</button>
                </NavLink>
            </div>
            <DisplayTodos/>
        </>
    )
}

export default Home