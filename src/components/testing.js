import React, {useEffect, useState} from "react";

const Testing = () => {
    // initialize useState
    const [users, setUsers] = useState([]);

    // function for fetching data from api and putting it in setUsers
    const fetchUserData = async () => {
        try {
            const response = await fetch("https://stickynote-api.vercel.app/");
            const data = await response.json();
            console.log(data)
            setUsers(data)
        } catch(error) {
            console.error(error);
        };
    }
    // make fetchUserData() run every time Testing component is called
    useEffect(() => {
        fetchUserData()
    }, [])

    return (
        <div>
            Testing
            <br></br>
            {users.userID}
            <br></br> 
            
            time
        </div>
    )
}
export default Testing;