import React,{useState,useEffect} from 'react';
import { Button,FormControl,InputLabel,Input , IconButton } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './Firebase'; // from config file
import firebase from 'firebase'; // actual firebase module
import FlipMove from 'react-flip-move'; 
import ForumIcon from '@material-ui/icons/Forum';
import SendIcon from '@material-ui/icons/Send';

function App() {
  const[input,setInput]= useState('');//react hook
  const[messages,setMessages] = useState([]);//the array will store the messags into an array 
  const[username, setUsername] = useState(''); //setting up variable in react that will disappear when refresh.
  //useEffect => run code on a condition
  
  useEffect(()=>{
    //run once the app component loads.
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot=>{
      //loop out all documents
      //doc.data returns the object message and username.
      setMessages(snapshot.docs.map(doc=>({id:doc.id, message :doc.data()})))
    });
  },[])

  useEffect(() => {
    setUsername(prompt('please enter your name : '));
  }, [])


  const sendMessage=(event)=>{
    event.preventDefault(); // this will prevent any default behaviour.
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    //setMessages([...messages, {username:username, message:input}]);//this will append the all new message to the array
    setInput('');
  }
  return (
    <div className="App">
      <ForumIcon color="primary"  style={{ fontSize: 80 }} />
      <h1>Service Request </h1>
      <h2>Welcome {username}</h2>
      <FlipMove>{
        messages.map(({id,message}) => (
        <Message key={id} username={username} message={message} />
        )) 
      }
      </FlipMove>
      <form className="app_form">
        <FormControl className="app_formControl">
          <InputLabel>Enter a message...</InputLabel>
          <Input className="app_input" type="textbox" id="reqName" value={input} onChange={event=> setInput(event.target.value)}/>
          <IconButton className="app_iconButton" disabled={!input}  variant="contained" color="primary" disableElevation type='submit' onClick={sendMessage}><SendIcon/></IconButton>
        </FormControl>
      </form>
    </div>
  );
}

export default App;
