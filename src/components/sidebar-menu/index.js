import styled from 'styled-components'

export * from './SidebarMenu'

export const sidebarItems = [
  {
    text: 'Editar perfil',
    icon: 'fa fa-user',
    path: '/perfil',
  },
  {
    text: 'Publicar trabajo',
    icon: 'fa-solid fa-file-lines',
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
    path: '/gestionar-trabajos',
  },
  {
    text: 'Chat interno',
    icon: 'fa-solid fa-envelope',
    path: '/mensajes',
  },
  {
    text: 'Cerrar sesion',
    icon: 'fa fa-sign-out',
    section: 'log-out',
    path: '/iniciar-sesion',
  },
]

export const getItems = isEmployer => {
  if (!isEmployer) return sidebarItems.filter(item => item.path !== '/publicar-empleo')
  return sidebarItems
}

export const WrapperSidebar = styled.div`
  height: 100%;
  flex: 1;
  max-width: 300px;

  .sidebar-item {
    padding: 1rem;
    width: 100%;
    cursor: pointer;
    color: gray;
    border-bottom: 0.0625rem solid #e1e7ff;
    text-decoration: none;

    &:last-of-type {
      border: none;
    }

    &__label {
      font-size: 0.9375rem;
      transition: 0.4s all;
      font-weight: 300;
    }

    &:hover {
      background-color: rgba(0, 151, 254, 0.1);
    }

    &:hover .sidebar-item__label {
      transform: translateX(0.3125rem);
      font-weight: 600;
    }
  }
`
