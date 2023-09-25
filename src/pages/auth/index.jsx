import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/UI/Container";
import { Typo } from "../../components/UI/Typo";
import { Input } from "../../components/UI/Input";
import { Form } from "../../components/UI/Form";
import { Field } from "../../components/UI/Field";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";
import { Button } from "../../components/UI/Button";

export const AuthPage = () => {
    const [formValues, setFormValues] = useState({name: '', email: '', password: ''})
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onChange = (name, value) => {
        setFormValues({...formValues, [name]: value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        try {
            const users = JSON.parse(localStorage.getItem('users'))

            if (!users) {
                alert('Данный пользователь не найден')
                return
            }

            const currentUser = users.find((user) => user.email === formValues.email || user.password === formValues.password)

            if (!currentUser) {
                alert('Данный пользователь не найден')
                return
            }

            dispatch(login(currentUser))
            navigate('/')

        } catch (e) {
            console.log(e);
        }
    }

    const disabled = !formValues.email || !formValues.password;

    return (
        <Container>
            <Typo>Страница авторизации</Typo>
            <Form onSubmit={onSubmit} autoComplete="off">
                <Field>
                    <Input
                        type="email" 
                        name="email" 
                        placeholder="Почта"
                        value={formValues.email}
                        onChange={(e) => onChange(e.target.name, e.target.value)} 
                    />
                </Field>
                <Field>
                    <Input
                        type="password" 
                        name="password" 
                        placeholder="Пароль"
                        value={formValues.password}
                        onChange={(e) => onChange(e.target.name, e.target.value)} 
                    />
                </Field>
                <Button type="submit" disabled={disabled}>Авторизация</Button>
            </Form>
        </Container>
    )
}