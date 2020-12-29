import React, { Component } from 'react';
import './tourlist.scss';
import Tour from '../Tour'
import { tourData } from "../../tourData";


export default class Tourlist extends Component {
    state = {
        tours: tourData
    };
    removeTour = id => {
        const {tours} = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState({
            tours: sortedTours
        });
    }
    render() {
        // console.log(this.state.tours)
        const {tours} = this.state;
        return (
            <div className="tourlist">
                {
                    tours.map(tour =>(<Tour key={tour.id} tour={tour} 
                    removeTour={this.removeTour}>

                    </Tour>))
                }
            </div>
        )
    }
}
