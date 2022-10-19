(function(){
    let workDetails = [{
        name: "Arun Sankar Thirunavukkarasu",
        item: "Table Component CSS revamping in BEM Methodology."
    },{
        name: "Balaji",
        item: "Setting Up Automatic Test Suite."
    },{
        name: "Bharathi",
        item: "Learning ARIA Roles to use in Table component."
    },{
        name: "Ganapathi",
        item: "Table Component Row Virtualization Behavior Implementation."
    },{
        name: "Haressh",
        item: "Getting Started Page Creation."
    },{
        name: "Ranjitha",
        item: "Table Component Issue Fix & Column Virtualization Behavior Implementation."
    }];
    document.addEventListener("DOMContentLoaded", function(){
        let tbodyEle = document.getElementsByTagName("tbody"),
            rows = "", len = workDetails.length, work;
        for(let i = 0; i < len; i++){
            work = workDetails[i];
            rows += "<tr><td>"+work.name+"</td><td>"+work.item+"</td></tr>";
        }
        tbodyEle[0].innerHTML = rows;
    });
})();