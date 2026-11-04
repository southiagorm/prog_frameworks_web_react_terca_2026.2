import { useEffect, useState } from "react";
import type { Pessoa } from "../types/Pessoa";
import PessoaService from "../services/PessoaService";

const ListarPessoas = () =>{
    const [pessoas, setPessoas] = useState<Pessoa[]>([]);
    useEffect(()=>{
        async function buscarPessoas(){
            const data = await PessoaService.findMany();
            setPessoas(data.pessoas);
        }
        buscarPessoas();
    },[]);
    return(
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {pessoas.map(pessoa => (
                        <tr key={pessoa.id}>
                            <td>{pessoa.id}</td>
                            <td>{pessoa.nome}</td>
                            <td>{pessoa.usuario?.email ?? ""}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListarPessoas;