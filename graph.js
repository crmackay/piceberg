function plot(csvData, location){
    firstrows = csvData.split("\r\n")
    secondrows = [["time", "temp"]]
    for(var i = 0; i< firstrows.length; i++){
        var next = firstrows[i].split(",")

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
