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
        {/* .filter(user => user.name.first.toLowerCase().includes(props.search)) */}
            {props.emps.map(filteredUser => (
                <tr>
                <th scope="row"><img src={filteredUser.picture.thumbnail} alt="picture of employee" /></th>
                <td>{filteredUser.name.first} {filteredUser.name.last}</td>
                <td>{filteredUser.phone}</td>
                <td>{filteredUser.email}</td>
                </tr>
            ))}

        </tbody>
        </table>
    </div>
)
}

export default Table;