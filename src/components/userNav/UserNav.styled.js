import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from 'styles';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  width: 164px;
  font-family: ${p => theme.fonts.body};
  text-decoration: none;
  font-size: 14px;
  font-weight: ${p => theme.fontWeights.medium};
  color: white;
  padding: 8px 37px;
  border: 2px solid #f59256;
  border-radius: 40px;
  line-height: 1.35;
  background-color: ${p => theme.colors.primary};
  transition: all 0.3s linear;

  &:hover {
    color: ${p => theme.colors.black};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => theme.colors.black};
  }

  @media screen and (min-width: 768px) {
    line-height: 1.35;
    font-size: 16px;
    margin-right: 55px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 0;
    justify-content: flex-end;
  }
`;

export const AvatarIconEl = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 12px;
`;