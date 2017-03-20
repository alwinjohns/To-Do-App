import { connect } from 'react-redux'
import Footer from './../components/todoList.js'
import {setVisibilityFilter} from './../actions/action.js'

const mapStateToProps = (state) => {
    return {
        active: state.currentFilter,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onClick: (filter) => {
        dispatch(setVisibilityFilter(filter))
      },
  }
}

const FooterContainer = connect(mapStateToProps, mapDispatchToProps) (Footer)

export default FooterContainer
