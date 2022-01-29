import colors from '../colors.json';
import MainCard from './MainCard';

function App() {   
    
    return Object.keys(colors)
                 .map((color) => {                  
                 return <MainCard key={color} color={color} shades={colors[color]}  />
                });
              
}

export default App;