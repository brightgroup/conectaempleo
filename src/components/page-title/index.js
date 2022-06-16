import styled from 'styled-components'

export * from './PageTitle'

export const paths = {
  perfil: '/',
  'publicar-empleo': '/perfil',
  transacciones: '/publicar-empleo',
  resumen: 'transacciones',
  mensajes: 'resumen',
  'cambiar-contrasea': 'mensajes',
}

export const Wrapper = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid #e1e7ff;

  .page-title {
    &__button {
      width: 60px;
      height: 28px;
      background: var(--blue);
      font-size: 12px;
      cursor: pointer;
      position: relative;
      transition: 0.4s all;

      &::selection {
        background-color: #3396d1;
      }
      &::before {
        content: '';
        display: block;
        position: absolute;
        left: -28px;
        border-top: 14px solid transparent;
        border-right: 14px solid var(--blue);
        border-bottom: 14px solid transparent;
        border-left: 14px solid transparent;
      }
    }
  }
`
