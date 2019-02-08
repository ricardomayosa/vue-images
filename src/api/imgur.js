import qs from 'qs';

const CLIENT_ID = '1ed832604b6908f';
//const CLIENT_SECRET = '9cf115bceec53d2f228c210af7ff1e0353f330f7';
const ROOT_URL = 'https://api.imgur.com';
// https://api.imgur.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=REQUESTED_RESPONSE_TYPE&state=APPLICATION_STATE

export default {
    login() {
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token',
            // state: APPLICATION_STATE,
        }
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
    }
}
