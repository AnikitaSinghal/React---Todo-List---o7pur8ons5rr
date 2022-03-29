import React, { useState } from "react";
import "./../styles/App.css";

function App() 
{
	
    const[list, setList] = useState([]);
    const [input , setInput] = useState("");
	const [edit,setEdit]=useState(false)
	const [editinput,setEditInput]=useState("")
	const [currenteditIndex,setCurrentEditIndex]=useState("")
	let newArr=list;
    return (
    <div id="main">
        <textarea id="task" value={input} onChange={(event)=>{setInput(event.target.value)}} ></textarea>
        <button onClick={()=>{if(input){setList([...list,input]),setInput("")}}} id="button">Add</button>
		{edit?<><textarea value={editinput} onChange={(event)=>{setEditInput(event.target.value)}}></textarea>
		<button onClick={()=>{if(editinput){newArr.splice(currenteditIndex,1),newArr.splice(currenteditIndex,0,editinput),setList([...newArr]),setEdit(false)}}}>Save</button></>:""}
		
		
			{list.map((current,index)=>{return <> <li className="list">{current}</li>
			<button onClick={()=>{newArr.splice(index,1)
			setList([...newArr])}}>Delete</button>
			<button onClick={()=>{setEdit(true),setEditInput(list[index]),setCurrentEditIndex(index)}}>Edit</button></>})}
		
    </div>
    );
}


export default App;