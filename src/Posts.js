
import {
    useQuery,
    useMutation,
    gql,
  } from "@apollo/client";


  const POSTS = gql`
    query {
        posts {
            id
            title
            author{
            id
            firstName
            lastName
            }
            votes
        }
  }
`;

const UPVOTE = gql`
mutation upVote($postId: Int!){
  upvotePost(postId:$postId){
    id
    title
    votes
  }
}
`;

function Posts(){
    const {loading, data, error} = useQuery(POSTS);

    const [postUpVote] = useMutation(UPVOTE);


    const upVote = async (postId) =>{
        let resp = await postUpVote({
            variables : {
                postId
            }
            // refetchQueries:[{query:POSTS}]
        })
        console.log(resp?.data)
    }


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <>
        <ul className="container">
        {data?.posts?.map(({id, title, votes,author})=>
            <li key={id} className="item">
                <h3>Title : {title}</h3>
                <p>Id : {id}</p>
                <p>Author : {author?.firstName}</p>
                <p>Votes : {votes}</p>
                <button onClick={()=>upVote(id)}>Upvote</button>
            </li>    
        )}
        </ul>
        </>
    )
}

export default Posts;