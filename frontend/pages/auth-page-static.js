export default function AuthPageStatic(props){
    return (
        <div>
        <h1>The Auth Page - {props.appName}</h1>
        <pre>
          {JSON.stringify(props, null, 2)}
        </pre>
        </div>
    )
}