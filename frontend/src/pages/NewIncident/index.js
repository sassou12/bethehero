import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";

import api from '../../services/api';

import { Container } from './styles';
import {InputForm, SubmitButton, BackLink, TextAreaForm} from '../../components';
import logoImg from '../../assets/logo.svg';

export default function NewIncident() {

  const ong_id = localStorage.getItem("ongId");
  const history = useHistory();

  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ value, setValue ] = useState('');

  async function handleSaveIncident(e) {

    e.preventDefault();

    const data = { title, description, value };
    const header = { headers: {ong_id }};
    
    try {
      await api.post('incidents', data, header);

      history.push('/profile');

    } catch (error) {
      alert('Erro ao cadastrar o caso, tente novamente.');
    }
  }
  

  return (
    <Container>
    <div className="content">
      <section>
        <img src={logoImg} alt=""/>

        <h1>Cadastro novo caso</h1>
        <p>Descreva o caso detalhadamente para encontrar um héroi para resolver isso.</p>

        <BackLink to="/profile">
          <FiArrowLeft size="16" color="#E02041" />
          Voltar a home
         </BackLink>

      </section>

      <form onSubmit={handleSaveIncident} >
        <InputForm 
          placeholder="Titulo do caso"
          value={title}
          onChange={e=>{setTitle(e.target.value)}}
        />
        <TextAreaForm 
          placeholder="Descrição" 
          value={description}
          onChange={e=>{setDescription(e.target.value)}}
        />
        <InputForm 
          placeholder="Valor em Reais"
          value={value}
          onChange={e=>{setValue(e.target.value)}}
        />
        <SubmitButton>Cadastrar</SubmitButton>
      </form>
    </div>
    </Container>
  );
}
