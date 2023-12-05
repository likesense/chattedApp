// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyBepFD6qyv4UUvHhxdl9HsF5BN1m1VNTUM',
	authDomain: 'chatted-93649.firebaseapp.com',
	projectId: 'chatted-93649',
	storageBucket: 'chatted-93649.appspot.com',
	messagingSenderId: '739401137016',
	appId: '1:739401137016:web:bfbcba0dd015a47158268d',
	measurementId: 'G-EEMKDBEYE5',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()
