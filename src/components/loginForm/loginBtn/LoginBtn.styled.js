import styled from '@emotion/styled';

export const Button = styled.button`
  margin-top: 24px;
  padding: 8px 37px;
  background-color: #f59256;
  border: 2px solid #f59256;
  border-radius: 40px;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.04em;
  color: #fff;
  transition: color 300ms linear, background-color 300ms linear;
  :hover,
  :focus {
    background-color: #fff;
    color: rgba(0, 0, 0, 1);
  }
  @media (min-width: 768px) {
    padding: 10px 28px;
  }
`;
