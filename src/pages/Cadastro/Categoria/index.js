import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){    

    const valoresIniciais = {
        nome:'',
        cor:'',
        descricao:''
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(name, value){
        setValues({
            ...values,
            [name] : value
        })
    };

    function handleChange(e){
        setValue(e.target.getAttribute('name'), e.target.value);
    }
    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={(e) => {
                e.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);
                setValues( valoresIniciais );
            }}>

                <FormField
                    label='Nome da Categoria:'
                    type='text'
                    name='nome'
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label='Descrição:'
                    type='textarea'
                    name='descricao'
                    value={values.descricao}
                    onChange={handleChange}
                />

                <FormField
                    label='Cor:'
                    type='color'
                    name='cor'
                    value={values.cor}
                    onChange={handleChange}
                />

                <button>
                Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map( (categoria, key) => {
                    return (
                        <li key={categoria+key}>{categoria.nome}</li>
                    )
                })}
            </ul>

            <Link to='/'>
                Ir para home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;