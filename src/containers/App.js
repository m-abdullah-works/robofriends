import React  from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
class App extends React.Component {
	constructor(){
		super()
		this.state ={
			robots: [],
			searchfield: ""
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response =>{
			return response.json();
		})
		.then(users =>{
			this.setState({ robots: users})
		})
	}
	onSearchChange = (event) =>{
		this.setState({ searchfield : event.target.value });
	}
render(){
		const { robots, searchfield} = this.state;
		const filterRobots = robots.filter(robot =>{
		return robot.name.toLowerCase().includes(searchfield.toLowerCase())
	})
		if (this.state.robots.length===0) {
			return(<h1>LOADING</h1>);
		}else{
		return(
		<div className="tc">
		<h1 className='f1'>RoboFriends</h1>
		<SearchBox searchChange= {this.onSearchChange} />
		<Scroll>
			<ErrorBoundary>
				<CardList robots={filterRobots} />
			</ErrorBoundary>
		</Scroll>
		</div>
					)
				}
			}
	}
export default App;