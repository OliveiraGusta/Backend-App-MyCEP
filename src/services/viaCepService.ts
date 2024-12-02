import axios from "axios";

interface Address {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
}

export const fetchCep = async (cep: string): Promise<Address> => {
    try {
        const response = await axios.get<Address>(`https://viacep.com.br/ws/${cep}/json/`);
        if ((response.data as any).erro) {
            throw new Error("Invalid CEP");
        }
        return response.data;
    } catch (error) {
        throw new Error("Error fetching CEP");
    }
};
