import { connect } from 'react-redux';
import { getSlideName } from '../../actions/actions';
import { NewsLine } from '../../components';

const mapStateToProps = state => ({
  slideName: state.slideName
});

const mapDispatchToProps = dispatch => (
  console.log(store)
)

export default connect(mapStateToProps, mapDispatchToProps)(NewsLine);