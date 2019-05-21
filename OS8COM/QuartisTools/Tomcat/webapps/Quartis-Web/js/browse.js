function closeBrowse() {
    parent.closeBrowse();
}

function valider() {
    var path = document.getElementById("input_path_folder").value;
    parent.fillBrowseField(path);
    closeBrowse();
}
