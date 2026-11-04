import api from "../api/api";

class PessoaService{
    async findMany(){
        const response = await api.get("/pessoas");
        return response.data;
    }
}

export default new PessoaService();