/****************** IMPORT *****************/
import styled from "styled-components/native";
import {colors, width, height} from '../static/globalStyle'; 
import Ficon from 'react-native-vector-icons/Feather';
import Micon from 'react-native-vector-icons/MaterialIcons';

/**************** COMPONENT ****************/
const Login = ({navigation}: {navigation: any}) => {
  return (
    <StyledContainer>
      <StyledSection style={{height:height*300, justifyContent:'center'}}>
        <StyledLogo resizeMode='contain' source={require('../asset/image/logo_text.png')}/>
      </StyledSection>
      <StyledSection>
        <StyledRow>
          <Ficon name="mail" size={30} color="#777" />
          <StyledInput />
        </StyledRow>
        <StyledRow>
          <Micon name="password" size={30} color="#777" />
          <StyledInput />
        </StyledRow>
      </StyledSection>      
    </StyledContainer>
  )
}

/******************* STYLE *****************/
const StyledContainer  = styled.ScrollView`
  background:#fff;
`;
const StyledSection = styled.View`
  width:100%;
  align-items:center;
  padding:20px;
`;
const StyledLogo = styled.Image`
  height:70px; 
`;
const StyledRow = styled.View`
  align-items:center;
  flex-direction:row;
  margin-bottom:10px;
  column-gap:10px;
`;
const StyledInput = styled.TextInput`
  height:55px; 
  width:80%;
  border-width:1px;
  border-color:#eee;
  border-radius:15px;
  padding-left:15px;
`;

/****************** EXPORT *****************/
export default Login;
