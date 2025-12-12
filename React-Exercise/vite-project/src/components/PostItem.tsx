function PostItem(props: { post: { id: number; title: string; description: string } })
{
    return(
        <div>
            <h2>{props.post.id}</h2>
            <h1>{props.post.title}</h1>
            <p>{props.post.description}</p>
        </div>
    );
}
export default PostItem;