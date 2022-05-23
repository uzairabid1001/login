import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Login(){
    return <><div className='hom'><div className='home'>
    <h1 className='login'>Login</h1>
    <div><TextField className='input' id="outlined-basic" label="Email" variant="outlined" /></div>
 <br />
    <div><TextField className='inpu' id="outlined-basic" label="Password" variant="outlined" /></div>
    <br /><br />
    <Button variant="contained">Login</Button>
    </div> </div>  
  
    </>
}
export default Login;
