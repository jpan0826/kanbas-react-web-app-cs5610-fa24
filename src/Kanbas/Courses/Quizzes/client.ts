import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;
const SCORES_API = `${REMOTE_SERVER}/api/scores`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const deleteQuiz = async (quizId: string) => {
    const { data } = await axiosWithCredentials.delete(`${QUIZZES_API}/${quizId}`);
    return { data };
};

export const updateQuiz = async (quiz: any) => {
    const { data } = await axiosWithCredentials.put(`${QUIZZES_API}/${quiz._id}`, quiz);
    return data;
}

export const findQuiz = async (quizId: string) => {
    const { data } = await axiosWithCredentials.get(`${QUIZZES_API}/${quizId}`);
    return data
}

export const createScore = async (quizId: string) => {
    const response = await axiosWithCredentials.post(`${SCORES_API}/quiz/${quizId}`, quizId);
    return response.data;
}

export const updateScore = async (score: any) => {
    const { data } = await axiosWithCredentials.put(`${SCORES_API}/${score._id}`, score);
    return data;
}

export const getScore = async (quizId: string) => {
    const { data } = await axiosWithCredentials.get(`${SCORES_API}/quiz/${quizId}`);
    return data;
}
