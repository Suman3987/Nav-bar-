let movieData = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
    image: "images/image 1.jpeg",
  },
  "The Royal Tenenbaums": {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
    rating: 7.6,
    year: 2001,
    cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
    runtime: 170,
    image: "images/image 2.jpeg",
  },
  "Fantastic Mr. Fox": {
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: [
      "George Clooney",
      "Meryl Streep",
      "Bill Murray",
      "Jason Schwartzman",
    ],
    runtime: 147,
    rating: 7.9,
    image: "images/image 3.jpeg",
  },
  "The Grand Budapest Hotel": {
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    image: "images/image 4.jpeg",
  },
};

document.querySelector(".alphabet").addEventListener("click", function () {
  movieData = Object.keys(movieData)
    .sort()
    .reduce((accumulator, key) => {
      accumulator[key] = movieData[key];
      return accumulator;
    }, {});

  console.log(movieData);
  rendorMovie();
});

document.querySelector(".number").addEventListener("click", function () {
  movieData = Object.entries(movieData)
    .sort((a, b) => a[1].year - b[1].year)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
  console.log("year filter", movieData);
  rendorMovie();
});

function rendorMovie() {
  // Loop through each gallery and create a list item

  var list = document.querySelector("#movieList");
  list.innerHTML = "";
  Object.keys(movieData).forEach((key) => {
    let value = movieData[key];
    list.innerHTML +=
      '<div class="container-item"> <img src="' +
      value.image +
      ' " /><div id="explain"><h4>' +
      value.plot +
      "</h4><p>Year: " +
      value.year +
      "</p><p> Rating: " +
      value.rating +
      "</p><p> Runtime: " +
      value.runtime +
      "</p></div></div>";
  });
}

//////home btn for random///

const homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", randomiseDisplays);

function randomiseDisplays() {
  console.log("is working");
  location.reload();

  // movieData = Object.entries(movieData)
  //   .sort((a, b) => {
  //     let randomDecimal = Math.random();
  //     return a * randomDecimal - b * randomDecimal;
  //     // if (randomDecimal < 0.5) {
  //     //   return a[1].year - b[1].year;
  //     // } else {
  //     //   return b[1].year - a[1].year;
  //     // }
  //   })
  //   .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
  // console.log("year filter", movieData);
  // rendorMovie();
}
