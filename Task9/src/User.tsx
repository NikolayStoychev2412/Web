import "./User.css";
function User(props: {FirstName: string; LastName: string; number: number; class: string}) 
{
    return (
        <div>
            <header id="user">
                <h2>{props.FirstName} {props.LastName}</h2>
                <img src="../public/images/Екранна снимка 2025-11-28 163053.png" alt="" />
                <p>{props.number} {props.class}</p>
            </header>
        </div>
    );
}
export default User;