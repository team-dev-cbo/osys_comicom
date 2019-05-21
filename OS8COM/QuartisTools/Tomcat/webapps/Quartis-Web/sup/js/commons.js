function closeAll() {
    if(document.getElementById('mapping-list') != null) {
        closeMappingList();
    }
    if(document.getElementById('preference') != null) {
        closePreference();
    }
    if(document.getElementById('component-def') != null) {
        clearComponent();
    }
}
