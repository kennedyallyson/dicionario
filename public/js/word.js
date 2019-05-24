function findWord() {
    let word = document.getElementById("word").value;
    const url = `http://dicionario-aberto.net/search-json/${word}`;

    if(word.trim().length === 0) {
        let info = "Insira uma palavra!";
        document.getElementById("result").innerHTML = info;
        
        let style = document.getElementById("result").style;
        style.setProperty("color", "#e6000d");
        style.setProperty("visibility", "visible");
        
    } else {
        const xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange =  function () {
            if (this.readyState == 4 && this.status == 200) {
                let infos = JSON.parse(this.responseText);
                let info = "";

                if (infos["superEntry"]) {
                    info = infos["superEntry"][0]["entry"]["sense"][0]["def"];
                    
                    let style = document.getElementById("result").style;
                    style.setProperty("color", "#000");
                }

                if (infos["entry"]) {
                    info = infos["entry"]["sense"][0]["def"];
                    
                    let style = document.getElementById("result").style;
                    style.setProperty("color", "#000");
                }

                document.getElementById("result").innerHTML = info;
            }
            
            if (this.readyState == 4 && this.status == 0) {
                info = "A palavra não foi encontrada!";
                document.getElementById("result").innerHTML = info;
                
                let style = document.getElementById("result").style;
                style.setProperty("color", "#e6000d");
            }

            let style = document.getElementById("result").style;
            style.setProperty("visibility", "visible");
        };

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }
}

document.getElementById("btn").onclick = function(e) {
    findWord();
    e.preventDefault();
}
