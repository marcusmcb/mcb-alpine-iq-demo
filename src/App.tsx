// src/App.tsx
import React, { useEffect, useState } from 'react'
import { User } from './types'
import UserComponent from './UserComponent'
import { sampleData } from './data'
import { formatUser } from './utils'
import './styles.css'

const App: React.FC = () => {
	const [users, setUsers] = useState<User[]>([])
	const [selectedUser, setSelectedUser] = useState<string | null>(null)
	const [searchQuery, setSearchQuery] = useState<string>('')
  console.log(users)
	useEffect(() => {
		// Simulate API fetch by using the sampleData directly
		const formattedUsers = sampleData.map((user) =>
			formatUser(user, sampleData)
		)
		setUsers(formattedUsers)
	}, [])

	const filteredUsers = users.filter((user) => {
		const query = searchQuery.toLowerCase()
		return (
			user.name.toLowerCase().includes(query) ||
			user.id.toLowerCase().includes(query) ||
			user.friends.some((friendId) => friendId.toLowerCase().includes(query))
		)
	})

	const handleUserClick = React.useCallback((id: string) => {
		setSelectedUser(id)
	}, [])

	return (
		<div className='container'>
			<div className='header'>
				<input
					type='text'
					className='search-input'
					placeholder='Search users'
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
			</div>
			<div className='user-columns'>
				{filteredUsers.map((user) => (
					<UserComponent
						key={user.id}
						user={user}
						onClick={() => handleUserClick(user.id)}
						isSelected={user.id === selectedUser}
					/>
				))}
			</div>
		</div>
	)
}

export default App
