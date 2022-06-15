import styled from 'styled-components'

export * from './BurgerButton'

export const NAVIGATION_ITEMS_MENU = [
  {
    icon: 'fas fa-home',
    label: 'Inicio',
    pathname: '/',
  },
  {
    icon: 'fa-solid fa-chalkboard-user',
    label: 'publicaciones',
    pathname: '/',
  },
  {
    icon: 'fa-solid fa-list-check',
    label: 'Trabajos',
    pathname: '/',
  },
  {
    icon: 'fa-solid fa-building',
    label: 'Empresas',
    pathname: '/empresas',
  },
  {
    icon: 'fa-solid fa-bullhorn',
    label: 'Publicar empleo',
    pathname: '/publicar-empleo',
  },
  {
    icon: 'fa fa-user',
    label: 'Iniciar sesion',
    pathname: '/iniciar-sesion',
    className: 'burger__option-login',
  },
  {
    icon: 'fa-solid fa-registered',
    label: 'Registrarte',
    pathname: '/registro',
    className: 'burger__option-login',
  },
]

export const WrapperButton = styled.div`
  .burger {
    &__main {
      display: none;
    }

    @media screen and (max-width: 1120px) {
      &__button {
        width: 1.8em;
        height: 2em !important;
        align-content: space-around;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        position: relative;
      }

      &__icon {
        width: 2em;
        height: 0.2rem !important;
        background-color: var(--blue);
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
          transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
        }

        &:nth-child(2) {
          transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
          opacity: ${({ open }) => (open ? 0 : 1)};
        }

        &:nth-child(3) {
          transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
        }
      }

      &__main {
        position: absolute !important;
        display: flex;
        background-color: #fff !important;
        flex-flow: column nowrap;
        width: 100%;
        max-width: 250px;
        height: 100vh;
        right: ${({ open }) => (open ? '-30px' : '-300px')};
        top: 85px;
        transition: all 0.5s ease-in-out;
        z-index: 200;
        list-style-type: none;
      }

      &__option {
        padding: 10px 0;
        color: black;

        &:hover {
          background-color: var(--blue);
        }

        &-login {
          display: none;
        }
      }
    }

    @media screen and (max-width: 768px) {
      &__main {
        width: 200px;
        right: ${({ open }) => (open ? '-30px' : '-300px')};
      }

      &__option {
        display: flex;

        &-login {
          display: flex;
        }
      }
    }
  }
`
