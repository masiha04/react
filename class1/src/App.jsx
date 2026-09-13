import './App.css'
import UserCard from './components/usercard'
import shinchan from './assets/shinchan.jpg';
import kazama from './assets/kazama.jpeg';
import nanny from './assets/nanny.jpeg';

function App() {
 

  return (
    <div className="container">
       
       <UserCard name="shinchan" desc="This is shinchan " image={shinchan } style={{"border-radius":"10px"}}/>
        <UserCard name="Nanny" desc="This is kazama" image={nanny}/>
       <UserCard name="Kazama" desc="This is nanny " image={kazama}/>
      
       
    </div>
   

    
  )
}

export default App
