import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/UI/Container"
import { Typo } from "../../components/UI/Typo"
import { Form } from "../../components/UI/Form";
import { Input } from "../../components/UI/Input";
import { Field } from "../../components/UI/Field";

export const RegistrationPage = () => {
    const [formValues, setFormValues] = useState({name: '', email: '', password: ''})
    const navigate = useNavigate()

    const onChange = (name, value) => {
        setFormValues({...formValues, [name]: value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);

        try {
            const users = JSON.parse(localStorage.getItem('users'))
            const userId = Date.now()
            const newUser = {id: userId, ...formValues}

            if (!users) {
                localStorage.setItem('users', JSON.stringify([newUser]))
                alert('Вы успешно зарегистрировались')
                navigate('/auth')
                return
            }

            if (users.find((user) => (
                user.name === formValues.name || user.email === formValues.email
            )
            )) {
                alert('Пользователь с таким именем или email уже существует')
                navigate('/auth')
                return
            }

            users.push(newUser)
            localStorage.setItem('users', JSON.stringify(users))
            alert('Вы успешно зарегистрировались')
            navigate('/auth')

        } catch (e) {
            console.log(e);
        }
    }

    const disabled = !formValues.name || !formValues.password || !formValues.password;

    return (
        <Container>
            <Typo>Страница регистрации</Typo>
            <Form onSubmit={onSubmit} autoComplete="off">
                <Field>
                    <Input
                        type="text" 
                        name="name" 
                        placeholder="Имя"
                        value={formValues.name}
                        onChange={(e) => onChange(e.target.name, e.target.value)} 
                    />
                </Field>
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
                <button type="submit" disabled={disabled}>Регистрация</button>

            </Form>
        </Container>
    )
}