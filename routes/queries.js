exports.logIn =(async (req, res) => {
    
    try {
        res.status(200).json({name: "trevor"});
    } catch(error) {
        res.status(400).json({error: "server failed"})
    }
})