import React from 'react'
import {Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {login} from '../auth'
import {useHistory} from 'react-router-dom'





const LoginPage=()=>{

    const {register,handleSubmit,reset,formState:{errors}}=useForm()

    const history=useHistory()
    


    const loginUser=(data)=>{
        console.log(data)
 
        const requestOptions={
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        }
         
        fetch('/auth/login',requestOptions)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.access_token)
            
            if (data){
             login(data.access_token)
 
             history.push('/')
            }
            else{
                alert('Invalid username or password')
            }

        })
  
        reset()
     }


  return (
    <div className='container'>
    <div className='form'> 
      <h1 className='tester'>Login</h1>
      <form>
          <Form.Group>
              <Form.Label className="tester my-1">Username</Form.Label>
              <Form.Control type = "text" 
              placeholder='Type in your username'
            //   value = {username}
            //   name = "username"
            //   onChange={(e)=>{setusername(e.target.value)}}
            {...register('username',{required:true,maxLength:25})}
              />
          </Form.Group>
          {errors.username && <p style={{color:'red'}}><small>Username is required</small></p>}
          {errors.username?.type === "maxLength" && <p style={{color:'red'}}><small>Username should be 25 characters</small></p>}
          <br></br>

          <Form.Group>
              <Form.Label className="tester my-1">Password</Form.Label>
              <Form.Control type = "password" 
              placeholder='Type in your password'
            //   value = {password}
            //   name = "password"
            //   onChange={(e)=>{setPassword(e.target.value)}}
            {...register('password',{required:true,minLength:8})}
              />
          </Form.Group>
          {errors.password && <p style={{color:'red'}}><small>Password is required</small></p>}
          {errors.password?.type === "maxLength" && <p style={{color:'red'}}>
                <small>Password should be more than 8 characters</small>
                </p>}
            <br></br>

          <Form.Group>
              <Button as = "sub" variant="primary" className="makeBold my-2" onClick={handleSubmit(loginUser)}>Login</Button>
          </Form.Group>
          <Form.Group>
            <small className='tester'>Do not have an account? <Link to = "/signup"  className="tester">Create One</Link></small>
          </Form.Group>
      </form>
    </div>
  </div>
  )
}

export default LoginPage
