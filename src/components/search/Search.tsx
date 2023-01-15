import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { userActions } from '../../redux/slice/userSlice';


import TextField from "@mui/material/TextField";

export default function Search() {
    const [userInputs, setUserInput] = useState<string>("");

    const dispatch = useDispatch();
    function getValue(event: React.ChangeEvent<HTMLInputElement>) {
        const result = event.target.value;
        setUserInput(result);

        dispatch(userActions.getUserInput(userInputs));
    }
    function searchHandler() {
        setUserInput("");
        dispatch(userActions.getUserInput(userInputs));
    }

    function key(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.keyCode === 1) {
            searchHandler();
        }
    }
    return (
        <div className="Search_Form">
            <TextField
                id="standard-search"
                label="Enter country name"
                variant="standard"
                onChange={getValue}
                value={userInputs}
            />
        </div>
    );
}


