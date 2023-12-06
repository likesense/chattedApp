import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

const Login = () => {
	const [err, setErr] = useState(false)
	const navigate = useNavigate()

	const handleSubmit = async e => {
		e.preventDefault()
		const email = e.target[0].value
		const password = e.target[1].value

		try {
			await signInWithEmailAndPassword(auth, email, password)
			navigate('/')
		} catch (err) {
			setErr(true)
		}
	}

	return (
		<div className='formContainer'>
			<div className='formWrapper'>
				<span className='logo'>Chatted App</span>
				<span className='title'>Войти</span>
				<form onSubmit={handleSubmit}>
					<input type='text' placeholder='Логин'></input>
					<input type='password' placeholder='Пароль'></input>
					<button>Войти</button>
					{err && <span>Упс, что-то пошло не так</span>}
				</form>
				<p>
					У вас еще нет аккаунта? <Link to='/register'>Регистрация</Link>
				</p>
			</div>
		</div>
	)
}

export default Login
