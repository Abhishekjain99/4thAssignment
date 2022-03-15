import {Link} from 'react-router-dom'
const NavBar = () => {
    return ( 
        <div style = {{textAlign : 'center'}}>
                <br />
                <br />

               <Link to='/'><li>Back to Home Page!</li></Link>
                <br />
               <Link to='/about'><li>About This Web Application</li></Link>  
               <br />
               <br />         
        </div>
     );
}
 
export default NavBar;