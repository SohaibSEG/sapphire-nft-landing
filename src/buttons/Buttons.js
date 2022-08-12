import "./button.css";

export default function BuPrimary(props){
    return <div className="bu-primary clickable">{props.text}</div>;
}
export  function BuPrimaryOutline(props){
    return <div className="bu-primary bu-outline clickable">{props.text}</div>;

}
export function BuOutline(props){
    return <div className="bu-outline clickable">{props.text}</div>;
}

export function BuSecondary(props){
    return <div className="bu-secondary clickable">{props.text}</div>;
}