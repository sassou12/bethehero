import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display:flex;
  align-items: center;
  justify-content: center;

  .content {
    background: #F0F0F5;
    width: 100%;
    padding: 96px;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  form {
    width: 100%;
    max-width:450px;
    div {
      display:grid;
      grid-template-columns: 1fr 80px;
      grid-column-gap: 8px;
    }
    input {
      margin-top: 8px;
    }
  }

  section {
    width: 100%;
    max-width: 380px;

    h1 {
      margin: 64px 0 32px;
      font-size: 32px;
    }

    p {
      font-size: 18px;
      color: #737380;
      line-height: 32px;
    }
  }
`;
