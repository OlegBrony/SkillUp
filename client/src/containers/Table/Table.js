import { connect } from 'react-redux';
import Table from '../../components/Table';

const mapStateToProps = state => ({
  matrix: state.Home.matrix
});

export default connect(mapStateToProps)(Table);