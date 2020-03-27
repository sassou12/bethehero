import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";

import api from '../../services/api' 

import { Container } from './styles';
import {InputForm, SubmitButton, BackLink} from '../../components';
import logoImg from '../../assets/logo.svg';


export default function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUF] = useState('');

  const history = useHistory();

  async function handleRegister(e){
    e.preventDefault();

    try {
      const data = {name, email, whatsapp, city: cidade, uf};
      const response = await api.post('/ongs', data);
      history.push('/');
      alert(`Seu ID de acesso: ${response.data.id}`);
    } catch (error) {
      alert(`Erro no cadastro, tente novamente.`);
      console.log(error);
    }

  }

  return (
    <Container>
      <div className="content">
        <section>
          <img src={logoImg} alt=""/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

          <BackLink to="/">
            <FiArrowLeft size="16" color="#E02041" />
            Já tenho cadastro
           </BackLink>

        </section>

        <form onSubmit={handleRegister}>
          <InputForm 
            placeholder="Nome da Ong" 
            value={name}
            onChange={e=>{setName(e.target.value)}} 
            />
          <InputForm type="email" 
            placeholder="E-mail"
            value={email}
            onChange={e=>{setEmail(e.target.value)}} 
            />
          <InputForm 
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={e=>{setWhatsapp(e.target.value)}} 
            />
          <div>
            <InputForm 
              placeholder="Cidade" 
              value={cidade}
              onChange={e=>{setCidade(e.target.value)}} 
              />
            <InputForm 
              placeholder="UF" 
              value={uf}
              onChange={e=>{setUF(e.target.value)}} 
            />
          </div>
          <SubmitButton>Cadastrar</SubmitButton>
        </form>
      </div>
    </Container>
  );
}
