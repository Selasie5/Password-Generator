import  {useState} from 'react'
import { Toaster, toast } from 'react-hot-toast';
import {FaCopy, FaKey} from 'react-icons/fa6'

const PasswordGenerator = () => {
    //Definfing states for password generator
    const[password, setPassword]=useState('');
    const[length, setLength]=useState(8);
    const[includeUpperCase,setIncludeUpperCase]=useState(true);
    const[includeLowerCase,setIncludeLowerCase]=useState(true);
    const[includeDigits,setIncludeDigits]=useState(true);
    const[includeSpecialChars,setIncludeSpecialChars]=useState(false);
    const generatePassword =()=>
    {
        const lowerChars='abcdefghijklmnopqrstuvwxyz';
        const upperChars= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const digitChars='0123456789';
        const specialChars='!@#$%^&*';

       let availableChars="";
       if(includeUpperCase) availableChars += upperChars;
       if(includeLowerCase) availableChars += lowerChars;
       if(includeDigits) availableChars += digitChars;
       if(includeSpecialChars) availableChars += specialChars;
       
       let newPassword='';
       for(let i=0; i < length; i++)
       {
        const randomIndex= Math.floor(Math.random()* availableChars.length);
        newPassword +=availableChars[randomIndex];
       }
       setPassword(newPassword)
    }
    //this function allows the user to copy the generated password
    const copyPassword=()=>
    {
        if(password !== '')
        {
            navigator.clipboard.writeText(password);
        }
        toast.success('The password has been copied');
    }
    
  return (
    <div className='main-component'>
        <Toaster position='top-left'reverseOrder={false}/>
        <h1>Password Generator</h1>
        <div className='password-section' style={{marginBlock:'1rem', padding:'1rem',backgroundColor:'white',height: 'fit-content',borderRadius: '5px',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <p>{password}</p>
            <FaCopy style={{color:'#157404',fontSize: '1.5rem'}} onClick={copyPassword}/>
            </div>
        <div>
            <label>Password Length: </label>
            <input 
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}/>
        </div>
        <div>
            <input 
            type="checkbox"
            checked={includeUpperCase}
            onChange={()=>setIncludeUpperCase(!includeUpperCase)}/>
            <label>Include Uppercase</label>
        </div>
        <div>
            <input 
            type="checkbox"
            checked={includeLowerCase}
            onChange={()=> setIncludeLowerCase(!includeLowerCase)}/>
            <label > Include LowerCase</label>
        </div>
        <div>
            <input 
            type="checkbox"
            checked={includeDigits}
            onChange={()=>
            {
                setIncludeDigits(!includeDigits)
            }}/>
            <label>Include Digits</label>
        </div>
        <div>
            <input 
            type='checkbox'
            checked={includeSpecialChars}
            onChange={( ) =>{
                setIncludeSpecialChars(!includeSpecialChars)
            }}/>
            <label>Include Special Characters</label>
        </div>
        <div style={{marginBlock:'1.5rem',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <button onClick={generatePassword} style={{padding: '15px 30px',backgroundColor: '#11ED69',border: 'none', color:'white',textTransform:'uppercase',borderRadius:'10px'}}>Generate Password <FaKey/></button>
        </div>
        </div>
  )
}

export default PasswordGenerator
