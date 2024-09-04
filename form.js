document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("btn").onclick = function() {
        let input_name = document.getElementById("n").value;
        console.log(input_name);
        let b = document.getElementById("c").value;
        console.log(b);
        let d = document.getElementById("r").value;
        console.log(d);
        let e = document.getElementById("cn").value;
        console.log(e);
        let f = document.getElementById("browser").value;
        console.log(f);
    };
});
