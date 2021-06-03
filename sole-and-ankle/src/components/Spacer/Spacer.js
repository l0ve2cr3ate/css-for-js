import styled from "styled-components/macro";

const Spacer = styled.div`
  height: ${({ height }) => (height ? height : "auto")};
`;

export default Spacer;
