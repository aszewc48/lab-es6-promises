// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync

  
  
  

  

 



// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          getInstruction("mashedPotatoes", 5, (step6) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`
          }, (error) => console.log(error))
        }, (error) => console.log(error));
      }, (error) => console.log(error));      
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

// Iteration 2 - using promises
obtainInstruction('steak',0)
.then( (step0) => {
  document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
  return obtainInstruction('steak', 1);
})
.then( (step1) => {
  document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
  return obtainInstruction('steak', 2)
})
.then( (step2) => {
  document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
  return obtainInstruction('steak', 3)
})
.then ( (step3) => {
  document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
  return obtainInstruction('steak', 4)
})
.then ( (step4) => {
  document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
  return obtainInstruction('steak', 5)
})
.then ( (step5) => {
  document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
  return obtainInstruction('steak', 6)
})
.then ( (step6) => {
  document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
  return obtainInstruction('steak', 7)
})
.then ( (step7) => {
  document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
  document.querySelector("#steakImg").removeAttribute("hidden");
  return obtainInstruction('steak', 8)
})
.then ( (step8) => {
  document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`
})


// Iteration 3 using async/await
async function makeBroccoli() {
let stepCount = await obtainInstruction('broccoli', 0)
  document.querySelector("#broccoli").innerHTML += `<li>${stepCount}</li>`
let stepCount1 = await obtainInstruction('broccoli', 1)
  document.querySelector("#broccoli").innerHTML += `<li>${stepCount1}</li>`
  let stepCount2 = await obtainInstruction('broccoli', 2)
  document.querySelector("#broccoli").innerHTML += `<li>${stepCount2}</li>`
  let stepCount3 = await obtainInstruction('broccoli', 3)
  document.querySelector("#broccoli").innerHTML += `<li>${stepCount3}</li>`
  let stepCount4 = await obtainInstruction('broccoli', 4)
  document.querySelector("#broccoli").innerHTML += `<li>${stepCount4}</li>`
  let stepCount5 = await obtainInstruction('broccoli', 5)
  document.querySelector("#broccoli").innerHTML += `<li>${stepCount5}</li>`
  let stepCount6 = await obtainInstruction('broccoli', 6)
  document.querySelector("#broccoli").innerHTML += `<li>${stepCount6}</li>`
  document.querySelector("#broccoliImg").removeAttribute("hidden");
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`
}

makeBroccoli()

// Bonus 2 - Promise all
// ...