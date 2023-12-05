import React from 'react'
const Login = () => {
	return (
		<div className='formContainer'>
			<div className='formWrapper'>
				<span className='logo'>Chatted App</span>
				<span className='title'>Войти</span>
				<form>
					<input type='text' placeholder='Логин'></input>
					<input type='password' placeholder='Пароль'></input>
					<button>Войти</button>
				</form>
				<p>У вас еще нет аккаунта? Регистрация</p>
			</div>
		</div>
	)
}

export default Login
