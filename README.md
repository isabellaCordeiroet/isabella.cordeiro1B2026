<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Aventura no Fundo do Mar</title>

<style>
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family:Arial, sans-serif;
}

body{
    min-height:100vh;
    background:linear-gradient(#27c7ff,#0066cc);
    overflow-x:hidden;
    color:white;
}

/* bolhas */
.bolha{
    position:fixed;
    bottom:-100px;
    width:40px;
    height:40px;
    background:rgba(255,255,255,.3);
    border-radius:50%;
    animation:subir 8s infinite;
}

@keyframes subir{
    from{
        transform:translateY(0);
    }
    to{
        transform:translateY(-110vh);
    }
}

header{
    text-align:center;
    padding:40px;
    background:#ffd83d;
    color:#333;
}

header h1{
    font-size:45px;
}

main{
    width:90%;
    max-width:900px;
    margin:30px auto;
    background:rgba(255,255,255,.15);
    backdrop-filter:blur(10px);
    padding:30px;
    border-radius:25px;
}

.personagem{
    width:200px;
    height:200px;
    margin:auto;
    background:#ffe85c;
    border-radius:45%;
    border:8px solid #e8b800;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:90px;
}

h2{
    margin:25px 0 10px;
    color:#fff700;
}

p,li{
    font-size:18px;
    line-height:1.6;
}

button{
    margin-top:25px;
    padding:15px 30px;
    border:none;
    border-radius:20px;
    background:#ffdb00;
    font-size:18px;
    cursor:pointer;
}

button:hover{
    transform:scale(1.1);
}

footer{
    text-align:center;
    padding:20px;
    background:#004c99;
}
</style>

</head>

<body>

<div class="bolha" style="left:10%;animation-delay:1s"></div>
<div class="bolha" style="left:40%;animation-delay:3s"></div>
<div class="bolha" style="left:70%;animation-delay:5s"></div>

<header>
<h1>🌊 Aventuras no Fundo do Mar</h1>
<p>Conheça o mundo de Lilo, a esponjinha aventureira!</p>
</header>

<main>

<div class="personagem">
🧽
</div>

<h2>Quem é Lilo?</h2>

<p>
Lilo é uma pequena esponjinha marinha cheia de energia.
Ela vive em uma cidade submarina e passa seus dias explorando
o oceano e fazendo novos amigos.
</p>

<h2>Amigos do oceano</h2>

<ul>
<li>⭐ Estrelinho - seu melhor amigo divertido</li>
<li>🐚 Coralina - uma criatura inteligente do mar</li>
<li>🐠 Peixinho Azul - sempre acompanha as aventuras</li>
</ul>

<button onclick="alert('🌊 Uma nova aventura começou!')">
Explorar o oceano
</button>

</main>

<footer>
© 2026 - Aventuras no Fundo do Mar
</footer>

</body>
</html><!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Aventura no Fundo do Mar</title>

<style>
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family:Arial, sans-serif;
}

body{
    min-height:100vh;
    background:linear-gradient(#27c7ff,#0066cc);
    overflow-x:hidden;
    color:white;
}

/* bolhas */
.bolha{
    position:fixed;
    bottom:-100px;
    width:40px;
    height:40px;
    background:rgba(255,255,255,.3);
    border-radius:50%;
    animation:subir 8s infinite;
}

@keyframes subir{
    from{
        transform:translateY(0);
    }
    to{
        transform:translateY(-110vh);
    }
}

header{
    text-align:center;
    padding:40px;
    background:#ffd83d;
    color:#333;
}

header h1{
    font-size:45px;
}

main{
    width:90%;
    max-width:900px;
    margin:30px auto;
    background:rgba(255,255,255,.15);
    backdrop-filter:blur(10px);
    padding:30px;
    border-radius:25px;
}

.personagem{
    width:200px;
    height:200px;
    margin:auto;
    background:#ffe85c;
    border-radius:45%;
    border:8px solid #e8b800;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:90px;
}

h2{
    margin:25px 0 10px;
    color:#fff700;
}

p,li{
    font-size:18px;
    line-height:1.6;
}

button{
    margin-top:25px;
    padding:15px 30px;
    border:none;
    border-radius:20px;
    background:#ffdb00;
    font-size:18px;
    cursor:pointer;
}

button:hover{
    transform:scale(1.1);
}

footer{
    text-align:center;
    padding:20px;
    background:#004c99;
}
</style>

</head>

<body>

<div class="bolha" style="left:10%;animation-delay:1s"></div>
<div class="bolha" style="left:40%;animation-delay:3s"></div>
<div class="bolha" style="left:70%;animation-delay:5s"></div>

<header>
<h1>🌊 Aventuras no Fundo do Mar</h1>
<p>Conheça o mundo de Lilo, a esponjinha aventureira!</p>
</header>

<main>

<div class="personagem">
🧽
</div>

<h2>Quem é Lilo?</h2>

<p>
Lilo é uma pequena esponjinha marinha cheia de energia.
Ela vive em uma cidade submarina e passa seus dias explorando
o oceano e fazendo novos amigos.
</p>

<h2>Amigos do oceano</h2>

<ul>
<li>⭐ Estrelinho - seu melhor amigo divertido</li>
<li>🐚 Coralina - uma criatura inteligente do mar</li>
<li>🐠 Peixinho Azul - sempre acompanha as aventuras</li>
</ul>

<button onclick="alert('🌊 Uma nova aventura começou!')">
Explorar o oceano
</button>

</main>

<footer>
© 2026 - Aventuras no Fundo do Mar
</footer>

</body>
</html>
