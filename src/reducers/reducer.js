import {bankOne} from '../components/soundbank'

const defaultState={
  display: "drum machine: Press/click button",
  sounds: bankOne
}


const DrumReducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'UPDATE_DISPLAY':
        return Object.assign({}, state, {display: action.text})
    
        default:
            return state;
    }
};

export default DrumReducer;

