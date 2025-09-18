export default function Joke (props) {
  
    return (
        <>
          {props.setup && <p> stepup: {props.setup}</p>}
          {props.punchline && <p>punchline: {props.punchline}</p>}
          <hr/>
        </>
    )
}