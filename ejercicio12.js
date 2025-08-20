// Ejercicio 12
// Busca si existe algún mutante con un poder específico y retorna un mensaje indicando si fue encontrado o no.

const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telekinesis" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
];

function findMutantByPower(mutants, power) {
  const foundMutants = mutants.filter((mutant) => mutant.power === power);
  if (foundMutants.length > 0) {
    return `Mutantes con poder '${power}' encontrados: ${foundMutants
      .map((m) => m.name)
      .join(", ")}`;
  } else {
    return `No se encontró mutante con poder '${power}'.`;
  }
}
console.log(findMutantByPower(mutants, "telepathy"));
console.log(findMutantByPower(mutants, "flight"));
