import React, {useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {countryActions} from "../../redux/slice/country";

export default function SearchForm(){
    /*const[term,setTerm]= useState('');
    const submitHandler= (e:React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
    }*/

       const [userInput,setUserInput]=useState('')
    const dispatch=useDispatch();
       const countryList= useSelector((state:RootState)=> state.country.countries);
         console.log(countryList,'countrylist')
    const onChangeHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setUserInput(event.target.value);
        searchHandler();

        console.log(userInput,'userInput')
    };

    const searchHandler = ()=>{
        const result = countryList.filter((countries)=>{
                countries.name.common.toLowerCase().includes(userInput.toLowerCase())
        });
        console.log(result, "result");

        dispatch(countryActions.getCountryData(result))
    }


    //{/*onSubmit={submitHandler}*/}
    return (
        <div>
            {/*//create a search form*/}
             <div className='search-bar'>

                <form >
                    <input
                        type='text'
                        value={userInput}
                        placeholder='Search country'
                        onChange={/*(event => setTerm(event.target.value))*/ onChangeHandler}/>
                    <button type='submit'>Search</button>
                </form>

            </div>
        </div>
    )
}
