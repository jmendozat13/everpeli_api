import MovieRental from '../models/MovieRental'

export async function createMovieRental(req, res) {
    const { conditions,
        userid,
        returndate,
        daterental } = req.body
    try {
        let newmovierental = await MovieRental.create({
            conditions,
            userid,
            returndate,
            daterental
        }, {
                fields: ['conditions', 'userid', 'returndate', 'daterental']
            })
        if (newmovierental) {
            res.json(newmovierental)
        }
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

export async function getMovieRental(req, res) {
    try {
        const movierentals = await MovieRental.findAll()
        res.json(movierentals)
    } catch (err) {
        res.status(500).json({ message: err })
    }
}