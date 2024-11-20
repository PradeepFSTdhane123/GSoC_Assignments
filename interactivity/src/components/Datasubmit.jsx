// import React from 'react'

export default function Datasubmit() {
    const[to,setTo]=userState('pradeep');
    const[data,setData]=userState('hello');
    function handlesubmit(e){
        alert(data+" "+to)
    }
    function handleSubmitt(e){
        alert(e.target.value);
    }
  return (
   <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="names">To:</label>
        <select>
            <option value="pradeep">pradeep</option>
            <option value="pradeep giri">pradeep giri</option>
        </select><br />
        <textarea name="" id="" cols="30" rows="10" placeholder="write ur message">

        </textarea><br />
    
    <button>send</button>
    </form>
   </>
  )
}