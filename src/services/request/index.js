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
        alert ("Erro ao criar novo item")
        return { error }
    }
};

//criando um item
export const updateItem = async (id, item) => {
    try {
        const result = await api.put(`/list-item/${id}`, {
            ...item, //desestruturar o objeto item
        });
        return result.data;
    } catch (error) {
        alert ("Erro ao salvar novo item")
        return { error }
    }
};

//criando ação de deleção - 3
export const deleteItem = async (id) => {
    try {
        const result = await api.delete(`/list-item/${id}`);
        return result.data;
    } catch (error) {
        alert ("Erro ao deletar novo item")
        return { error };
    }
};