import {ITodo} from './todo';
import {ADD_TODO,REMOVE_TODO,TOGGLE_TODO,REMOVE_ALL_TODOS} from './action';


export interface IAppstate{
   
   //empty array of type ITodo contains all our todo items
    todos:ITodo[];
    //contain the information when the todos array has been updated
    lastUpdate:Date;

}
export const INITIAL_STATE:IAppstate={
    todos:[],
    lastUpdate:null
}
//the state is the previous state of the application
//action is an object describing the change whisch has been dispathed
export function rootReducer(state: IAppstate, action): IAppstate {
    switch (action.type) {

        // the add todo case use the new todo object whiche is available in action.ts.todo and creates
        //a new state onject in which the todos array is extended whith that new todo element
        case ADD_TODO:
            action.todo.id = state.todos.length + 1;    
            return Object.assign({}, state, {
                todos: state.todos.concat(Object.assign({}, action.todo)),
                lastUpdate: new Date()
            })

            //action is dispatched if the user wants to complete /uncomplete a todo entry
            // in that case the isCompleted property of the current todo element must be changed to the opposite
        
        case TOGGLE_TODO:
            var todo = state.todos.find(t => t.id === action.id);
            var index = state.todos.indexOf(todo);
            return Object.assign({}, state, {
                todos: [
                    ...state.todos.slice(0, index),
                    Object.assign({}, todo, {isCompleted: !todo.isCompleted}),
                    ...state.todos.slice(index+1)
                ],
                lastUpdate: new Date()
            })

            // with remove todo an action is handled which is returining a new state where a specific
            //todo entry has been from the previous state's todos array
        case REMOVE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.filter(t => t.id !== action.id),
                lastUpdate: new Date()
            })
            // this  actions returns a new state object where the todos property is set an empty array
            // so that all todo items are removed from the application state
        case REMOVE_ALL_TODOS:
            return Object.assign({}, state, {
                todos: [],
                lastUpdate: new Date()
            })
    }
    return state;
}