import api from "../api/api";

class PessoaService{
    async findMany(){
        const response = await api.get("/pessoas", {
            headers:{
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAZW1haWwuY29tIiwicm9sZSI6IkFMVU5PIiwiaWF0IjoxNzkzMTQ2MDY0LCJleHAiOjE3OTMxNDk2NjQsInN1YiI6IjEifQ.n4b2lvX1TyDTmHo_IWeJcEJNd57TsbD1dTGPmVA-teE"
            }
        }
        );
        return response.data;
    }
}

export default new PessoaService();