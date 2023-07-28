import React from 'react'
import { User } from './types'

type UserProps = {
	user: User
	onClick: () => void
	isSelected: boolean
}

const UserComponent: React.FC<UserProps> = ({ user, onClick, isSelected }) => {
	return (
		<div className='user-card-container'>
			<div
				className={`user-card ${isSelected ? 'selected' : ''}`}
				onClick={onClick}
			>
				<img src={user.image} alt={user.name} />
				<div className='user-info'>
					<div className='user-header'>
						<span>{user.name}</span>
						{/* <span>Rank: {user.highestRankingFriend}</span> */}
					</div>
					<p>{user.email}</p>
				</div>
			</div>
			<p className='user-card-friendnames'>{user.friendNames.join(', ')}</p>
		</div>
	)
}

export default React.memo(UserComponent)
