// p.199
const loop = () => {
  setTimeout(() => {
    console.log('hello')
    loop()
  }, 1000)
}
loop()