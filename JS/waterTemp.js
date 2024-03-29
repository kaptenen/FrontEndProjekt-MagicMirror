const lat = 57.70887;
const lng = 11.97456;
const params = "waterTemperature";

Date.prototype.getUnixTime = function () {
    return (this.getTime() / 1000) | 0;
};
if (!Date.now)
    Date.now = function () {
        return new Date();
    };
Date.time = function () {
    return Date.now().getUnixTime();
};

let start = new Date();
let end = new Date();
start.setSeconds(00);
start.setMinutes(00);
start.setHours(01);

end.setSeconds(00);
end.setMinutes(00);
end.setHours(24);

let readingStart = start.getUnixTime();
let readingEnd = end.getUnixTime();

let dt = new Date();
let h = dt.getHours();
let APIArray = [];

fetch(
    //APIKEY here
    {
        headers: {
            Authorization: //AUTHKEY
        }
    }
)
    .then(response => response.json())
    .then(jsonData => {
        for (let i = 0; i < jsonData.hours.length; i++) {
            APIArray.push(jsonData.hours[i].waterTemperature[0].value);
        }

        document.getElementById("water").innerHTML = `${APIArray[h]} °C`;
    });