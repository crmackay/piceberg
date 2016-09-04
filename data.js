
function insertData(data, divID){

    document.getElementById(divID).innerHTML = data.replace(/\n/g, "<br />")
}

function getPutData(fileid, location) {
    var uri_prefix = "https://crossorigin.me/http://drive.google.com/uc?id="
    var uri_suffix = "&export=download"
    uri = uri_prefix+fileid+uri_suffix
    request = new XMLHttpRequest
    request.open("GET", uri, true)
    request.send()
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            plot(request.response, location);
        }
    }
    return request.response
};

var fileID = "0B9ffTjUEqeFEY0RHRWtMSGJGNUU"

getPutData(fileID,'freezer1');

function csvTOdata(csvData){
    return dataArray
}

function mostRecent(dataArray){

}

function unixTimeToLocal(unixTime){
    var d = new Date(unixTime * 1000);	// Convert the passed timestamp to milliseconds

	return(d.toLocaleString());
}
