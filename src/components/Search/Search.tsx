import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
//mui
import TextField from "@mui/material/TextField";
//component
import { userActions } from '../../redux/slice/userSlice';


export default function Search() {
    const [userInputs, setUserInput] = useState<string>("");

    const dispatch = useDispatch();
    function getValue(event: React.ChangeEvent<HTMLInputElement>) {
        const result = event.target.value;
        setUserInput(result);

        dispatch(userActions.getUserInput(userInputs));
    }

    return (
        <div className="Search_Form">
            <TextField
                id="standard-search"
                label="please enter country name"
                variant="standard"
                onChange={getValue}
                value={userInputs}
            />
        </div>
    );
}


