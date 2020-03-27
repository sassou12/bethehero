import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api' 

import { Container } from './styles';
import { ButtonLink } from '../../components';
import logoImg from '../../assets/logo.svg';

export default function Profile() {

  const ongName = localStorage.getItem("ongName");
  const ongId = localStorage.getItem('ongId');
  const history = useHistory();
  const [incidents, setIncidents] = useState([]);

  useEffect(()=>{
    api.get('profile', {
      headers: {
        ong_id: ongId,
      }
    }).then(response =>{
      setIncidents(response.data);
    });
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          ong_id: ongId,
        }
      });
      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (error) {
      alert('Erro ao excluir o caso, tente novamente');
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <Container>

      <header>
        <img src={logoImg} alt=""/>
        <span>Bem vinda {ongName}</span>
        <ButtonLink to="/incidents/new" >
          Cadastrar novo caso
        </ButtonLink>
        <button onClick={handleLogout} >
          <FiPower size={18} color="#E02014" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id} >
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat('pt-Br', 
                { style: 'currency', 
                  currency: 'BRL'
                }).format(incident.value)}
            </p>

            <button type="button" 
              onClick={() => {handleDeleteIncident(incident.id);}} >
              <FiTrash2 size={20} color="#A8A8B3" />
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}
