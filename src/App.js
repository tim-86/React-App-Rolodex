import { useEffect, useState } from 'react';
import Cardlist from './components/card-list/card-list.component';
import Searchbox from './components/search-box/search-box.component';
import './App.css';



const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>  response.json())
    .then((users) => setMonsters(users));
  }, [])
 
  useEffect(()=> {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const onSearchChange = (event) => { 
    const searchFieldString= event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString);
  }

 

  return (
    <div className="App">
      <h1 className='app-title'> Monsters for everybody</h1>
      < Searchbox onChangeHandler={onSearchChange} placeholder={'Search Monsters'} className={'monsters-search-box'} />
      <Cardlist monsters={filteredMonsters} />
    </div>
  );
}
// class App extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
//       monsters : [ ],
//       searchField: ''
// 	  };
//     console.log('constructor')
// }

// componentDidMount() {
//   console.log('componentdidmount')
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response =>  response.json())
//     .then((users) => this.setState(() => {
//       return {monsters: users}
//     },
//     () => {
//       console.log(this.state)
//     }
//     ));
// }

//   onSearchChange = (event) => { 
//     const searchField = event.target.value.toLocaleLowerCase()
//     this.setState(() => {
//       return { searchField };
//     })
//     }
//   render () {

//     const { monsters, searchField } = this.state
//     const { onSearchChange } = this
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     console.log('render')
//     return (
//       <div className="App">
//         <h1 className='app-title'> Monsters for everybody</h1>
//         < Searchbox onChangeHandler={onSearchChange} placeholder={'Search Monsters'} className={'monsters-search-box'} />
//         <Cardlist monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
