import { useForm } from "react-hook-form";
import type { LoginForm } from "../types/LoginForm";
import AuthService from "../services/AuthService";

const Login = () => {
    const {register,
           handleSubmit,
           formState: {errors, isSubmitting},
           reset
    } = useForm<LoginForm>();

    async function onSubmit(data:LoginForm){
        console.log(data);
        try{
            const responseData = await AuthService.login(data);
            localStorage.setItem("token", responseData.token);
        }catch(error){
            console.log(error);
        }
        reset();
    }

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="email">Email</label></td>
                            <td>
                                <input placeholder="Email" type="email" id="email" {...register("email", {required:"Digite um e-mail"})} />
                            </td>
                        </tr>
                        <tr><td>{errors.email && errors.email?.message}</td></tr>
                        <tr>
                            <td><label htmlFor="password">Senha</label></td>
                            <td>
                                <input placeholder="Senha" type="password" id="password" {...register("password", {required: "Digite uma senha"})} />
                            </td>
                        </tr>
                        <tr><td>{errors.password && errors.password?.message}</td></tr>
                    </tbody>
                </table>
                <button type="submit" disabled={isSubmitting}>Entrar</button>
            </form>
        </div>
    );
}

export default Login;