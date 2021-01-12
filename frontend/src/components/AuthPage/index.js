import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useHttp } from '../../hooks/http.hook';






export const AuthPage = () => {
    const { loading, request } = useHttp()

    const [form, setForm] = useState({
        email: "", password: ""
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', "POST", { ...form })
            console.log('Data', data)

        } catch (error) {

        }
    }


    return (
        <div className="text-center">
            <h1 >Sign In</h1>
            <Form
                // onSubmit={this.onSubmit}
                className="container overflow-hidden">
                <div className="row justify-content-sm-center g-2">
                    {/* <Form.Row > */}

                    {/* <Form.Group as={Col} controlId="formGridEmail" className="col-sm-6"> */}
                    <Form.Control
                        name="email"
                        // value={email}
                        onChange={changeHandler}
                        type="text"
                        placeholder="Email Address"
                        className="col-sm-6 col-md-4 ml-1 mr-1 mb-2"

                    />
                    {/* </Form.Group> */}
                    {/* <Form.Group as={Col} controlId="formGridPassword" className="col-sm-6"> */}
                    <Form.Control
                        name="password"
                        // value={password}
                        onChange={changeHandler}
                        type="password"
                        placeholder="Password"
                        className="col-sm-6 col-md-4 ml-1 mr-1 mb-2"
                    />
                    {/* </Form.Group> */}
                    {/* </Form.Row> */}
                </div>

                {/* <div className="" style={{ margin: "auto" }}> */}
                <div className="row g-2 justify-content-sm-center">
                    <Button
                        disabled={loading}
                        // type="submit"
                        className="col-sm-6 col-md-4  ml-1 mr-1 mb-2"
                        variant="outline-dark">
                        Sign In
        </Button>

                    <Button
                        // type="submit"
                        className="col-sm-6 col-md-4  ml-1 mr-1 mb-2"
                        variant="outline-dark"
                        onClick={registerHandler}
                        disabled={loading}
                    >
                        Sign Up
        </Button>
                </div>




                {/* {error && <p>{error.message}</p>} */}
                {/* </div> */}
            </Form>
        </div>
    )
}
