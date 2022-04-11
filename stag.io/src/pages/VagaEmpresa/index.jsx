import React, { useState } from "react";
// import NavBar from "../../components/NavBar";
import * as Yup from "yup";
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import './index.css';

const VagaEmpresa = (props) => {
    const { vaga } = props;
    const [ values, setValues ] = useState({
        title:'',
        descripiton: '',
        privilege:'',
        workload: '',
        price: '',
        requirements: '',
        workType: '',
        schoolLevel: '',
    });

    const onChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value});
    }

    async function handleSubmit(){

        const schema = Yup.object({
            title: Yup.string().required("Título é obrigatório!"),
            descripiton: Yup.string().required("Descrição é obrigatório!"),
            privilege: Yup.string().required("Privilégios é obrigatório!"),
            workload: Yup.string().required("Carga horária é obrigatório!"),
            price: Yup.string().required("Valor da bolsa é obrigatória!"),
            requirements: Yup.string().required("requisitos é obrigatória!"),
            workType: Yup.string().required("Regime é obrigatório!"),
            schoolLevel: Yup.string().required("escolaridade é obrigatório!"),
        });


        try{
            await schema.validate(values);
            toast.success("Vaga adicionada");
            window.location.pathname = '/detalhes-empresa'
        }  
        catch(error){
            if( error instanceof Yup.ValidationError){
                toast.error(error.message);
            }
        }
    }


    return(
        <div className="vaga-empresa">
            <h1 className="subTitle">
                Adicionar/Editar vaga
            </h1>
            {/* <form onSubmit={handleSubmit}> */}
                <div className="content-row">
                    <div className="content-column">
                        <h2 className="text">
                            Título:
                        </h2>
                        <input id="title" name="title" value={values.title} onChange={onChange} className="text-box-type-1" placeholder=""></input>
                        <h2 className="text">
                            Descrição:
                        </h2>
                        <input id="descripiton" name="descripiton" value={values.descripiton} onChange={onChange} className="text-box-type-2" ></input>
                        <h2 className="text">
                            Privilégios:
                        </h2>
                        <input id="privilege" name="privilege" value={values.privilege} onChange={onChange} className="text-box-type-2"></input>
                    </div>

                    <div className="content-column">
                        <h2 className="text">
                            Carga horária:
                        </h2>
                        <input id="workload" name="workload" value={values.workload} onChange={onChange} className="text-box-type-1" ></input>
                        <h2 className="text">
                            Valor da bolsa:
                        </h2>
                        <input id="price" name="price" value={values.price} onChange={onChange} className="text-box-type-1" ></input>
                        <h2 className="text">
                            Requisitos:
                        </h2>
                        <input id="requirements" name="requirements" value={values.requirements} onChange={onChange} className="text-box-type-2"></input>
                    </div>
                    <div className="content-column">
                        <h2 className="text">
                            Regime
                        </h2>
                        <select id="workType" name="workType" value={values.workType} onChange={onChange} className="select-list-1" >
                            <option value={""}>Selecione</option>
                            <option value={"Remoto"}>Remoto</option>
                            <option value={"Presencial"}>Presencial</option>
                            <option value={"Semi-presencial"}>Semi-presencial</option>
                        </select>
                        <h2 className="text">
                            Escolaridade
                        </h2>
                        <select id="schoolLevel" name="schoolLevel" value={values.schoolLevel} onChange={onChange} className="select-list-2">
                            <option value={""}>Selecione</option>
                            <option value={"Ensino Superior"}>Ensino Superior</option>
                            <option value={"Ensino Médio"}>Ensino Médio</option>
                            <option value={"Ensino Fundamental"}>Ensino Fundamental</option>
                        </select>
                        <div className="button-row">
                            <button className="btn btn-secondary d-block w-100 buttonColor" onClick={handleSubmit}>Adicionar</button>
                        </div>
                    </div>
                </div>
            {/* </form> */}
            <Toaster />
        </div>
    );
}

export default VagaEmpresa;