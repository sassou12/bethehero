import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  
`;

export const InputForm = styled.input`
  width: 100%;
  height: 60px;
  color: #333;
  border: 1px solid #DCDCE6;
  border-radius: 8px;
  padding: 0 24px;
`;

export const TextAreaForm = styled.textarea`
  width: 100%;
  min-height: 140px;
  color: #333;
  border: 1px solid #DCDCE6;
  border-radius: 8px;
  padding: 16px 24px;
  line-height: 24px;
  resize: vertical;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 60px;
  background-color: #E02014;
  border-radius: 8px;
  border: 0;
  color: #FFF;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.8s;

  &:hover {
  filter: brightness(90%);
  }
`;

export const ButtonLink = styled(Link)`
  width: 100%;
  height: 60px;
  background-color: #E02014;
  border-radius: 8px;
  border: 0;
  color: #FFF;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.8s;

  &:hover {
  filter: brightness(90%);
  }
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: #41414D;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;

  svg {
    margin-right: 8px;
  }

  &:hover {
    opacity: 0.8;
  }
`;
