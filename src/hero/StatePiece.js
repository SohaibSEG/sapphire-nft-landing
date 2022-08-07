
function StatPiece(props){
    return (
        <div className="stat-piece">
            <h2>{props.value}</h2>
            <p>{props.title}</p>
        </div>
    );
}
export default StatPiece;