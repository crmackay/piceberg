function plot(csvData, location){
    var firstrows = csvData.split("\r\n")
    var lastHours = firstrows.slice(firstrows.length - 5000,firstrows.length)
    var condensed = []
    var lastTempIndex = 0
    for (var i = 0; i< lastHours.length; i++) {

        var currTemp = lastHours[i].split(",")[1]
        if (i === 0 || i === lastHours.length-1) {
            condensed.push(lastHours[i])
        } else {
            var lastTemp = lastHours[i-1].split(",")[1]
            var nextTemp = lastHours[i+1].split(",")[1]
            if (currTemp !== lastTemp || currTemp !== nextTemp) {
                condensed.push(lastHours[i])
            }
        }
        if (currTemp !== undefined) {
            lastTempIndex = i
        }
    }
    var date = new Date(parseInt(lastHours[lastTempIndex].split(",")[0])*1000);
    var currTime = date.toLocaleString()
    var currTemp = lastHours[lastTempIndex].split(",")[1]
    // insert current temp
    document.getElementById("freezer1-current-temp").innerHTML = currTemp + "&deg; C <br/> Recorded at: &nbsp; &nbsp; &nbsp;" + currTime

    secondrows = [["time", "temp"]]
    for(var i = 0; i< condensed.length; i++){
        var next = condensed[i].split(",")

        secondrows.push([parseInt(next[0]), parseFloat(next[1])])
    }

    var chart = c3.generate({
        bindto: "#freezer1-chart",
        data: {
            x: 'time',
            rows: secondrows
        }
    })
}
