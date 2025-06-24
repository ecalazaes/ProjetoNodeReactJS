import {useEffect, useState} from "react";
import {Button, TextField} from "@mui/material";
import styles from "./page.module.css"
import authServices from "../../services/auth.jsx";
import {useNavigate} from "react-router-dom";

export default function Auth() {
    const [formType, setFormType] = useState('login');
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmpassword: ''
    });
    const { login, signup, authLoading } = authServices()
    const navigate = useNavigate();

    const authData = JSON.parse(localStorage.getItem('auth'));

    useEffect(() => {
        if (authData) {
            navigate('/profile')
        }
    }, [authData])


    const handleChangeFormType = () => {
        setFormData({
            fullname: '',
            email: '',
            password: '',
            confirmpassword: ''
        });
        if (formType === 'login') {
            setFormType('signup');
        } else {
            setFormType('login');
        }
    }

    const handleFormDataChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        switch (formType) {
            case 'login':
                login({...formData});
                break;
            case 'signup':
                if (formData.password !== formData.confirmpassword) {
                    console.log('Passwords do not match!')
                    return
                }
                signup({...formData});
                break;
        }
    }

    if(authLoading) {
        return (<h1>Loading</h1>)
    }

    if (formType === 'login') {
        return (
            <div className={styles.authPageContainer}>
                <h1>Login</h1>
                <button onClick={handleChangeFormType}>Don't you have an account? Click here</button>
                <form onSubmit={handleSubmitForm}>
                    <TextField
                        required
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormDataChange}
                    />

                    <TextField
                        required
                        label="password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleFormDataChange}
                    />
                    <Button type="submit">Login</Button>
                </form>
            </div>
        )
    }

    if (formType === 'signup') {
        return (
            <div className={styles.authPageContainer}>
                <h1>Signup</h1>
                <button onClick={handleChangeFormType}>Already have an account? Click here</button>
                <form onSubmit={handleSubmitForm}>
                    <TextField
                        required
                        label="Fullname"
                        type="text"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleFormDataChange}
                    />
                    <TextField
                        required
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormDataChange}
                    />
                    <TextField
                        required
                        label="password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleFormDataChange}
                    />
                    <TextField
                        required
                        label="Confirm Password"
                        type="password"
                        name="confirmpassword"
                        value={formData.confirmpassword}
                        onChange={handleFormDataChange}
                    />
                    <Button type="submit">Signup</Button>
                </form>
            </div>
        )
    }
}