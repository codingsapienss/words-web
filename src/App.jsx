import Input from './components/Input/Input.jsx'
import Result from './components/Result/Result.jsx'
import './App.css'
import { useState, useEffect } from "react";
import axios from 'axios'


const App = () => {
  const [word, setWord] = useState("")
  const [meanings, setMeanings] = useState("")

  const dictionaryApi = async () => {
    try {
      let data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)

      setMeanings(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    dictionaryApi()
  }, [word])

  return (
    <div className="container">

<<<<<<< HEAD
      <p className='main-heading'> {!word ? `Words Web` : word}</p>

=======
      <p style={{fontWeight:'600',fontSize:'4rem', textAlign : 'center'}}> { !word?`Words Web`:word }</p>
     
>>>>>>> 894dce8daefa3f536205c55638b4ac77d617d1d3
      <Input setWord={setWord} />

  { meanings ? <Result meanings={meanings} word={word} /> : <span className='emptyResult results'>Search Something...</span> }

    </div >
  )
}

export default App
