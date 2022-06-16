import styled from 'styled-components'

export * from './SidebarMenu'

export const sidebarItems = [
  {
    text: 'Editar perfil',
    icon: 'fa fa-user-o',
    path: '/perfil',
  },
  {
    text: 'Publicar trabajo',
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
    path: '/gestionar-trabajos',
  },
  {
    text: 'Resumen',
    icon: 'fa fa-id-card-o',
    path: '/resumen',
  },
  {
    text: 'Chat interno',
    icon: 'fa-solid fa-envelope',
    path: '/mensajes',
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
    section: 'log-out',
    path: '/iniciar-sesion',
  },
]

export const getItems = isEmployer => {
  if (!isEmployer) return sidebarItems.filter(item => item.path !== '/publicar-empleo')
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
    color: var(--gray);
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

  .sidebar {
    &__profile-box {
      width: 290px;
      height: 268px;
      margin: 0 auto;
    }

    &__container-image {
      width: 146px;
      height: 146px;
      margin-top: 26px;
    }

    &__profile-image {
      border-radius: 100%;
      object-fit: contain;
    }

    &__update-icon {
      width: 40px;
      height: 40px;
      position: absolute;
      right: 0;
      background-color: white;
      border-radius: 100%;
      font-size: 13px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: var(--blue);
      z-index: 1000;
    }

    &__input-file {
      position: absolute;
      right: 0;
      width: 40px;
      height: 40px;
      background-color: red;
      z-index: 2;
      display: none;
    }

    &__company-name {
      font-size: 24px;
      font-weight: 700;
      position: absolute;
      margin: auto;
      bottom: 1.875rem;
      color: black;
    }
  }
`
