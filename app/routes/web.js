const web = (app, passport) => {
    app.get('/', (req, res) => {
        res.render('index.ejs', { version: '0.1' })
    })
}
export default web