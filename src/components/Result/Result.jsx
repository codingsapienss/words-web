import React from 'react'
import './Result.css'

const Component = ({ meanings, word }) => {
  return (
    <div>
         <div className='phonetics'> 
                  {word  && meanings[0].phonetics[0] && (<audio 
                   src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio } controls>
                  </audio>)}
            </div>  
            <div className='phonetics'> 
                  {word  &&(<div> <b className='heading'> {meanings[0].word} </b> </div>)}
            </div>  

        {
          word === '' ? (<span className='emptyResult results '>Search Something</span>) :
          <div className="results">
            {
              meanings.map((mean)=>{
                return( 
                  mean.meanings.map((item,i)=>{
                    return(
                      <div key={i} className="meanings">
                          <p className='heading pos'>{item.partOfSpeech} <hr />
                              {
                                item.definitions.map((def,i)=>{
                                  return (
                                  <div key={i} className='definition def'>
                                        <p className='para'> {i+1}.    
                                            <span className='para '> { def.definition}</span>
                                        </p>
                                      
                                      { def.example &&  ( <p className='heading eg'> Example :  
                                            <span className='para '> {def.example}</span>  <hr id='hr' />
                                        </p> ) }
                                  </div>
                                  )
                                })
                              }
                          </p>

                          {
                            item.synonyms.length>0 && (
                             <div className='heading'>
                              <b>Synonyms : </b>
                              {item.synonyms.map((s, i)=>{
                                return <span key={i} className='para syno' > {`${s}` },  </span> 
                              }) }<br /><br />
                             </div>
                            )

                           }

                          {
                            item.antonyms.length>0 && (
                             <div className='heading'>
                              <b>Antonyms : </b>
                              {item.antonyms.map((a,i)=>{
                                return <span key={i} className='para syno'> {`${a}` },  </span> 
                              }) } 
                             </div>
                            )
                           }
                       </div> 
                    )
                  })
                )
              })
            }
          </div>
        }
    </div>
  )
}

export default Component