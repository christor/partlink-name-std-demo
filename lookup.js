var xmlHttp = null;
function getStandardizedName() {
    var compName = document.getElementById("cn").value;
    var Url = "http://api.xsb.com/company-name-standardizer/api/name/" + compName;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = ProcessRequest;
    xmlHttp.open("GET", Url, true);
    xmlHttp.send(null);
}
function ProcessRequest() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        $('#resultList').append('<br/>' + xmlHttp.responseText + '<br/>');
    } else {
        if (xmlHttp.readyState == 4) {
            $('#resultList').append('<br/> Error: Request status - ' + xmlHttp.status + '<br/>');
        }
    }
}
