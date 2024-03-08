enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

// Code commented to avoid errors
// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })