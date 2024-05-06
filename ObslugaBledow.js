const invalidJson = '{name:"Mango", age:3, isHappy:true}';

try {
  // Próba parsowania nieprawidłowego ciągu JSON
  const obj = JSON.parse(invalidJson);
  console.log(obj);
} catch (error) {
  // Obsługa ewentualnego błędu
  console.error("Wystąpił błąd:", error.name, "-", error.message);
}