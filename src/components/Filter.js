import React from 'react';

class Filter extends React.Component{
    render(){
        return(
            <div className="filter">
                <div className="filter-result">{this.props.count} Products</div>
                <div className="filter-sort">Order
                <select value={this.props.sort} onChange={this.props.sortProducts}>
                    <option>Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
                </div>
                <div className="filter-size">Filter{" "}
                    <select value={this.props.size} onChange={this.props.filterProducts}>
                        <option>ALL</option>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                    </select>
                </div>
            </div>
        );
    }
}
export default Filter;