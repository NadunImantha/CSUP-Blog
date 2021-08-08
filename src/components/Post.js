import { Link } from "react-router-dom";

function Post({ data }) {

    return (
        <div className="post-container">
            <img src="https://picsum.photos/500/300" alt="Post" />
            <h2>{data.title}</h2>
            <p>By : {data.userId}</p>
            <Link to={`/postDetails/${data.id}`}>
                <button>Read More</button>
            </Link>
        </div>
    );
}

export default Post;
