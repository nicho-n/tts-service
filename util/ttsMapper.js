const parseTTSData = (rows) => {
    return rows.map(el => {return parseInt(el.ttsdata)})
              .filter(item => !isNaN(item) && item >= 0 && item <= 5);
}

module.exports = {parseTTSData}