let listaProdutos = [];

document.querySelector(".enviar").addEventListener("click", () => {
    const input = document.getElementById("input1");
    if (localStorage.getItem("listaProdutos")) {
        listaProdutos = JSON.parse(localStorage.getItem("listaProdutos"))
    }
    if (input.value) {
        listaProdutos.push(document.getElementById("input1").value);
        document.getElementById("input1").value = "";
        localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
    }
})

document.querySelector(".visualizar").addEventListener("click", () => {
    const list = document.querySelector(".lista");
    list.innerHTML = JSON.parse(localStorage.getItem("listaProdutos"));
    if (list.style.display === "none") {
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }
})

document.querySelector(".limpar").addEventListener("click", () => {
    listaProdutos = [];
    localStorage.removeItem("listaProdutos");
    document.querySelector(".lista").style.display = "none";
})

//------------------------------------------------
let novo_aluno = new Object();
let notas = new Array();
let alunos = new Array();

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const aluno = document.getElementById("aluno").value;
    const nota = document.getElementById("nota").value;
    notas = [];

    if (localStorage.getItem("turma")) {
        alunos = JSON.parse(localStorage.getItem("turma"))
        let pos = "";
        for (i = 0; i < alunos.length; i++) {
            if (alunos[i].aluno === aluno) {
                pos = i;
            }
        }
        if (pos !== "") {
            notas = alunos[pos].notas;
            notas.push(nota);
            alunos[pos].notas = notas;
            localStorage.setItem("turma", JSON.stringify(alunos));
        } else {
            notas.push(nota);
            novo_aluno = { aluno, notas }
            alunos.push(novo_aluno);
            localStorage.setItem("turma", JSON.stringify(alunos));
        }
    } else {
        notas.push(nota);
        novo_aluno = { aluno, notas }
        alunos.push(novo_aluno);
        localStorage.setItem("turma", JSON.stringify(alunos));
    }
});

document.getElementById("form2").addEventListener("submit", (e) => {
    e.preventDefault();
    alunos = {};
    const aluno = document.getElementById("show-aluno").value;
    const showAluno = document.getElementById("showAluno");

    if (localStorage.getItem("turma")) {
        alunos = JSON.parse(localStorage.getItem("turma"))
        let pos = "";
        for (i = 0; i < alunos.length; i++) {
            if (alunos[i].aluno === aluno) {
                pos = i;
            }
        }
        if (pos !== "") {
            showAluno.innerHTML = "Aluno: " + aluno + "<br>" + "Notas: " + alunos[pos].notas;
        } else {
            showAluno.innerHTML = "Não existe aluno com esse nome"
        }
    } else {
        showAluno.innerHTML = "Não existem alunos salvos"
    }
});

document.getElementById("form3").addEventListener("submit", (e) => {
    e.preventDefault();
    alunos = {};
    const aluno = document.getElementById("delete-aluno").value;
    const deleteAluno = document.getElementById("deleteAluno");

    if (localStorage.getItem("turma")) {
        alunos = JSON.parse(localStorage.getItem("turma"))
        let pos = "";
        for (i = 0; i < alunos.length; i++) {
            if (alunos[i].aluno === aluno) {
                pos = i;
            }
        }
        if (pos !== "") {
            delete alunos[pos];
            alunos = alunos.filter((e) => {
                return e !== null;
            })
            localStorage.setItem("turma", JSON.stringify(alunos));
            deleteAluno.innerHTML = "Aluno(a): " + aluno + " foi excluído!"
        } else {
            deleteAluno.innerHTML = "Não existe aluno com esse nome"
        }
    } else {
        deleteAluno.innerHTML = "Não existem alunos salvos"
    }
});

document.getElementById("showNotasButton").addEventListener("click", () => {
    alunos = {};
    const lista = document.getElementById("lista");
    lista.innerHTML = ""
    lista.style.display = "block"

    if (localStorage.getItem("turma")) {
        alunos = JSON.parse(localStorage.getItem("turma"))
        for (i = 0; i < alunos.length; i++) {
            lista.insertAdjacentHTML('beforeend', `Aluno: ${alunos[i].aluno}<br>Notas: ${alunos[i].notas}<br><hr>`)
        }
    } else {
        lista.innerHTML = "Não existem alunos salvos"
    }
});