// src/utils.ts
import { User } from './types'

export function formatUser(user: User, allUsers: User[]): User {
	const friendNames = user.friends.map((friendId) => {
		const friend = allUsers.find((u) => u.id === friendId)
		return friend ? friend.name : 'Unknown'
	})

	const highestRankingFriend = user.friends.reduce(
		(highestRanking, friendId) => {
			const friend = allUsers.find((u) => u.id === friendId)
			return friend && friend.rank < highestRanking
				? friend.rank
				: highestRanking
		},
		Infinity
	)

	return { ...user, friendNames, highestRankingFriend }
}
