import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'chair',
                    name: 'Стул'
                },
                {
                    key: 'table',
                    name: 'Стол'
                },
                {
                    key: 'divan',
                    name: 'Диван'
                },
                {
                    key: 'kreslo',
                    name: 'Кресло'
                },
                {
                    key: 'wardrobe',
                    name: 'Шкаф'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'> 
        {this.state.categories.map (el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
                {el.name}
                </div>
        ))}
      </div>
    )
  }
}

export default Categories