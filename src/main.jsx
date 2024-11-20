import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



// createRoot(document.getElementById('root')).render(
  
  


function Task() {
      return(
          <>
          <h1>Tasks</h1>
          <ul>
              {tasklist.map((t,index,tasklist)=>{
                   return<h1>{t} and total tasks are {tasklist.join ("--, ")}</h1>
  
              })}
  
              
          </ul>
          </>
      )
      
  }
  const tasklist = ["task1","task2","task3"]
  createRoot(document.getElementById('root')).render(
  <>
  <Task/>
  {Task()}
  </>
  
  );
  
  