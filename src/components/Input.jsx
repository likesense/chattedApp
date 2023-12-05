import React from 'react'
import img from '../img/img.png'
import Clip from '../img/paperclip.png'
const Input = () => {
	return (
		<div className='input'>
			<input type='text' placeholder='Написать' />
			<div className='send'>
				<img src={Clip} alt='clip' />
				<input type='file' style={{ display: 'none' }} id='file' />
				<labal htmlFor='file'>
					<img src={img} alt='img' />
				</labal>
				<button>Отправить</button>
			</div>
		</div>
	)
}

export default Input
