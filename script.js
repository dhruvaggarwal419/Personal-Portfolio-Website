let listTabs = document.getElementsByClassName('listTabs');
let listContents = document.getElementsByClassName("listContents");

function openTab(tabname) {
    let findId = document.getElementById(tabname);
    console.log(findId);
    for (listTab of listTabs) {
        listTab.classList.remove("activeTabs");
    }
    for (listContent of listContents) {
        listContent.classList.remove("activeContents");
    }
    event.currentTarget.classList.add("activeTabs");
    findId.classList.add("activeContents");
}

function SendMail() {
    var params = {
        from_name : document.getElementById('fullName').value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_f1nonvj", "template_h0jahmn", params).then(function (res) {
        
    });
    emailjs.send("service_f1nonvj", "template_qhk9b84", params).then(function (res) {
        
    });
}