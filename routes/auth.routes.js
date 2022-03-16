const { Router } = require('express')
const router = Router()


// api/auth/register
router.post('/register', async(req, res) => {
    try {
        console.log(req.body)
    } catch (e) {
        res.json({
            message: e.message
        })
    }
})



module.exports = router