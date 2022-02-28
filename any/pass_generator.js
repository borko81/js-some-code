const keys = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
  }

  const getKey = [
      function upper() {
          return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)]
      },
      function lowerCase() {
        return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)]
      },
      function digit() {
          return keys.number[Math.floor(Math.random() * keys.number.length)]
      },
      function sy() {
        return keys.symbol[Math.floor(Math.random() * keys.symbol.length)]
      }
  ]

console.log(getKey[0](), getKey[1](), getKey[2](), getKey[3]());