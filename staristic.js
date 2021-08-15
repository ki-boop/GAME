let writeName = document.getElementById('name')
let name = localStorage.getItem('firstPageName')
writeName.innerHTML = ' ' + name;
let die = localStorage.getItem ('die')
let lastDie=die-1;
let sec = localStorage.getItem('sec');
    let min = localStorage.getItem('min')
    let score = localStorage.getItem('score')
    let time  = min + " : " + sec;
       
     
  

    
        
        let tbody = document.getElementById('statTable').getElementsByTagName("TBODY")[0];
        let row = document.createElement("TR")
        let td1 = document.createElement("TD")
        td1.appendChild(document.createTextNode(die))
        let td2 = document.createElement("TD")
        td2.appendChild (document.createTextNode(time))
        let td3 = document.createElement("TD")
        td3.appendChild (document.createTextNode(score))
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        tbody.appendChild(row);

  







 
  
 