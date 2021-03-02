 import React, { Component } from 'react'
 import GoogleLogin from 'react-google-login'
 
 export class App extends Component {
   responseGoogle=(response)=>{
     console.log(response);
     console.log(response.profileObj);
   }
   
   render() {
     return (
       <div>
         <GoogleLogin
         clientId = "722006357206-beu5gk11othgm1vm3lq38q9t29363khj.apps.googleusercontent.com"
         buttonText="Login"
         onSuccess={this.responseGoogle}
         cookiePolicy={'single_host_origin'}/>
       </div>
     )
   }
  }
  export default App
