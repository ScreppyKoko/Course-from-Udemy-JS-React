import {Component} from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
// import nextId from "react-id-generator";

import './app.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : [
                {name: 'Rus', salary: '2000', increase: true, rise: false, id: 1},
                {name: 'Art', salary: '3000', increase: true, rise: true, id: 2},
                {name: 'Ed', salary: '2500', increase: false, rise: true, id: 3},
                {name: 'Shura', salary: '1100', increase: true, rise: false, id: 4}
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 5;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [...before, ...after];
            // return {
            //     data: newArr
            // }

            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }
    
    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id );
        //     const old = data[index];
        //     const newItem = {...old, increase: !old.increase};
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        //     return {
        //         data: newArr
        //     }
        // })
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            console.log(item.name.indexOf(term) > -1);
            return item.name.toLowerCase().indexOf(term.toLowerCase().trim()) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({
            term: term
        })
    }

    filterPost = (items, filter) => {
        switch(filter) {
            case 'promotion': 
                return items.filter(item => item.rise);
            case 'big-salary': 
                return items.filter(item => item.salary >= 2000);
            default: 
            return items;
        }
    }
    
    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const promotion = this.state.data.filter(item => item.rise).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased} promotion={promotion}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                    <EmployeesList 
                        data={visibleData}
                        onDelete={this.deleteItem}
                        onToggleProp={this.onToggleProp}/>
                    <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;