/****************** IMPORT *****************/
import styled from "styled-components/native";

/**************** COMPONENT ****************/
const MyPage = () => {
  return (
    <StyledContainer>
      <StyledTitle>
        MyPage
      </StyledTitle>
    </StyledContainer>
  )
}

/******************* STYLE *****************/
const StyledContainer  = styled.ScrollView`
`;
const StyledTitle = styled.Text`
`;

/****************** EXPORT *****************/
export default MyPage;
