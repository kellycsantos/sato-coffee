import axios from 'axios';
const baseUrl = 'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json';


export interface AllCoffesType {
    id: number;
    name: string;
    price: number;
    votes: number;
    rating: number;
    image: string;
    popular: boolean;
    available: boolean;
    
}

export const getAllCoffees = async () => {
    return axios.get<AllCoffesType[]>(baseUrl).then((response) => {
        return response.data;
    }).catch((error) => {
        console.log(error);
        return [] as AllCoffesType[];
    });
}