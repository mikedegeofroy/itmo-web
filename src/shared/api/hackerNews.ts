import axios from 'axios';

export const getTopStories = async (): Promise<number[]> => {
  const res = await axios.get<number[]>(
    'https://hacker-news.firebaseio.com/v0/topstories.json'
  );

  return res.data;
};

interface Article {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  text: string;
  time: number;
  title: string;
  type: 'story';
  url: string;
}

export const getStoryDetails = async (id: number) => {
  const res = await axios.get<Article>(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );

  return res.data;
};
