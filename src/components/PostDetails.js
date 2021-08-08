import { useHistory, useParams } from "react-router-dom";
import FetchData from "./FetchData";

function PostDetails() {
    const { id } = useParams();
    const history = useHistory();
    const data = FetchData("https://jsonplaceholder.typicode.com/posts/" + id);

    const deletePost = () => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
            method: "DELETE",
        }).then(() => {
            alert("Delete Post Successfully");
            history.push("/");
        });
    };

    return (
        <div className="postDetails-container">
            {data && (
                <>
                    <img src="https://picsum.photos/500/300" alt="Post" />
                    <h1>{data.title}</h1>
                    <h4>{data.userId}</h4>
                    <p>{data.body}</p>
                    <button className="delete-btn" onClick={deletePost}>
                        Delete
                    </button>
                </>
            )}
        </div>
    );
}

export default PostDetails;
