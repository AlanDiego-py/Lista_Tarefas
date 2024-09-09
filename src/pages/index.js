import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Item from "@/components/Item";

export default function Home() {
  const [textInput, setTextInput] = useState("")
  const [array, setArray] = useState([])

  function adicionar() {
    setArray(array=>[...array, textInput])
    setTextInput("")
  }

  function excluir(index){
    setArray(array.filter((item, i)=>index !== i))
  }

  return (
    <div className={styles.Home}>

    <h1>TODO APP</h1>

    <div className={styles.controls}>
      <input  value={textInput} onInput={(e) => {setTextInput(e.target.value)}}/>
      <button onClick={adicionar}> + </button>
    </div>

    <div className={styles.caixa}>
      {array.map((item, index)=>(
        <Item
          index={index}
          key={index}
          styles={styles}
          handleExcluir={()=>{excluir(index)}}
        >{item}</Item>
      ))}
    </div>
      
    </div>
  );
}
