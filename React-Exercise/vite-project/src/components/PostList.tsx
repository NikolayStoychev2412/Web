import PostItem from "./PostItem";
function PostList(props: { posts: { id: number; title: string; description: string }[] }) {
    return (
        <div>
            {props.posts.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    );
}

export default PostList;