import { ChangeEvent, MouseEvent } from 'react'
import axios from "axios"

const LoginPractice = () => {

    const handleFormSubmit = async(e: MouseEvent<HTMLButtonElement>) => {
        //ASYNC/await
      //.THEN CATCH
        e.preventDefault()
        const response = await axios.get("http://localhost:3000/tester")
        const data = await response.data
        if (response.status === 200) {
            console.log("The API Request was succesful!")
            console.log(data)
        }
        else {
            console.log("Sorry we have had an error!")
        }
 }      

  const handleSubmit = async () => {
    
    const res = await axios.get("http://localhost:3000/end")

    if (res.status === 200) {
      console.log("Request received!")
    }

    else {console.log("Request Error")}
  }

    return (
      <div>
        {/* <form onSubmit={() => console.log("Logging User In")}>
          <label htmlFor="email">Username:</label>
          <input id="email" placeholder="Enter your email..." type="email" />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            placeholder="Enter your password..."
            type="password"
          />
          <button type="submit">Log In</button>
            </form> */}
          
            <button onClick={handleFormSubmit}>Test API Call</button>
      </div>
    );
}

export default LoginPractice