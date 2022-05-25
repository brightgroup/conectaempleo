import styled from "styled-components";

export const sidebarItems = [
  {
    text: "Perfil compañia",
    icon: "fa fa-user-o",
    section: "company-profile",
  },
  {
    text: "Publicar tabajo",
    icon: "fa fa-file-text-o",
    section: "post_job",
  },
  {
    text: "Tansacciones",
    icon: "fa fa-random",
    section: "transactions",
  },
  {
    text: "Gestionar trabajos",
    icon: "fa fa-briefcase",
    section: "manage-job",
  },
  {
    text: "Resumen",
    icon: "fa fa-id-card-o",
    section: "resume",
  },
  {
    text: "Cambiar contraseña",
    icon: "fa fa-key",
    section: "change-pasword",
  },
  {
    text: "Cerrar sesion",
    icon: "fa fa-sign-out",
    section: "log-out ",
  },
];

export const WrapperSidebar = styled.div`
  flex-basis: 18rem;
  flex-grow: 0;

  .sidebar-item {
    padding: 8px 16px;
    width: 100%;

    &:hover {
      background-color: rgba(0, 151, 254, 0.1);
      border-left: 2px solid #0097fe;
    }
  }

  .span--text {
    font-size: 1.2em;
  }

  .container__image {
    width: 12em;
    height: 12em;
    margin: 0 auto;
    box-shadow: 3px 3px 3px gray;
  }
`;
