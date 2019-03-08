import { PropTypes } from 'react'
// import Terrain from 'react-icons/lib/md/terrain'
// import SnowFlake from 'react-icons/lib/ti/weather-snow'

const UnitRow = ({ html_id, id, created_at, instances, plus_minus }) =>
    <tr id = {html_id}>
        <td>
            { instances["players_names"]
              .map(name =>
                 <div className="data-list">{name}</div>) }
        </td>
        <td>
            { plus_minus["plus_minus"] }
        </td>
        <td>
            {/**/}
        </td>
    </tr>

UnitRow.propTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    powder: PropTypes.bool,
    backcountry: PropTypes.bool,
    onRemoveDay: PropTypes.func
}

export default UnitRow
