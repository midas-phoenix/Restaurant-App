import createLogger from "redux-logger";
import thunk from "redux-thunk";
import { AllActions } from './actions/actions';
import { RootState, rootReducer } from './reducers/redusers';
import { Middleware, legacy_createStore as createStore, applyMiddleware } from 'redux';


export type RootAction = AllActions;

export type getStateType = () => RootState;

const configureStore1 = () => {
	const middlewares: Middleware[] = [thunk];

	if (process.env.NODE_ENV !== 'production') {
		middlewares.push(createLogger);
	}
	return createStore(
		rootReducer,
		// { auth: auth },
		applyMiddleware(...middlewares)
	);
};


export const store = configureStore1();