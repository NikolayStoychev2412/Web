import PostList from "./PostList";
function Content(props: { posts: { id: number; title: string; description: string; }[] })
{
    return(
        <PostList posts={props.posts} />
    );
}
export default Content;