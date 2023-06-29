import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Back from '../assets/bg.png'
import spot from '../assets/spot.png'
const Container=styled.div`
padding: 0px;
margin: 0px;
width: 100%;
.imgdiv{
  padding: 0px;
  background-image: url(${Back});
  background-size:115% 100% ;
  display: flex;
  justify-content:center;
  position: relative;
  height: 100vh;
  background-repeat: no-repeat;
  margin: 0px;
}
.inside{
  color: white;
  align-items:center;
  display: flex;
  flex-direction:column;
  font-size:50px;
  margin: 200px auto 300px auto;
  }
  .imgd{
    margin-left: 30px;
  }
.imgd img{
  height: 80px;
  width: 240px;
}
.heading,.count,.butn{
  height: 100px;
}
.check{
  color: white;
  margin-top:30px;
  display: none;
  font-size:30px;
  margin-bottom:0px;
  
}
a{
  text-decoration:none;
  color:white;
}
 #chk{
  display: none;
}
input:checked ~ ul{
    left:-20px;
  }
label{
  display: none;
}

nav{
  position: absolute;
  color: white;
  display: flex;
  flex-direction: row;
  height: 80px;
  background-color: black;
  opacity: 70%;
  width:100%;
}

.listd{
  margin-left: auto;
}
button{
  background-color: green;
  font-size: 20px;
  width: 150px;
  height: 40px;
  border-radius:40px;
  border:none;
  color: white;
}
ul{
  list-style: none;
}
li{
  margin-top:15px;
  display:inline-block;
  padding-right:30px;
}
@media only screen and (max-width:600px) {
  li{
    display: block;
    padding-bottom:30px;
    font-size: 20px;
    margin-top:30px;
    
  }
  .imgd img{
    width: 100px;
    height: 30px;
  }
  ul{
    margin-top:30px;
    margin-left:0px;
    position: fixed;
    text-align: center;
    width: 100%;
    height: 100vh;
    left:-110%;
    background-color: black;
  }
  
  .check{
    display:block;
    
  }
 
  label{
    display:block;
    margin-top:25px;
    margin-right:10px;
    font-size:20px;
  }
  .imgd{
    margin-left:10px;
  }
  .imgd img{
    height: 80px;
    width: 200px;
  }
  #null{
    display:none;
  }
  
  
  }
  



`;
function home() {
  const[value,setValue]=useState(0);
  useEffect(()=>console.log(),[value]);
  return (
    
    <Container>
      
      <div className="imgdiv">
      <nav className='navi'>
        <div className="imgd">
        <img src={spot} alt="" /></div>
      <div className="listd">
      <input type="checkbox"   id="chk" value="" />
            <label htmlFor="chk">Menu</label>
        <ul>
          <li><a href='#'>Premium</a></li>
          <li><a href='#'>Help</a></li>
          <li><a href='#'>Download</a></li>
          <li id='null'>|</li>
          <li><a href='#'>Sign up</a></li>
          <li><a href='#'>Log in</a></li>
          </ul>
            </div> </nav>
        <div className="inside">
         <div className="heading">
          <h2>Count</h2></div>
         <h2 id="count">{value}</h2>
         <div className="butn"><button onClick={()=>{setValue(value+1)}}>Click</button></div>
         <div className="butn"><button onClick={()=>{setValue(0)}}>Reset</button></div>
         </div></div>
         
      
    </Container>
  )
}

export default home