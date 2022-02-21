import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WrappMovie = styled.div`
  display: flex;
`;

export const ImageMovie = styled.img`
  margin-right: 30px;
`;

export const LinkButton = styled(Link)`
  display: inline-block;
  padding: 8px 10px;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #d1527c;
  text-decoration: none;
  cursor: pointer;
`;
export const MovieTitle = styled.h2`
  color: #d1527c;
`;

export const GenresList = styled.li`
  list-style: none;
  margin-left: -40px;
`;

export const RouteLink = styled(Link)`
  margin-right: 10px;
  text-decoration: none;
  color: black;
  font-size: 15px;
  color: #363853;

  &:hover {
    color: #d1527c;
  }
`;

export const MovieInput = styled.input`
  width: 300px;
  padding: 8px;
  border: 1px solid black;
  border-radius: 10px;
  margin-right: 6px;
  outline: none;
  transition: border 250ms linear;
  &:focus {
    border: 1px solid #d1527c;
  }
`;

export const MovieSearchBtn = styled.button`
  color: #fff;
  padding: 8px 14px;
  background-color: #d1527c;
  box-shadow: 0px 5px 12px rgba(153, 60, 133, 0.753);
  border-radius: 10px;
  font-weight: 500;
  font-size: 14px;
  border: none;
  text-align: center;
`;
