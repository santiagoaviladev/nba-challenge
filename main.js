const fetchData = async (num) => {
    let fetched = await fetch("https://mach-eight.uc.r.appspot.com");
    let data = await fetched.json();
    let sortedPlayers = data.values.sort(
      (a, b) => Number(a.h_in) > Number(b.h_in)
    );
    let matched = [];
    let actualIndex = 0;
    sortedPlayers.forEach((element) => {
      for (let i = actualIndex + 1; i < sortedPlayers.length; i++) {
        let sum = Number(element.h_in) + Number(sortedPlayers[i].h_in);
        if (sum === num) {
          matched.push(
            `${element.first_name} ${element.last_name}, ${sortedPlayers[i].first_name} ${sortedPlayers[i].last_name}`
          );
        } else if (sum > num) {
          return;
        } else {
          break;
        }
      }
  
      actualIndex++;
    });
    if (!matched.length) 
      console.log("No coincidentes encontrada");
    else console.log(matched);
  };
  let number = Number(prompt("Ingrese un numero"));
 while(isNaN(number))
 {
    number = prompt("Dato inválido, intente de nuevo");

 }
  fetchData(number);
  