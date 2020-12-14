import {connect} from 'react-redux';
import App from '../components/App';
import {fetchRecipes} from '../actions/recipes';

const mapState = null;

const mapDispatch = (dispatch) => ({
fetchRecipes: () => {
console.log("test");
dispatch(fetchRecipes());
},
});

export default connect(mapState,mapDispatch)(App);
