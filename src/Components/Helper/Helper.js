const Helper = url => {
  fetch(url)
    .then(data => data.json())
    .then(data => {
      console.log("homeworld dat", data.name);
      return data.name;
    })
    .catch(console.log("oops"));
};

export default Helper;
