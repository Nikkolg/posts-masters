import React from "react";
import { Outlet, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../UI/Container"
import { logout } from "../../redux/slices/authSlice"
import * as SC from "./styles";
import { Button } from "../UI/Button";

export const Root = () => {
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onClickExitBtn = () => {
        dispatch(logout())
        navigate('/auth')
    }

    return (
        <>
            <Container>
                <SC.Menu>
                    <SC.MenuItem to={'/'}>Главная</SC.MenuItem>
                    <SC.MenuItem to={'/posts'}>Список постов</SC.MenuItem>
                    {!user && <SC.MenuItem to={'/auth'}>Авторизация</SC.MenuItem>}
                    {!user && <SC.MenuItem to={'/registration'}>Регистрация</SC.MenuItem>}
                    {user && <SC.MenuItem to={'/posts/add'}>Добавления поста</SC.MenuItem>}
                    {user && <Button onClick={onClickExitBtn}>Выход</Button>}
                </SC.Menu>
            </Container>
            <Outlet />
        </>
    )
}