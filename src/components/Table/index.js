import React from "react";

function Table(props) {
return (
    <div className="container">
        <table class="table">
        <thead>
            <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone #</th>
            <th scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            {props.emps.map(user => (
                <tr>
                <th scope="row"><img src={user.picture.thumbnail} alt="picture of employee" /></th>
                <td>{user.name.first} {user.name.last}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                </tr>
            ))}
            
        </tbody>
        </table>
    </div>
)
}

export default Table;