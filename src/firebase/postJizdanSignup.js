
import axios from "axios";

export default class PostSignup {

    static setSignUP(data) {
        return axios.post("https://inprove-sport.info"+"/jizdan/setReg", data);
    }
}
