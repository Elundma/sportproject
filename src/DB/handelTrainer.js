/*
By Ahmed Al-Ghezi
 */
import http from "./httpCommon";
export default class HandelTrainer{

    static createTest(data){
        return http.post("/trainer/createTest", data);
    }


    //todo remove
    static getTestsAthletes() {
        return http.get("/trainer/getTestAthletes");
    }

    static getAllTests(discipline) {
        return http.post("/trainer/getTests",discipline);
    }

    static getMyTests() {
        return http.get("/trainer/getMyTests");
    }

    static postMyTests(myTestsArr) {
        return http.post("/trainer/setMyTests",myTestsArr);
    }

    static getMyAthletes() {
        return http.get("/trainer/getMyAthletes");
    }

    static findAthletesEmail(email) {
        return http.post("/trainer/findAthletesEmail",{"email":email});
    }

    static postMyAthlete(data) {
        return http.post("/trainer/setMyAthletes",data);
    }

    static postTestResults(data) {
        return http.post("/trainer/postTestResults",data);
    }

    static readHistory(){
        return http.get("/trainer/getHistory");
    }

    static getAllTrainers() {
        return http.get("/trainer/getTrainers");
    }

    static makeCoach(data) {
        return http.post("/trainer/makeTrainer",data);
    }

    static deleteTest(data) {
        return http.post("/trainer/deleteTest",data);
    }
}