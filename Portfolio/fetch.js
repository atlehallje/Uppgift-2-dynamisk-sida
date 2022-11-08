const myFunction = async () => {

  const request = new Request('./data.json');
  const response = await fetch(request);
  const myCv = await response.json();

  return myCv;
}

const getCv = (myCv) => {

  let workText = ``;

  myCv.work.forEach(element => {

      const myList = `
      <li>
          <h4>${element.workplace}</h4>
          <p>
              <span class="job-title">${element.title}</span><br>
              ${element.description}
          </p>
      </li>`;

      workText += myList;

  });

  document.getElementById('myWork').innerHTML = workText;

  let educationText = ``;

  myCv.education.forEach(element => {

    const myList = `
    <li>
        <h4>${element.workplace}</h4>
        <p>
            <span class="job-title">${element.title}</span><br>
            ${element.description}
        </p>
    </li>`;

    educationText += myList;
    
    /*const mylist = `<li>${element}</li>`;
      educationText += mylist;*/
  });

  document.getElementById('myEducation').innerHTML = educationText;
}
const myCv = await myFunction();
getCv(myCv)
