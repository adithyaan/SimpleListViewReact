import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { List, Card,Layout } from 'antd';

const App= ()=>{
  
    const [bg1,setBg1] = useState("white")
    const [bg2,setBg2] = useState("white")
    const [bg3,setBg3] = useState("white")

    const items = [
      {
        "title":"Food 1",
        "state":bg1
      },
      {
        "title":"Food 2",
        "state":bg2
      },
      {
        "title":"Food 3",
        "state":bg3
      }
    ]

    const changeBg = (index)=>{
      switch(index){
        case 0:
            if(bg1 == "white"){
              setBg1("blue")
            }else{
              setBg1("white")
            }
          break;
        case 1:
            if(bg2 == "white"){
              setBg2("blue")
            }else{
              setBg2("white")
            }
          break;
        case 2:
            if(bg3 == "white"){
              setBg3("blue")
            }else{
              setBg3("white")
            }
          break;
      }
    }
  
return(
  <div>
    {items.map((item,pos)=>{
      
      return(
        <Layout style={{
          backgroundColor:item.state
          
        }} onClick={(p)=>{changeBg(pos)}}> 
  
        <h1>{item.title}</h1>
        </Layout>
      );
    }
    )}  
    
  </div>
);
}


export default App;
