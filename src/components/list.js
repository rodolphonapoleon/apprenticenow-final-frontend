import { useState } from "react";

function List(){
    const [response, setResponse] = useState([]);

    const getList =() => {
        fetch("http://localhost:8080/api/student")
        .then((response) => response.json())
        .then((data) => {
            setResponse(data)
        });
    }
    return (
    <div className="m-5">
    <h1>Students Enrolled</h1>
     <button onClick={() => getList()}>All Students</button>
     {response.map((student) => (<div key={student.studentId}>{student.studentFirstName}</div>))}
    </div>)
}

export default List;