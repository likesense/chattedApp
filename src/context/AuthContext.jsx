import { onAuthStateChanged } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react' // Добавьте импорт useState
import { auth } from '../firebase' // Убедитесь, что этот импорт корректен

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState({})
	useEffect(() => {
		//очистка
		const unsubscribe = onAuthStateChanged(auth, user => {
			setCurrentUser(user)
		})
		//возврат очистки
		return unsubscribe
	}, [])
	return (
		<AuthContext.Provider value={currentUser}>
			{/* //currentUser => значение провайдера */}
			{children}
		</AuthContext.Provider>
	)
}
