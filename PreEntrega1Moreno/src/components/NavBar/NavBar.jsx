import './navBar.css';
import CardWidget from '../CardWidget/CardWidget';


export default function NavBar(){
    return(
    <>
        <h3>Ecommerce</h3>
        <nav>
            
        <ul>
            <li><a href="#">click</a></li>
            <li><a href="#">click2</a></li>
            <li><a href="#">click3</a></li>
            <li><a href="#">click4</a></li>
        </ul>
        <CardWidget/>
        </nav>
        </>
    );
    
}