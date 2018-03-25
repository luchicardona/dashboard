import { connect } from 'react-redux';
import { fetch } from '../../store/todos/actions';
import Todos from './Todos';

function mapState(state) {
  return {};
}

const mapAction = dispatch => ({
  onClick: () => dispatch(fetch()),
});

export default connect(mapState, mapAction)(Todos);
