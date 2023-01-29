function sqrt(x) {
  if (x < 0) {
    console.log("Tidak bisa input bilangan negatif");
  } else if (x % 2 !== 0) {
    console.log("Tidak bisa input bilangan ganjil");
  } else {
    console.log(Math.sqrt(x));
  }
}

sqrt(-1); // Output: Tidak bisa input bilangan negatif
sqrt(3); // Output: Tidak bisa input bilangan ganjil
sqrt(4); // Output: 2
