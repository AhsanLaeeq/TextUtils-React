import React ,{useState} from 'react'

export default function Textform(props) {

    const[text,setText] =useState('');
   
   
  



    const touocl= ()=>{
        let up =text.toUpperCase();
        setText(up)
        props.showalert('Successfylly','Converted to uppercase');
        
    }
    const tolocl= ()=>{
        let lo =text.toLowerCase();
        setText(lo)
        props.showalert('Successfully','Converted to lowercase');
    }
   
    const tocl=()=>{
        let cl = '';
        setText(cl)
        props.showalert('Successfully','Cleared');
    }
    const toCop =()=>{
        navigator.clipboard.writeText(text);
        props.showalert('Successfully','Your text copied');
    }
    const spc =()=>{
        let cleanedText = text.replace(/\s+/g, ' ').trim();  // Clean the input text
        setText(cleanedText);
        props.showalert('Successfully','Extra spaces removed');
    }

   
    
    const handleonChange =(event)=>{
        setText(event.target.value)
    }
    
    
  return (
   <>
     <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
       
          <h1>{props.heading}</h1>
         <div className='mb-3'>
          <textarea className='form-control'  value={text} onChange ={handleonChange} style={{backgroundColor:props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}}  id="myBox" rows='8' ></textarea>
         </div>
          <div className='container'>
            <button className="btn btn-primary my-3 mx-3"onClick={touocl}>To Upper Case</button>
            <button className="btn btn-primary my-3 mx-3"onClick={tolocl}>To Lower Case</button>
            <button className="btn btn-primary my-3 mx-3"onClick={tocl}>Clear</button>
            <button className="btn btn-primary my-3 mx-3"onClick={toCop}>Copy Text</button>
            <button className="btn btn-primary my-3 mx-3"onClick={spc}>Remove Extra Spaces</button>
          </div>
          <div className='container my-3' style={{ color: `${props.mode === 'dark' ? 'white' : 'black'}` }}> 
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
        </div>
        <div className='container my-3'>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
     </div>
        
     
  

      
        
   
    </>
  )
}