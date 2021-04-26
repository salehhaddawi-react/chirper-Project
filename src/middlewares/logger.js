export const logger = (store) => (next) => (action) => {
    console.group(action.type);
        console.log('the action is:', action);
        const returnVal = next(action);
        console.log('the new state:', store.getState());
    console.groupEnd()
    return returnVal;
}