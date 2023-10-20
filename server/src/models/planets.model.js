const fs = require("fs");
const path = require("path");

// const { rejects } = require("assert");
const { parse } = require("csv-parse");

const habitablePlanets = [];

function isHabitable(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

/*

const promise = new Promise((resolve, reject) => {
  resolve(42);
});
promise.then((result) => {

})

console.log(result)
*/

// creating a read stream, that can read csv files

function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv')) // node doesn't wait till stream loads to export modules.
      .pipe(
        parse({
          // after reading the csv files <->
          comment: "#",
          columns: true,
        })
      )
      .on("data", data => {
        if (isHabitable(data)) {
          habitablePlanets.push(data);
        }
      })
      .on("error", err => {
        console.log(err);
        reject(err);
      })
      .on("end", () => {
       
        resolve();
      });
  });
}
// parse();

module.exports = {
  loadPlanetsData,
  planets: habitablePlanets,
};
