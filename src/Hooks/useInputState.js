import { useState } from 'react';

const useInputState = (initialVal="") => {

    const [value, setValue] = useState(initialVal);
    //A function to handle the input change
    const handleChange = (e) => {
      setValue(e.target.value);
    };
    
      //A function to handle the reset of input
    const reset = () => {
      setValue("");
    };
  
    return[value, handleChange, reset];
  };

export default useInputState;
