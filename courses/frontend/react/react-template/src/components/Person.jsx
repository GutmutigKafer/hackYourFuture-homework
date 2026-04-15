const name = "Jorge";
const age = 20;
const isAdult = age >= 18;

export function Person() {
  return (
    <p>
      {name} {isAdult ? "is an adult" : "is a minor"}
    </p>
  );
}
