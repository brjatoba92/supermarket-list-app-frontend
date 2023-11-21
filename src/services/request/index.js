import {api } from '../api'

//obtendo valores presentes na API
export const getList = async () => {
    try {
        const result = await api.get("/list-items");
        return result.data;
    } catch (error) {
        alert ("Erro ao buscar dados da API")
        return { error }
    }
};

//criando um item
export const createItem = async (item) => {
    try {
        const result = await api.post("/list-item", {
            ...item, //desestruturar o objeto item
        });
        return result.data;
    } catch (error) {
        alert ("Erro ao salvar novo item na API")
        return { error }
    }
};
