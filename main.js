let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과 백두산이 마르고 닳도록
`

console.log(str.match(/h..p/g)) //http
console.log(str.match(/fox|dog/g)) //fox, dog
console.log(str.match(/https?/g)) //https, http

console.log(str.match(/d{2}/g)) //dd
console.log(str.match(/d{2,}/g)) //dddd
//\w 숫자,알파벳
//\b\w{}\b 숫자,문자가 아닌 특수문자의 경계
console.log(str.match(/\b\w{2,3}\b/g))

console.log(str.match(/.{1,}(?=@)/g)) //thesceon
console.log(str.match(/(?<=@).{1,}/g)) //gmail.com