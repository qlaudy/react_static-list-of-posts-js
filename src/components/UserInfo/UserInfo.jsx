import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={`malito: ${user.email}`}>
    {user.name}
  </a>
);
