const response = (statusCode, data, message, res) => {
    res.status(statusCode).json({
        status_code: statusCode,
        data: data,
        message: message
    })
}

module.exports = response