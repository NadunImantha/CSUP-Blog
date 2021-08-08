import FetchData from "./FetchData";
import Post from "./Post";

function DashBoard() {
    const data = FetchData("https://jsonplaceholder.typicode.com/posts");

    return (
        <div className="dashboard-container">
            {data && data.map((post) => <Post data={post} key={post.id} />)}

            {/* wait with loading screen */}
            {/* {data ? (
                data.map((post) => <Post data={post} key={post.id} />)
            ) : (
                <p>Loading...</p>
            )} */}
        </div>
    );
}

export default DashBoard;
