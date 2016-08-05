function plot(csvData, location){
    firstrows = csvData.split("\r\n")
    lastHours = firstrows.slice(firstrows.length - 5000,firstrows.length)
    secondrows = [["time", "temp"]]
    for(var i = 0; i< lastHours.length; i++){
        var next = lastHours[i].split(",")

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
