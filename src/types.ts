// src/types.ts
export type User = {
  id: string;
  rank: number;
  name: string;
  email: string;
  image: string;
  friends: string[];
  friendNames: string[];
  highestRankingFriend: number;
};
