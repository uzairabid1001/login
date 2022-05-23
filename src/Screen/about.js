import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Signup(){
    return <>
    <div className='hom'><div className='home'>
    <h1 className='login'>Sign up</h1>
    <div><TextField className='input' id="outlined-basic" label="First Name" variant="outlined" /></div>
 <br />
    <div><TextField className='inpu' id="outlined-basic" label="Last Name" variant="outlined" /></div>
    <br />
    <div><TextField className='input' id="outlined-basic" label="Email" variant="outlined" /></div>
 <br />
    <div><TextField className='inpu' id="outlined-basic" label="Password" variant="outlined" /></div>
    <br /><br />
    <Button variant="contained">Sign up</Button>
    </div> </div>  
  
    </>
}
export default Signup;
