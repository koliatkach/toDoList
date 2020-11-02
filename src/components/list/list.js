import React from 'react';
import './list.css'

class List extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'enter task',
            list: ['Set at the bootom of apple tree', 'Avoid getting hit by falling apple', '???', 'Explain gravity'],
            newItem: null
        }
        this.showList = this.showList.bind(this);
        this.addItem = this.addItem.bind(this);
        this.getItem = this.getItem.bind(this);
        this.setDefault = this.setDefault.bind(this);


    }

    showList() {
        return this.state.list.map((item) => {
            return <p className='styleItem'>{item}</p>
        })
    }

    addItem() {
        if (this.state.newItem) {
            const newList = this.state.list;
            newList.unshift(this.state.newItem)
            this.setState({
                list: newList,
                newItem: null
            })
        }

    }

    getItem(e) {
        this.setState({
            newItem: e.target.value
        })
    }

    setDefault(e) {
        e.target.value = ''
    }

    render() {
        return (
            <div className='list'>
                <div className='list-input'>
                    <input
                        autoFocus
                        placeholder={this.state.name}
                        onChange={this.getItem}
                        onBlur={this.setDefault}
                    />
                    <button className='list-button' onClick={this.addItem}>add</button>
                </div>
                <div>
                    {this.showList()}
                </div>
            </div>
        );
    }
}

export default List;