import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api' 

import { Container } from './styles';
import {InputForm, SubmitButton, BackLink} from '../../components';
 
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
  
  const history = useHistory();
  const [id, setId] = useState('');
  
  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/sessions', {id});
      console.log(response.data);

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      
      history.push('/profile');
    } catch (error) {
      alert('Erro ao realizar o login, verifique seu ID e tente novamente');
      console.log(error);
    }
  }
  
  return (
      <Container>

        <section>
          <img src={logoImg} alt=""/>

          <form onSubmit={handleLogin} >

            <h1>Faça seu login</h1>

            <InputForm 
              placeholder="Sua ID"
              value={id}
              onChange={e => {setId(e.target.value)}}
            />
            
            <SubmitButton type="submit">
              Entrar
            </SubmitButton>
            
            <BackLink to="/register">
              <FiLogIn size="16" color="#E02041" />
              Não tenho cadastro
            </BackLink>
          
          </form>

        </section>
        <img src={heroesImg} alt=""/>
      </Container>
  );
}
