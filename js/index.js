(function(){
    let workDetails = [{
        name: "Arun Sankar Thirunavukkarasu",
        item: "Design for simple app & Table Component CSS revamping in BEM Methodology."
    },{
        name: "Balaji",
        item: "Writing Test Cases to cover all plugins."
    },{
        name: "Bharathi",
        item: "Assigning ARIA Roles to UI controls present inside Table.ie) Pagination, Filter"
    },{
        name: "Ganapathi",
        item: "Analyzing DataTables Library."
    },{
        name: "Haressh",
        item: "Preparing content for the simple demo App."
    },{
        name: "Ranjitha",
        item: "Ember mickey component issue fixing & Analyzing Lyte framework's plugins."
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