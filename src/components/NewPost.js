import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NewPost() {
    const [title, setTitle] = useState('');
    const [userId, setUserId] = useState('');
    const [body, setBody] = useState('');

    const history = useHistory();

    const publish = (e) => {
        e.preventDefault();

        const data = { title, userId, body };

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(() => {
                alert("Post Added Successfully");
                history.push("/");
            });
    };

    return (
        <div className="newpost-container">
            <h1>New Post</h1>

            <form onSubmit={publish}>
                <label>Title of the post</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Name of the writer</label>
                <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />

                <label>Add content</label>
                <textarea
                    type="text"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />

                <button type="submit">Post</button>
            </form>
        </div>
    );
}

export default NewPost;
