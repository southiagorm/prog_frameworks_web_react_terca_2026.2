import api from "../api/api";
import type { LoginForm } from "../types/LoginForm";

class AuthService{
    async login({email, password}:LoginForm){
        const response = await api.post("/login",{email, password});
        return response.data;
    }
}

export default new AuthService();