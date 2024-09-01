import Navbar from "../components/navbar";
import "../styles/login.css"; 


const Login = ()=>{
    return(
        <>
         <Navbar title={"login page"}/>
         <div id="container">
         <form method="">
            <label htmlFor="email">Email:</label>
            <br />
            <input type="email" id="email" name="email" />
            <br /><br />
            <label htmlFor="password">Password:</label>
            <br />
            <input type="password" id="password" name="password" />
            <br />
            <br />
            <input type="submit" id="button" value="Login" />

            
            
            </form>
         </div>

        </>



            
    );
   
}
export default Login;