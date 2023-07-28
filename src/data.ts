// src/data.ts
import { User } from './types'
import PlaceholderImage from './images/placeholder.jpg'

export const sampleData: User[] = [
	{
		id: '1',
		rank: 1,
		name: 'John Doe',
		email: 'john.doe@example.com',
		friends: ['2', '3', '4'],
		image: PlaceholderImage,
		friendNames: [], // Empty array for now, we'll populate it later
		highestRankingFriend: 0, // Default value, we'll update it later
	},
	{
		id: '2',
		rank: 2,
		name: 'Jane Smith',
		email: 'jane.smith@example.com',
		friends: ['1', '3'],
		image: PlaceholderImage,
		friendNames: [], // Empty array for now, we'll populate it later
		highestRankingFriend: 0, // Default value, we'll update it later
	},
	{
		id: '3',
		rank: 3,
		name: 'Alex Johnson',
		email: 'alex.johnson@example.com',
		friends: ['1', '2'],
		image: PlaceholderImage,
		friendNames: [], // Empty array for now, we'll populate it later
		highestRankingFriend: 0, // Default value, we'll update it later
	},
	{
		id: '4',
		rank: 4,
		name: 'Sarah Williams',
		email: 'sarah.williams@example.com',
		friends: ['1'],
		image: PlaceholderImage,
		friendNames: [], // Empty array for now, we'll populate it later
		highestRankingFriend: 0, // Default value, we'll update it later
	},
	{
		id: '5',
		rank: 5,
		name: 'Michael Brown',
		email: 'michael.brown@example.com',
		friends: [],
		image: PlaceholderImage,
		friendNames: [], // Empty array for now, we'll populate it later
		highestRankingFriend: 0, // Default value, we'll update it later
	},
	{
		id: '6',
		rank: 6,
		name: 'Emily Davis',
		email: 'emily.davis@example.com',
		friends: [],
		image: PlaceholderImage,
		friendNames: [], // Empty array for now, we'll populate it later
		highestRankingFriend: 0, // Default value, we'll update it later
	},
	{
		id: '7',
		rank: 7,
		name: 'Christopher Wilson',
		email: 'christopher.wilson@example.com',
		friends: [],
		image: PlaceholderImage,
		friendNames: [], // Empty array for now, we'll populate it later
		highestRankingFriend: 0, // Default value, we'll update it later
	},
]
