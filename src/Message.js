import React, {forwardRef} from 'react'
import {Card, CardActions, CardContent,Typography} from '@material-ui/core'
import './Message.css';

//forwardRef is an higher order function, wrapping the message with some additional functionality.
const Message = forwardRef(({message, username}, ref) => {
    const isUser = username === message.username;
    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
           <Card className={isUser ? 'message_userCard' : 'message_guestCard'}>
                <CardContent>
                    <Typography color="white" variant="h5" component="h2">
                    {!isUser && `${message.username || 'Unknown guest'} : `} {message.message}
                    </Typography>
                </CardContent>
            </Card> 
        </div>
    )
})

export default Message
