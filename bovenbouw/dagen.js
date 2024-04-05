const dagen_van_week = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];
for (let x = 0; x < dagen_van_week.length; x++) {
  console.log(dagen_van_week[x]);
}
console.log('\n');
for (let x = 0; x < dagen_van_week.length - 2; x++) {
  console.log(dagen_van_week[x]);
}
console.log('\n');
for (let x = 5; x < dagen_van_week.length; x++) {
  console.log(dagen_van_week[x]);
}
console.log('\n');
for (let x = dagen_van_week.length - 1; x >= 0; x--) {
  console.log(dagen_van_week[x]);
}
console.log('\n');
for (let x = dagen_van_week.length - 3; x >= 0; x--) {
  console.log(dagen_van_week[x]);
}
console.log('\n');
for (let x = dagen_van_week.length - 8; x >= -3; x--) {
  console.log(dagen_van_week[x]);
}
document.getElementById('namen').innerText = dagen_van_week