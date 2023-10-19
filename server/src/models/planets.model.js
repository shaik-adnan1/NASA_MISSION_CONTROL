const { parse } = require("csv-parse");
const fs = require("fs");

const habitablePlanets = [];

function isHabitable(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

// creating a read stream, that can read csv files

fs.createReadStream("kepler_data.csv")
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
  })
  .on("end", () => {
    habitablePlanets.map((curPlanetData, i) => {
      console.log(`${i + 1}: Planet Name: ${curPlanetData.kepler_name}`);
    });
    console.log("Done");
  });
// parse();

module.exports = habitablePlanets