const router = require ('express').Router()

router.get('/', (req, res)=> {
    console.log('controllers')
    //res.render('places/index')
let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/sandwich.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/cupOfCoffe.jpg'
  }]
  
    res.render('places/index', {places})
})

router.get('/new', (req, res) => {
  res.render('places/new')
})


module.exports = router
