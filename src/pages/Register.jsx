import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, db, storage } from '../firebase'
import Add from '../img/folder.png'

const Register = () => {
	const [err, setErr] = useState(false)
	const navigate = useNavigate()
	const handleSubmit = async e => {
		e.preventDefault()

		const displayName = e.target[0].value
		const email = e.target[1].value
		const password = e.target[2].value
		const file = e.target[3].files[0]

		try {
			const res = await createUserWithEmailAndPassword(auth, email, password)

			const storageRef = ref(storage, `avatars/${res.user.uid}`)
			const uploadTask = uploadBytesResumable(storageRef, file)

			uploadTask.on(
				'state_changed',
				() => {},
				err => {
					setErr(true)
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then(async downloadURL => {
						await updateProfile(res.user, {
							displayName,
							photoURL: downloadURL,
						})
						await setDoc(doc(db, 'users', res.user.uid), {
							uid: res.user.uid,
							displayName,
							email,
							photoURL: downloadURL,
						})
						await setDoc(doc(db, 'userChats', res.user.uid), {})
						navigate('/')
					})
				}
			)
		} catch (err) {
			setErr(true)
			console.error('Ошибка при регистрации:', err)
		}
	}

	return (
		<div className='formContainer'>
			<div className='formWrapper'>
				<span className='logo'>Chatted App</span>
				<span className='title'>Регистрация</span>
				<form onSubmit={handleSubmit}>
					<input type='text' placeholder='Логин' />
					<input type='email' placeholder='Почта' />
					<input type='password' placeholder='Пароль' />
					<input style={{ display: 'none' }} type='file' id='file' />
					<label htmlFor='file'>
						<img src={Add} alt='Folder' />
						<span>Добавить аватар</span>
					</label>
					<button>Регистрация</button>
					{err && <span>Упс, что-то пошло не так</span>}
				</form>
				<p>У вас уже есть аккаунт? Войти</p>
			</div>
		</div>
	)
}

export default Register
