import { SAVE_USER_DETAILS } from '../redux/actions';

export default function loginDetails(state = {}, action = {}) {
    switch (action.type) {

        case SAVE_USER_DETAILS:
            {
                state = action.payload;
                return state;

            }


    }
    return state;
}