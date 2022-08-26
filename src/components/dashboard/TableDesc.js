import React, { Component } from 'react'

class TableDesc extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    renderTableHeader = () => {
        return (
            <tr>
                <th>Weeks</th>
                <th>Weeks</th>
                <th>Weeks</th>
                <th>Weeks</th>
                <th>Weeks</th>
                <th>Weeks</th>
            </tr>
        )
    }
    renderTableData = () => {
        return (
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                </tr>
        )
    }
    render() {
        return (
            <div className='table-dashboard'>
                <table id='table-desc'>
                    <tbody>
                        {this.renderTableHeader()}
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TableDesc;
