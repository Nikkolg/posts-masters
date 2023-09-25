import React, { useState } from "react";
import { Container } from "../../../../components/UI/Container";
import { Typo } from "../../../../components/UI/Typo"
import { Form } from "../../../../components/UI/Form";
import { Field } from "../../../../components/UI/Field";
import { Input } from "../../../../components/UI/Input";
import { Button } from "../../../../components/UI/Button";

import * as SC from "./styles"

const DEFAULT_VALUES = {title: '', body: ''}

export const PostForm = ({title, onSubmitForm, defaultValues}) => {
    const [formValues, setFormValues] = useState(defaultValues || DEFAULT_VALUES)

    const onChange = (name, value) => {
        setFormValues({...formValues, [name]: value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitForm(formValues)
        if (!defaultValues) {
            setFormValues(DEFAULT_VALUES);
        }
    }

    const disabled = !formValues.title || !formValues.body;

    return (
        <Container>
            <Typo>{title}</Typo>
            <Form onSubmit={onSubmit}>
                <Field>
                    <Input
                        type="text" 
                        name="title" 
                        placeholder="Заголовок поста"
                        value={formValues.title}
                        onChange={(e) => onChange(e.target.name, e.target.value)} 
                    />
                </Field>
                <Field>
                    <SC.Textarea 
                        name="body" 
                        placeholder="Текст" 
                        rows={10}
                        cols={30}
                        value={formValues.body}
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                    />
                </Field>
                <Button type="submit" disabled={disabled}>Сохранить</Button>
            </Form>
        </Container>
    )
}