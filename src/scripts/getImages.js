var names = ['src/assets/uno.jpeg', 'src/assets/dos.png', 'src/assets/tres.jpg', 'src/assets/cuatro.jpg', 'src/assets/cinco.png', 'src/assets/siete.jpg'] // used to generate posts for this tutorial
const getPosts = (number) => {
  // generate a number of posts
  // in a real setting, this would be a database call or algorithm
  let ret = []
  for (var i = 0; i < number; i++) {
    ret.push({
      title: 'Title',
      urlImage: names[i % names.length],
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing ...',
    })
  }
  return ret
}
export default getPosts