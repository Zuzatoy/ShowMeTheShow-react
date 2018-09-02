exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(() => knex('users').insert([
      {id: 99901, name: 'Cheeky Cthulu', email: 'cthulu@hotmail.com', password: 'brains', age: '478', bio: 'warble garble', photo: 'https://vignette.wikia.nocookie.net/villains/images/7/72/Lovecraft-cthulhu.jpg/revision/latest?cb=20151128095138'},
      {id: 99902, name: 'Daisy', email: 'daisy@woof.com', password: 'dogfood', age: '12', bio: 'I like to shake things up.', photo: 'https://enspiral-dev-academy.slack.com/files/U03H7HGV0/FCJTB1E93/20180819_172512.jpg'}
    ])
    )
}
