import React from 'react'
import FavsLogin from './FavsLogin'
import FavsLogged from './FavsLogged'
import { logged } from './../../../../services/AuthService'

export default function Favs() {

    // let logged = false;

    return (
        <>
            <h2 class="d-flex justify-content-center text-3xl font-bold">Favoritos</h2>
            <div>
                {logged() ? (
                    <FavsLogged />
                ) : (
                    <FavsLogin />
                )}           
            </div>
        </>
    )
}
