import './App.css';
import styled from 'styled-components';
import { Wrapper, NavItem } from './Navbar.styles';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <h1>Hello</h1>
        <NavItem>item</NavItem>
        <NavItem>item</NavItem>
        <NavItem>item</NavItem>
      </Wrapper>

      <Hero>
        <h1>Styled Components</h1>
      </Hero>

      <div>
        <Button bgColor="navy" border="navy">Add</Button>
        <Button bgColor="red" border="red">Remove</Button>
        <Button bgColor="white" border="navy">More Info</Button>
      </div>
      
    </div>
  );
}

export default App;

const Hero = styled.div`
  width: 100vw;
  height: 500px;
  background-color: yellow;
`

const Button = styled.button`
  background-color: ${(props) => props.bgColor};
  border: 2px solid ${(props) => props.border};
  border-radius: 6px;
  padding: 15px 25px;
  margin: 5px;
`

