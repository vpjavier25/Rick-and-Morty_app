import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import About from './components/About'
import Detail from './components/Detail'
import { useState, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Form from './components/Form/Form'
import Favoritos from './components/Favoritos'


function App () {

  const [characters, setCharacters] = useState([]);

  const location = useLocation();

  const [access, setAccess] = useState(false);

  const username = 'javier@gmail.com';

  const password = '1234567Aa';

  const navigate = useNavigate();
 
  const onSearch = (character) => {
    /*setCharacters([{
      name: 'Morty Smith',
      species: 'Human',
      gender: 'Male',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      }])*/
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      })

     
    
  } 

  const onClose = (id) =>{
    setCharacters(characters.filter((character) =>   character.id !== id ) )   
  }

  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  if (location.pathname === '/'){
    return (
      <div>
        <Form login={login}></Form>
      </div>
    )
  }else{
    return(
      <div className='App' style={{ padding: '25px' }}>
        
        

        <Nav onSearch = {onSearch}/>
      
        <Routes>
          
          <Route path='/Home' element={<Cards characters={characters} onClose = {onClose}/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='favorites' element={<Favoritos/>}/>
         

        </Routes> 
      
    </div>
    )
  }

}

export default App
