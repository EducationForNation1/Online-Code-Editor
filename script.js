function runCode() {
    let htmlCode = document.getElementById("htmlCode").value;
    let cssCode = "<style>" + document.getElementById("cssCode").value + "</style>";
    let jsCode = "<script>" + document.getElementById("jsCode").value + "<\/script>";
    let output = document.getElementById("output").contentWindow.document;

    output.open();
    output.write(htmlCode + cssCode + jsCode);
    output.close();
}
