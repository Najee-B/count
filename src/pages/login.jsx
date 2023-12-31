import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
    background-color: #03759e;
    height: 100vh;
    display: flex;
    justify-content:center;
h1{
    font-weight: lighter;
}
.content{
    padding-top: 50px;
    background-color: white;
    display: flex;
    flex-direction: column;
    margin: 140px 60px ;
    height: 550px;
    width: 500px;
    border-radius: 10px;
    justify-content: center;
    align-items:center;
    font-family: Arial, Helvetica, sans-serif;
}
form{
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    width: 400px;
    
}
a{
    text-decoration: none;
    color: rgb(9, 9, 197);
}
.ch{
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    padding: 0px;
    width: 500px;
}
.in{
    height: 50px;
    width: 370px;
    margin: auto;
    margin-top: 10px;
    padding-left: 20px;
}
#lb{
    margin-top: 15px;
    margin-left: 2px;
}
p{
    margin-top: 40px;
    width: 230px;
    color: black;
    font-size: 15px;
}
#submit{
    background-color: rgb(3, 100, 164);
    color: white;
    margin-top: 10px;
    height: 40px;
    border: none;

}
@media only screen and (max-width:600px) {
    padding:0px;
    width:100%;
    height: 100vh;;

    .content{
        height:500px;
        width:320px;
        padding-top: 0px;
        margin:auto;

    }
    form{
        width:265px;
    }
    .in{
        width:240px;
        height: 25px;
    }
    h1{
        margin-top:20px;
        font-size:30px;
    }
    #lb{
        margin-left:0px;
    }
    p{
        font-size: 10px;
        width:150px;
        margin-top:20px;
    }
    
}



`;
function login() {
  return (
    <Container>
        <div className="content">
            <h1>Login</h1>
            <form>
                <label htmlFor="mail" id="lb">Email:</label>
                <input type="text" onChange={(e)=>console.log(e.target.value)} className="in" id="mail" placeholder="Enter email"/>
                <label htmlFor="password" id="lb">Password:</label>
                <input type="password" onChange={(e)=>console.log(e.target.value)} className="in" id="password" placeholder="Enter password"/>
               <div className="ch"> <input type="checkbox"  id="check"/><label htmlFor="check">Show password</label> </div>
                <input type="submit" value="SIGN IN" id="submit"/>
                       </form>
                <div className="bottom">
                    <p>Forgot <a href="">Username</a> / <a href="">password?</a> Dont have an account? <a href="">Sign up</a> </p>
                </div>
        </div>
        </Container>
  )
}

export default login