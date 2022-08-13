const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})



// const me = new User({
//     name: '  Koketso       ',
//     email: '   KOKETSO@mead.io    ',
//     password: '         phonessword12         '
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

// const Task = mongoose.model('Task', {
//     descricption: {
//         type: String,
//         require: true,
//         trim: true
//     },
//     complete: {
//         type: Boolean,
//         default: false
//     }
// })

// const task = new Task({
//     descricption: '     Did you test work?',
//     complete: true
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })