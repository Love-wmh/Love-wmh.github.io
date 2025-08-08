import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: #2c3e50;
  padding: 1rem 2rem;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-right: 1.5rem;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;

    &.active {
      border-bottom: 2px solid #3498db;
    }
  }
`;

const Logo = styled(Link)`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 2rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">MyBlog</Logo>
        <ul>
          <li>
            <NavLink to="/" end>
              首页
            </NavLink>
          </li>
          <li>
            <NavLink to="/articles">文章</NavLink>
          </li>
          <li>
            <NavLink to="/about">关于</NavLink>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
