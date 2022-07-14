const root = document.getElementById("root") ; 
const but = document.getElementById("but") ; 
const apikey = '3a5ec8fb-c0c6-426d-bada-b333bd6c71ee' ; 
const url =  'https://api.cricapi.com/v1/currentMatches?apikey=3a5ec8fb-c0c6-426d-bada-b333bd6c71ee&offset=0';

let cnt =0 ; 
//console.log(but) ; 

but.addEventListener("click" , () => {
    console.log("1") ; 
    //root.innerHTML = '<div class="spinner-border text-light align-self-center" role="status"><span class="visually-hidden">Loading...</span></div> ';
    root.innerHTML = '<div style= "display : block"></div>'
    fetch(url).then((res) => res.json()).then((data)=>{
        const matches = data.data ;
        console.log("2") ;  
        for(let i=0 ; i<4 ; i++){
            cnt++ ; 
            const match = matches[i] ; 
            console.log("3") ; 
            root.innerHTML += `<div class="card my-2 border-0 overflow-auto " > 
                <span class="small w-100 text-center mb-1 py-2 bg-warning text-black">${match.name}</span>
                <div  class="teams d-flex justify-content-between px-3 py-2">
                    <div class="team">
                        <img style="height:200px" src="${match.teamInfo[0].img}" alt="${match.teamInfo[0].shortname}" class="team-logo">
                        <br>
                        <span class="small">${match.teamInfo[0].shortname}</span>
                    </div>
                    <div class="team text-end">
                        <img style="height:200px" src="${match.teamInfo[1].img}" alt="${match.teamInfo[1].shortname}" class="team-logo">
                        <br>
                        <span class="small">${match.teamInfo[1].shortname}</span>
                        </div>
                </div>
                <div class="score card-body w-100 bg-warning text-black px-5">
                    <div class="team-inning">
                    <p class="innings">${
                        typeof match.score[0] === "undefined"
                          ? ""
                          : match.score[0].inning
                      }</p>
                      <p class="score">${
                        typeof match.score[0] === "undefined"
                          ? ""
                          : match.score[0].r +
                            "/" +
                            match.score[0].w +
                            " (" +
                            match.score[0].o +
                            ")"
                      }</p>
                    </div>
                    <div class="team-inning">
                        <p class="innings">${
                          typeof match.score[1] === "undefined"
                            ? ""
                            : match.score[1].inning
                        }</p>
                        <p class="score">${
                          typeof match.score[1] === "undefined"
                            ? ""
                            : match.score[1].r +
                              "/" +
                              match.score[1].w +
                              " (" +
                              match.score[1].o +
                              ")"
                        }</p>
                    </div>
                </div>
            </div>`;
        }
    });
});