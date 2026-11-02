import { useEffect, useState } from "react";
import type { Pessoa } from "../types/Pessoa";
import PessoaService from "../services/PessoaService";

const ListarPessoas = () =>{
    const [pessoas, setPessoas] = useState<Pessoa[]>([]);
    useEffect(()=>{
        async function buscarPessoas(){
            const data = await PessoaService.findMany();
            console.log(data);
            console.log(pessoas);
            setPessoas(data);
        }
        buscarPessoas();
    },[]);
    return(
        <h1>Lista de Pessoas</h1>
    );
}

export default ListarPessoas;