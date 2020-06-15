import styled from "styled-components";

const StyledCard = styled.div`
  background-image: linear-gradient(
      to bottom,
      #b993d6,
      rgba(140, 166, 219, 0.5)
    ),
    url(${(props) => props.imgUrl});
  background-size: cover;
  height: 300px;
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 20px;
  margin: 20px;
  border: none;
  box-shadow: 0 8px 6px -6px #555;
  color: white;
  align-items: flex-end;
  transition: all 0.3s ease-in-out;
  font-size: 1.2em;

  :hover {
    transform: scale(1.1);
    cursor: pointer;
    box-shadow: 0 8px 6px -6px #999;
  }
`;

export default StyledCard;
