export const SAVE_USER_DETAILS = "SAVE_USER_DETAILS";

export function saveUserDetailsAction({ token, loggedIn }) {
    return {
        type: SAVE_USER_DETAILS,
        payload: {
            token,
            loggedIn
        }
    }
}