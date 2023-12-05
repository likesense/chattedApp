import React from 'react'

const Navbar = () => {
	return (
		<div className='navbar'>
			<span className='logo'>Chatted App</span>
			<div className='user'>
				<img
					src='https://get.pxhere.com/photo/person-people-portrait-facial-expression-hairstyle-smile-emotion-portrait-photography-134689.jpg'
					alt='man'
				/>
				<span>Иван</span>
				<button className='logout'>Выйти</button>
			</div>
		</div>
	)
}

export default Navbar
