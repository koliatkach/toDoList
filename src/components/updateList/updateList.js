import React from 'react';
import './updateList.css'

class UpdateList extends React.Component {

    constructor() {
        super()
        this.state = {
            doList: [
                {
                    task: 'Set at the bootom of apple tree',
                    done: false,
                }, {
                    task: 'Avoid getting hit by falling apple',
                    done: false,
                }, {
                    task: '???',
                    done: false,
                }, {
                    task: 'Explain gravity',
                    done: false,
                }
            ],
            doneList: [
                {
                    task: '111',
                    done: true,
                }, {
                    task: '222',
                    done: true,
                }, {
                    task: '333',
                    done: true,
                },
            ],
            newItem: null,
            name: 'What do you need to do',
        }
        this.showList = this.showList.bind(this)
        this.addItem = this.addItem.bind(this)
        this.getItem = this.getItem.bind(this)
        this.setDefault = this.setDefault.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.doneItem = this.doneItem.bind(this)
        this.unDoneItem = this.unDoneItem.bind(this)

    }

    showList(arr) {
        return arr.map((item) => {
            const index = arr.indexOf(item);
            if (!item.done) {
                return <p className='notDoneParag'>
                    {item.task}
                <div>
                <button onClick={() => this.doneItem(index)} className='done'>
                        V
                    </button>

                    <button onClick={() => this.deleteItem(arr, index)} className='delete'>
                        X
                    </button>
                </div>
                    
                </p>
            } else if (item.done) {
                return <p className='doneParag'>
                    !!!{item.task}
                    <div>
                        <button onClick={() => this.unDoneItem(index)} className='unDone'>
                            U
                    </button>

                        <button onClick={() => this.deleteItem(arr, index)} className='delete'>
                            X
                    </button>
                    </div>

                </p>
            }
        })
    }

    addItem() {
        if (this.state.newItem) {
            const list = this.state.doList;
            const item = {
                task: this.state.newItem
            };
            list.unshift(item);
            this.setState({
                list,
                newItem: null
            })
        }
    }

    deleteItem(arr, index) {
        const deletedItem = arr.splice(index, 1)
        this.setState({
            arr
        })
        return deletedItem
    }

    doneItem(index) {
        const doList = this.state.doList
        const doneItem = doList.splice(index, 1)
        doneItem[0].done = true
        const doneList = this.state.doneList
        doneList.unshift(doneItem[0])
        this.setState({
            doList,
            doneList
        })
    }

    unDoneItem(index) {
        const doneList = this.state.doneList
        const unDoneItem = doneList.splice(index, 1)
        unDoneItem[0].done = false
        const doList = this.state.doList
        doList.unshift(unDoneItem[0])
        this.setState({
            doList,
            doneList
        })
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
            <div className='updateList'>
                <h1>To do:</h1>
                {this.showList(this.state.doList)}
                <div className='inputForm'>
                <span className='task'>Task:</span>
                <input
                    onChange={this.getItem}
                    onBlur={this.setDefault}
                    placeholder={this.state.name}>
                </input>
                </div>
    
                <button
                    className='add'
                    onClick={this.addItem}
                >Save item</button>
                <h1 className='doneList'>Done:</h1>

                {this.showList(this.state.doneList)}

            </div>
        );
    }

}

export default UpdateList;