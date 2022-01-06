import React from 'react';
import Card from './Card';
import './Main.css';


export default class Main extends React.Component {

    render() {


        return (
            <main>
                <div className='card-container'>
                    <Card />
                    <Card />        
                </div>
            </main>
        )
    }
}