import { Segment } from 'semantic-ui-react'; 
import './App.css';
import Home from './views/home';

function App() {
  return (

    <div className="App">
      
      <Home />

      <div style={{marginTop: '6%'}}>
        <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2023 - Projeto WEB III - IFPE Jaboatão dos Guararapes
        </Segment>
      </div>


    </div>
  );

}

export default App;
