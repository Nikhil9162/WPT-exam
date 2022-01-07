
import { useState } from "react";


export default function App()
{
  const [message, setmessage] = useState("");
  const [messageList, setmessageList] = useState([]);
  const processmessage = (e) => {
    setmessage(e.target.value);
  }
  const handlesend=()=>{
    const newList = [...messageList, message];
    setmessageList(newList);
    setmessage("");
  }

  return <div>
  <header className="bg-dark text-light p-3">
      MyChatApp by Nikhil Patil 046_JUHU
  </header>

  <div>
    <input className="form-control mt-2" type="text" value={message} placeholder="Lets chat here.." onChange={processmessage} />
    <input className="btn btn-primary w-100 mt-2 " type="button" value={SEND} onClick={handlesend} />
  </div>

  {messageList.map((item,index)=>(
    <div className="bg-secondary bg-opacity-25 mt-1" key={index}>
      {item}
    </div>
  ))}
  </div>
}