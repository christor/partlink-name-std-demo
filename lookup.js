var xmlHttp = null;
function getStandardizedName() {
    var compName = document.getElementById("cn").value;
    var url = "http://api.xsb.com/company-name-standardizer/api/name/" + encodeURIComponent(compName);
    xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = createCallback(xmlHttp, compName);
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}

function createCallback(xhr, compName) {
    return function ProcessRequest() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                $('#resultList')
                        .prepend('<div class="bg-info" style="display:none">' + compName + " &rarr; " + xhr.responseText + ' <i>(<a href="' + xhr.responseURL + '">' + xhr.responseURL + '</a>)</i></div>');
                $('#resultList > div').show(250);
            } else {
                $('#resultList').prepend('<div class="bg-danger"> Error: Request status - ' + xhr.status + ' <i>(<a href="' + xhr.responseURL + '">' + xhr.responseURL + '</a>)</i></div>');
            }
        }
    };
}