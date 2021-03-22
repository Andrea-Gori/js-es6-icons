const bikes = [];

bikes.push({
  nome: 'bmx',
  peso: 3,                                        
})
bikes.push({
  nome: 'graziella',
  peso: 5,                                        
})
bikes.push({
  nome: 'mountainbike',
  peso: 2,                                        
})
bikes.push({
  nome: 'boh',
  peso: 4,                                        
})

let min = bikes[0].peso;

bikes.forEach(element => {
  
  if (element.peso < min) {
    min = element.peso;
  }

});

let littleBike = bikes.filter((element) => element.peso == min )

console.log('la bici che pesa di meno è ', `${littleBike[0].nome}`, 'ed il suo peso è ', `${min}`);
