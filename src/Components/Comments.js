import { eventListeners } from '@popperjs/core';
import React, { useState, useEffect } from 'react';


function Comments(props) {

    var [Comments, setComments] = useState([]);
    const [inputValue, setInputValue] = useState('');


    const handleLikes = (index) => {
        if (Comments[index].call == 0) {
            const newComments = [...Comments];
            newComments[index].upVotes++;
            newComments[index].call++;

            setComments(newComments);
        }
        else
            return;
    };


    function ViewComments(props) {
        const commentList = Comments.map((comment, index) => {
            return (
                <li className="comment">{comment.Comment} <button className="Upvote" onClick={() => handleLikes(index)}>{comment.upVotes}</button></li>

            )
        }
        )
        return (
            <ul style={{ listStyleType: "none" }}>
                {commentList}
            </ul>
        )
    }


    function handleAddComment(props) {
        if (inputValue == '') {
            return;
        }
        else {
            const newComment = {
                Comment: inputValue,
                upVotes: 0,
                call: 0,
            }
            const newComments = [...Comments, newComment];
            setComments(newComments);
            setInputValue('');
        }
    }


    return (
        <ul style={{ listStyleType: "none" }}>

            <li>
                <form>
                    <input type="text" placeholder='Add Comment' onChange={(event) => setInputValue(event.target.value)} />
                    <button type="reset" onClick={() => handleAddComment()}>+</button>
                </form>
            </li>

            <ViewComments />


        </ul >
    );
}



export default Comments
