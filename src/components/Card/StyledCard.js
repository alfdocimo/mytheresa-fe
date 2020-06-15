import styled from "styled-components";

const StyledCard = styled.div`
  background-image: linear-gradient(
      to bottom,
      #b993d6,
      rgba(140, 166, 219, 0.5)
    ),
    url(${(props) => props.imgUrl});
  background-size: cover;
  height: ${(props) => `${props.size}px`};
  width: ${(props) => `${props.size}px`};
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 20px;
  margin: 20px;
  border: none;
  border-radius: 5px;

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  color: white;
  align-items: flex-end;
  transition: all 0.3s ease-in-out;
  font-size: 1.2em;
  ${(props) =>
    props.hoverable &&
    `:hover {
    transform: scale(1.1);
    cursor: pointer;
  }`}
`;

export default StyledCard;
