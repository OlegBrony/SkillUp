import { connect } from 'react-redux';
import { getDataAsync, writeTableMatrix } from '../../actions/actions';
import Home from '../../components/Home';


const mapDispatchToProps = dispatch => ({
  getDataAsync: () => dispatch(getDataAsync()),
  writeTableMatrix: (matrix) => dispatch(writeTableMatrix(matrix))
})

export default connect(undefined, mapDispatchToProps)(Home);