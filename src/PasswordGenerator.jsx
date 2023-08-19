import  {useState} from 'react'

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
    
  return (
    <div className='main-component'>
        <h1>Password Generator</h1>
        <div>
            <h2>Genrated Password</h2>
            <p>{password}</p></div>
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
        <div>
            <button onClick={generatePassword}>Generate Password</button>
        </div>
        </div>
  )
}

export default PasswordGenerator
