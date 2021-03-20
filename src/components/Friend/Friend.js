import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name, username, id, email} = props.friend;
    const history = useHistory();
    const handleClick = (friendId) => {
        const url =`/friend/${friendId}`;
        history.push(url);
    }
    const friendStyle = {
        border: '2px solid red',
        margin : '30px',
        padding: '15px',
        borderRadius: '20px'
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <h3 style={friendStyle}>Username: {username}</h3>
            <p>Email: {email}</p>

           <button onClick={()=> handleClick(id)}>click me</button>

                {/* alternet system */}

        {/* <Link to={`/friend/${id}`}>Show detail of {id} </Link> */}

                {/* alternet system */}

        {/* <p>ID: <Link to={`/friend/${id}`}>Show detail of {id} </Link></p> */}
               
                {/* alternet system */}

        {/* <Link to={`/friend/${id}`}>
            <button>Show detail of {id}</button>
        </Link> */}

                {/* another alternat */}

        {/* <Link to={`/friend/${id}`}>
            <div>
                <h4>Show detail of {id}</h4>
                <p>Click me</p>
            </div>
        </Link> */}

        </div>
    );
};

export default Friend;