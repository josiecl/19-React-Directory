import React from "react";

function SearchBar(props) {
    return (
        <div className="container">
            <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Enter Employee Name</span>
            </div>
            <input type="text" class="form-control" value={props.search} onChange={props.handleInputChange} name="search" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
            </div>
        </div>
    )
}

export default SearchBar;