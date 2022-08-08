import "./button.css";

export default function BuPrimary(props){
    return <div className="bu-primary clickable">{props.text}</div>;
}
export  function BuPrimaryOutline(props){
    return <div className="bu-primary bu-outline clickable">{props.text}</div>;

}
