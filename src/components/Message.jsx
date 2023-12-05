import React from 'react'

const Message = () => {
	return (
		<div className='message owner'>
			<div className='messageInfo'>
				<img
					src='https://images11.domashnyochag.ru/upload/img_cache/e9e/e9e885bc744faf05a6fd0f21962eba77_ce_1159x801x21x0_cropped_1332x888.jpg'
					alt='person'
				/>
				<span>Сейчас</span>
			</div>
			<div className='messageContent'>
				<p>Привет!</p>
				<img
					src='https://get.pxhere.com/photo/person-people-portrait-facial-expression-hairstyle-smile-emotion-portrait-photography-134689.jpg'
					alt='person'
				/>
			</div>
		</div>
	)
}

export default Message
