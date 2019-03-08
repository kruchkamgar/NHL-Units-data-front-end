import { PropTypes } from 'react'
import { Link } from 'react-router'
import UnitRow from './UnitRow'
// import Terrain from 'react-icons/lib/md/terrain'
// import SnowFlake from 'react-icons/lib/ti/weather-snow'
import '../../stylesheets/UnitsDisplay.scss'

const UnitsDisplay = ({ units=[], loadUnits=f=>f, clearUnits=f=>f, fetching=false }) => {

    const activeFilterStyle = {
        textDecoration: 'none',
        color: 'black'
    }

    return (
        <div className="units-list">
            <table>
                <caption>double click to remove</caption>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Resort</th>
                    <th>{/*<SnowFlake />*/}</th>
                    <th></th>
                </tr>
                <tr>
                    <td colSpan={4}>
                        <Link to="/list-days">All Days</Link>
                        <Link to="/list-days/powder" activeStyle={activeFilterStyle}>Powder Days</Link>
                        <Link to="/list-days/backcountry" activeStyle={activeFilterStyle}>Backcountry Days</Link>
                    </td>
                </tr>
                </thead>
                <tbody>
                { units.map((unit, i) =>
                    <UnitRow key={i} {...unit} html_id={"row" + i} />
                ) }
                </tbody>
            </table>
            <div className="load">
              <button type="button" onClick={() => loadUnits()}>Load Units</button>
            </div>
            <div className="unload">
              <button type="button" onClick={() => clearUnits()}>Clear Units</button>
            </div>
        </div>
    )
}

UnitsDisplay.propTypes = {

}

export default UnitsDisplay
