function solve(json) {
    let objects = JSON.parse(json);

    let firstName = replaceSymbols(objects[0].name);
    let firstScore = objects[0]['score'];

    let secondName = replaceSymbols(objects[1].name);
    let secondScore = objects[1]['score'];

    console.log(`<table>
  <tr><th>name</th><th>score</th></tr>
   <tr><td>${firstName}</td><td>${firstScore}</td></tr>
  <tr><td>${secondName}</td><td>${secondScore}</td></tr>
</table>
`);

    function replaceSymbols(name) {
        return name
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
}

solve('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]'
);