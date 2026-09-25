import apiClient from './leagueService';

export const getLeagues = async () => {
    const response = await apiClient.get('/league');
    return response.data;
};

export const createLeague = async (leagueData) => {
    const response = await apiClient.post('/league', leagueData);
    return response.data;
};