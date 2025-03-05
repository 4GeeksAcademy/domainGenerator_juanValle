
   
    import "bootstrap";
    import "./style.css";
     
    import "./assets/img/rigo-baby.jpg";
    import "./assets/img/4geeks.ico";
    
    //Bucles anidados usando for...of
    
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
    
    function generateDomain(pronoun, adj, noun) {
      let domains = [];
      
      for (let p of pronoun) {
        for (let a of adj) {
          for (let n of noun) {
            let domain = `${p}${a}${n}.eth`;
            domains.push(domain);
          }
        }
      }
      return domains;
    }
    
    window.onload = function() {
      let domainList = document.getElementById("domains");
      let domains = generateDomain(pronoun, adj, noun);
    
      domains.forEach(domain => {
        let li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = domain;
        domainList.appendChild(li);
      });
    };
    



















