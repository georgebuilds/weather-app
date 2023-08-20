const checkZipInput = function () {
  const inputValue = document.getElementById("zip-input").value;
  console.log(inputValue.length);
  if (inputValue.length === 5) {
    window.location.href = "/" + inputValue;
  }
};

export default function ZipInputField() {
  return (
    <input
      id="zip-input"
      maxLength={5}
      autofocus
      inputMode="numeric"
      pattern="[0-9]{5}"
      placeholder={"Enter your zip"}
      onKeyUp={checkZipInput}
      style={{
        fontSize: "3rem",
        borderRadius: "1rem",
        textAlign: "center",
        padding: "1rem",
      }}
    />
  );
}
