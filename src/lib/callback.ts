import { Callback, CallbackError, Hero } from "./interfaces";
import axios, { AxiosError, AxiosResponse } from 'axios';
import { apiUrl, parseList } from "./config";

function getHeroCallback (
    email: string,
    callback: Callback<Hero>,
    callbackError?: CallbackError 
) {
    axios
        .get<Hero[]>(`${apiUrl}/heroes/email=${email}`)
        .then((response: AxiosResponse<Hero[]>) => {
            const data = parseList<Hero>(response);
            const hero = data[0];
            callback(hero);
        })
        .catch((error: AxiosError) => {
            callbackError('We are unable to fetch Hero');
        })
}

const getHeroTreeCallback = function(
    email: string,
    callback: Callback<Hero>,
    callbackError?: CallbackError
) {
    getHeroCallback(email, () => {}, (error: string) => {callbackError(error)})
};