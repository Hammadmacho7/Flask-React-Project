import React, {useState} from 'react'
import {Form, Button, Alert} from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import {useForm} from 'react-hook-form'


export default function SignUp() {


    const {register, handleSubmit, reset, formState:{errors}} = useForm();
    const [show, setShow] = useState(false)
    const [serverResponse,setServerResponse]=useState('')



    const submitForm = (data) => {
        //console.log(data);
        
        if(data.password === data.confirmPassword)
        {
            const body = {
                username: data.username,
                email: data.email,
                password: data.password
            }
            const requestOptions = {
                method: "POST",
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(body)
            }

            fetch('/auth/signup', requestOptions)
            .then(res=>res.json())
            .then(data => {
                console.log(data)
                setServerResponse(data.message)
                setShow(true)
            })
            .then(err => console.log(err))

            reset();
        }
        else
        {
            alert("Passwords do not match, re-enter");
        }

    }
    
    // console.log(watch("username"))
    // console.log(watch("email"))
    // console.log(watch("password"))
    // console.log(watch("confirmPassword"))



  return (
    <div className='container'>
      <div className='form'> 
        {show?
            <>
            <h1 className='tester'>Sign Up</h1>
            <Alert variant="success" onClose={() => setShow(false)} dismissible>
            <p>
                {serverResponse}
            </p>
            </Alert>
            </>
            :
            <h1 className='tester'>Sign Up</h1>
        }
        <form>
            <Form.Group>
                <Form.Label className="tester my-1">Username</Form.Label>
                <Form.Control type = "text" 
                placeholder='Type in your username'
                // value = {username}
                // name = "username"
                // onChange={(e)=>{setusername(e.target.value)}}
                {...register("username", { required: true, maxLength: 25 })}
                />
            
            {errors.username && <span style={{color:'red'}}>Username is required</span>}
            {errors.username?.type === "maxLength" && <p style={{ color: "red" }}><small>Max characters should be 25 </small></p>}
            </Form.Group>
            <br></br>
            <Form.Group>
                <Form.Label className="tester my-1">Email</Form.Label>
                <Form.Control type = "email" 
                placeholder='Type in your @email'
                // value = {email}
                // name = "email"
                // onChange={(e)=>{setEmail(e.target.value)}}
                {...register("email", { required: true, maxLength: 80 })}
                />
                {errors.email && <p style={{ color: "red" }}><small>Email is required</small></p>}
                {errors.email?.type === "maxLength" && <p style={{ color: "red" }}><small>Max characters should be 80</small></p>}
            </Form.Group>
            <br></br>
            <Form.Group>
                <Form.Label className="tester my-1">Password</Form.Label>
                <Form.Control type = "password" 
                placeholder='Type in your password'
                // value = {password}
                // name = "password"
                // onChange={(e)=>{setPassword(e.target.value)}}
                {...register("password", { required: true, minLength: 8 })}
                />
                {errors.password && <p style={{ color: "red" }}><small>Password is required</small></p>}
                {errors.password?.type === "minLength" && <p style={{ color: "red" }}><small>Min characters should be 8</small></p>}
            </Form.Group>
            <br></br>
            <Form.Group>
                <Form.Label className="tester my-1">Confirm Password</Form.Label>
                <Form.Control type = "password" 
                placeholder='Re-enter password'
                // value = {confirmPassword}
                // name = "confirmPassword"
                // onChange={(e)=>{setConfirmPassword(e.target.value)}}
                {...register("confirmPassword", { required: true, minLength: 8 })}
                />
                {errors.confirmPassword && <p style={{ color: "red" }}><small>Confirm Password is required</small></p>}
                {errors.confirmPassword?.type === "minLength" && <p style={{ color: "red" }}><small>Min characters should be 8</small></p>}
            </Form.Group>
            <br></br>
            <Form.Group>
                <Button as = "sub" variant="primary" className="makeBold my-2" onClick={handleSubmit(submitForm)}>Sign Up</Button>
            </Form.Group>
            <Form.Group className='my-2'>
            <small className='tester'>Already have an account? <Link to = "/login" className="tester">Click Here</Link></small>
          </Form.Group>
        </form>
      </div>
    </div>
  )
}
