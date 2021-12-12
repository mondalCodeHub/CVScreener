console.log("CV Screener Project || Date : 10th August 2021");
// In this case(*project) i've used this as example you can fetch api request from randomuser.api servers //

const data = [

    {
        name: "Alina Taylor",
        age: 25,
        city: "Mexico",
        motherTounge: "English",
        language: "JavaScript",
        framework: "React",
        gender: "female",
        image: "https://randomuser.me/api/portraits/women/70.jpg"

    },

    {
        name: "Allen Sims",
        age: 27,
        city: "Saddle Dr",
        motherTounge: "English",
        language: "Java",
        framework: "Spring",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/70.jpg"

    },

    {
        name: "Lester Lynch",
        age: 24,
        city: "London",
        motherTounge: "English",
        language: "Python",
        framework: "Django",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/56.jpg"

    },

    {
        name: "Annette Murray",
        age: 29,
        city: "Moscow",
        motherTounge: "English",
        language: "Java",
        framework: "Blade",
        gender: "female",
        image: "https://randomuser.me/api/portraits/women/40.jpg"

    },

    {
        name: "Jordan Rivera",
        age: 27,
        city: "Gotham city",
        motherTounge: "English",
        language: "JavaScript",
        framework: "Angular",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/58.jpg"

    },

]

// ############################################## //
// ############################################## //
// ############################################## //

// CV Iterators ();
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    }
}

// ############################################## //
const candidates = cvIterator(data);



const next = document.getElementById('next');
next.addEventListener('click', nextCv);
nextCv();

function nextCv() {
    const currentCandidate = candidates.next().value; //grabData 
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    if (currentCandidate != undefined) {


        image.innerHTML = ` <img src="${currentCandidate.image}" > `;

        profile.innerHTML = ` <ul class="list-group ">
  
    <li class="list-group-item blackclass"> Name :  <strong class="spanclass">${currentCandidate.name}  </strong> </li>
    <li class="list-group-item blackclass">Age : <strong class="spanclass">${currentCandidate.age}</strong> </li>
    <li class="list-group-item blackclass">Gender : <strong class="spanclass">${currentCandidate.gender} </strong></li>
    <li class="list-group-item blackclass">City : <strong class="spanclass">${currentCandidate.city}</strong> </li>
    <li class="list-group-item blackclass">Mother languaeg : <strong class="spanclass">${currentCandidate.motherTounge}</strong> </li>
    <li class="list-group-item blackclass">Programming Language : <strong class="spanclass">${currentCandidate.language} </strong></li>
    <li class="list-group-item blackclass">FrameWork : <strong class="spanclass">${currentCandidate.framework}</strong> </li>

  </ul>  `;
    }
    else{
        alert("End of application. Go abck");
        window.location.reload();
    }


}
// #################If you modify any code please mention below############################# //
/*
 write your changes (change.log)
*/
// #################Created by : Arup Mondal( GitHUb : mondalCodeHub############################# //
// ########################Date : 10th AUgust || Last modifie : 10th August###################### //