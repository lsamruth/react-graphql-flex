

export default function ChildComponent(props){
    return(
        <button onClick={()=>props.refetch()}>refetch from child</button>
    )
}