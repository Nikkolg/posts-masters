import React from "react";
import { Outlet } from "react-router";
import { Container } from "../Container"
import * as SC from "./styles";

export const Root = () => 
<>
    <Container>
        <SC.Menu>
            <SC.MenuItem to={'/'}>Главная</SC.MenuItem>
            <SC.MenuItem to={'/posts'}>Список постов</SC.MenuItem>
            <SC.MenuItem to={'/posts/add'}>Добавления поста</SC.MenuItem>
            <SC.MenuItem to={'/auth'}>Авторизация</SC.MenuItem>
            <SC.MenuItem to={'/registration'}>Регистрация</SC.MenuItem>
        </SC.Menu>
    </Container>
    <Outlet />
</>