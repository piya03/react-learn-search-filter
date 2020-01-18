
import React, { Component } from "react";
import './common.css';

// let fruitName = ;
class Gif extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputvalue: "",
            fruitNameArr: ['appple', 'banana', 'orange', 'pineapple', 'plum']
        }
        console.log(this.state.fruitNameArr,"fruitNameArr")
    }
    handleinput = (e) => {
        console.log(e.target.value)
        this.setState({
            inputvalue: e.target.value,
        })
    }

    render() {
        const { inputvalue,fruitNameArr } = this.state
        const filterFruits = fruitNameArr.filter((each) => {
            console.log("each, inputValue", each, inputvalue )
            return each.indexOf(inputvalue.toLowerCase()) !== -1

        })
        console.log(filterFruits)
        return (
            <div className="search-container">
                <form>
                    <input type="text" placeholder="Search.." value={inputvalue}
                        onChange={this.handleinput} />
                    <button type="submit"><i className="fa fa-search"></i>search</button>

                    <ul>
                        {filterFruits.map((each, index) => {
                            return (<li key={index}>{each}</li>)
                        })}
                    </ul>
                </form>
            </div>
        )
    }
}

export default Gif;