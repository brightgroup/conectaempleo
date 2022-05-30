import styled from 'styled-components'

export * from './SidebarMenu'

export const sidebarItems = [
  {
    text: 'Perfil compañia',
    icon: 'fa fa-user-o',
    path: '/perfil',
  },
  {
    text: 'Publicar tabajo',
    icon: 'fa fa-file-text-o',
    path: '/publicar-empleo',
  },
  {
    text: 'Transacciones',
    icon: 'fa fa-random',
    path: '/transacciones',
  },
  {
    text: 'Gestionar trabajos',
    icon: 'fa fa-briefcase',
    path: '/cambiar-contraseña',
  },
  {
    text: 'Resumen',
    icon: 'fa fa-id-card-o',
    path: '/resumen',
  },
  {
    text: 'Cambiar contraseña',
    icon: 'fa fa-key',
    section: 'change-pasword',
    path: '/cambiar-contraseña',
  },
  {
    text: 'Cerrar sesion',
    icon: 'fa fa-sign-out',
    section: 'log-out ',
    path: '/login',
  },
]

export const getItems = isEmployer => {
  if (isEmployer) return sidebarItems.filter(item => item.path !== '/publicar-empleo')
  return sidebarItems
}

export const WrapperSidebar = styled.div`
  flex-basis: 18rem;
  flex-grow: 0;
  height: 100%;

  .sidebar-item {
    padding: 1rem 1rem;
    width: 100%;
    cursor: pointer;
    color: gray;
    border-bottom: 0.0625rem solid #e1e7ff;

    &:last-of-type {
      border: none;
    }

    &__label {
      font-size: 0.9375rem;
      transition: 0.4s all;
    }

    &:hover {
      background-color: rgba(0, 151, 254, 0.1);
    }

    &:hover .sidebar-item__label {
      transform: translateX(0.3125rem);
      font-weight: bold;
    }
  }

  .container__image {
    width: 12em;
    height: 12em;
    margin: 0 auto;
    box-shadow: 0.1875rem 0.1875rem 0.1875rem gray;
  }
`
