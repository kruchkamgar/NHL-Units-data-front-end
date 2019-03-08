import UnitsDisplay from '../ui/UnitsDisplay'
import { connect } from 'react-redux'
import { units, clearUnits } from '../../actions'

const mapStateToProps = (state, props) =>
  ({
    units: state.allUnits.units,
    fetching: state.allUnits.fetching
    // filter: props.params.filter,
  })

const mapDispatchToProps = dispatch =>
  ({
    loadUnits() {
      // if (value) {
        dispatch(
          units()
        )
      // } else {
        // dispatch(
        //   clearSuggestions()
        // )
      // }
    },
    clearUnits() {
      dispatch(
        clearUnits()
      )
    }
  })



export default connect(mapStateToProps, mapDispatchToProps)(UnitsDisplay)
