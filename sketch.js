var tela = 0;
var ponto = 0;
var resposta = 0;
var myPerson = 0;
var img = [];
var myFont = [];

function setup() {
  createCanvas(800, 500);
}

function preload() {
  img[0] = loadImage('fundo_menu_inicial1.jpg');
  img[1] = loadImage('Rayani.jpg');
  img[2] = loadImage('Abraão.jpeg');
  img[3] = loadImage('Galaxia.jpg');
  img[4] = loadImage('fundo.png');
  img[5] = loadImage('female_stand.png');
  img[6] = loadImage('player_stand.png');
  myFont[0] = loadFont('Avocado Creamy.otf');
  myFont[1] = loadFont('coolvetica rg.ttf');
  myFont[2] = loadFont('BubblegumInk-Regular.ttf');
  myFont[3] = loadFont('Sketch 3D.otf');
}

function draw() {
  background(250);
  //OPÇÕES DO MENU
  if (tela == 0) {
    menu();
  }
  if (tela == 1) {
    bom_jogo();
  }
  if (tela == 2) {
    informações();
  }
  if (tela == 3) {
    creditos();
  }
  //INICIO DAS FASES E RESPOSTAS
  if (tela == 4) {
    fase1();
  }
  if (tela == 5) {
    resposta1();
  }
  if (tela == 6) {
    fase2();
  }
  if (tela == 7) {
    resposta2();
  }
  if (tela == 8) {
    fase3();
  }
  if (tela == 9) {
    resposta3();
  }
  if (tela == 10) {
    fase4();
  }
  if (tela == 11) {
    resposta4();
  }
  if (tela == 12) {
    fase5();
  }
  if (tela == 13) {
    resposta5();
  }
  if (tela == 14) {
    fase6();
  }
  if (tela == 15) {
    resposta6();
  }
  if (tela == 16) {
    fase7();
  }
  if (tela == 17) {
    resposta7();
  }
  if (tela == 18) {
    fase8();
  }
  if (tela == 19) {
    resposta8();
  }
  if (tela == 20) {
    fase9();
  }
  if (tela == 21) {
    resposta9();
  }
  if (tela == 22) {
    fase10();
  }
  if (tela == 23) {
    resposta10();
  }
}

function menu() {
  image(img[0], 0, 0, width);
  textAlign(CENTER, CENTER);
  textSize(80);
  textFont(myFont[0]);
  fill(157, 2, 8);
  text("{ENTRE ESTAÇÕES}", 0, 100, width);

  //INFORMAÇÕES DO MOUSE PARA JOGAR
  if (mouseX > 296 && mouseX < 296 + 200 && mouseY > 199 && mouseY < 199 + 55) {
    fill(255, 230, 109);
    rect(296, 199, 200, 55, 15);
    if (mouseIsPressed) {
      tela = 1;
      ponto = 0;
    }
  }
  noStroke();
  textSize(55);
  fill(157, 2, 8);
  text("INICIAR", 0, 220, width);

  //INFORMAÇÕES DO MOUSE PARA AJUDA    
  if (mouseX > 296 && mouseX < 296 + 200 && mouseY > 299 && mouseY < 299 + 55) {
    fill(255, 230, 109);
    rect(255, 292, 280, 65, 15);
    if (mouseIsPressed) {
      tela = 2;
    }
  }
  noStroke();
  fill(157, 2, 8);
  text("INFORMAÇÕES", 0, 320, width);

  //INFORMAÇÕES DO MOUSE PARA CREDITOS
  if (mouseX > 296 && mouseX < 296 + 200 && mouseY > 397 && mouseY < 397 + 55) {
    fill(255, 230, 109);
    rect(296, 397, 200, 55, 15);
    if (mouseIsPressed) {
      tela = 3;
    }
  }
  noStroke();
  textSize(55);
  fill(157, 2, 8);
  text("CRÉDITOS", 0, 420, width);
}

function bom_jogo() {
  background(168, 218, 220);
  textAlign(CENTER);
  textSize(100);
  textFont(myFont[0]);
  fill(250);
  text("{Bom Jogo!}", 0, 225, width);
  //IMFORMAÇÕES DO MOUSE PARA A OPÇÃO DE CONTINUAR
  if (mouseX > 650 && mouseX < 650 + 140 && mouseY > 10 && mouseY < 10 + 35) {
    fill(0, 109, 119);
    rect(650, 10, 140, 35, 15);
    if (mouseIsPressed) {
       tela = 4;
    }
  }
  noStroke();
  textSize(20);
  fill(250);
  textFont(myFont[1]);
  text("CONTINUAR>>", 720, 25);
  //INFORMAÇÕES DO MOUSE PARA A OPÇÃO DE VOLTAR
  if (mouseX > 10 && mouseX < 10 + 110 && mouseY > 10 && mouseY < 10 + 35) {
    fill(0, 109, 119);
    rect(10, 10, 110, 35, 15);
    if (mouseIsPressed) {
      tela = 0;
    }
  }
  noStroke();
  textFont(myFont[1]);
  textSize(20);
  fill(250);
  text("<<VOLTAR", 60, 25);
}

function informações() {
  background(168, 218, 220);
  textAlign(CENTER);
  textFont(myFont[1]);
  fill(250);
  textSize(33);
  text("ANO: 8° Ano - Ens. Fundamental \n MATÉRIA: Ciências \n RESUMO: Representar os movimentos de rotação e translação da Terra e analisar o papel da inclinação  do eixo de rotação da Terra em relação à sua órbita na ocorrência das estações do ano, com a utilização de modelos tridimensionais", 0, 130, width);

  //INFORMAÇÕES DO MOUSE PARA A OPÇÃO DE VOLTAR
  if (mouseX > 10 && mouseX < 10 + 110 && mouseY > 10 && mouseY < 10 + 35) {
    fill(0, 109, 119);
    rect(10, 10, 110, 35, 15);
    if (mouseIsPressed) {
      tela = 0;
    }
  }
  noStroke();
  textFont(myFont[1]);
  textSize(20);
  fill(250);
  text("<<VOLTAR", 60, 25);
}

function creditos() {
  background(168, 218, 220);
  tint(250, 250)
  image(img[1], 100, 70);
  image(img[2], 100, 300);
  textAlign(CENTER);
  textSize(40);
  textFont(myFont[1]);
  fill(250);
  text("Rayani Gomes: \n Programador", 0, 150, width);
  text("Cláudio Abraão: \n Educador", 10, 350, width);

  //INFORMAÇÕES DO MOUSE PARA A OPÇÃO DE VOLTAR
  if (mouseX > 10 && mouseX < 10 + 110 && mouseY > 10 && mouseY < 10 + 35) {
    fill(0, 109, 119);
    rect(10, 10, 110, 35, 15);
    if (mouseIsPressed) {
      tela = 0;
    }
  }
  noStroke();
  textFont(myFont[1]);
  textSize(20);
  fill(250);
  text("<<VOLTAR", 60, 25);
}

function fase1() {
  background(168, 218, 220);
  tint(255, 250)
  image(img[3], 0, 0, 800, 500);
  //INFORMAÇÕES PARA O MOUSE NA TERRA 1
  if (dist(694, 230, mouseX, mouseY) < 46) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(694, 230, 92, 92);
    if (mouseIsPressed) {
      tela = 5;
      resposta = 0;
      ponto = ponto + 20;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 2
  if (dist(103, 230, mouseX, mouseY) < 46) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(103, 230, 92, 92);
    if (mouseIsPressed) {
      tela = 5;
      resposta = 1;
      ponto = ponto - 5;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 3
  if (dist(400, 50, mouseX, mouseY) < 35) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(400, 50, 70, 70);
    if (mouseIsPressed) {
      tela = 5;
      resposta = 1;
      ponto = ponto - 5;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 4
  if (dist(396, 406, mouseX, mouseY) < 87) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(396, 406, 174, 174);
    if (mouseIsPressed) {
      tela = 5;
      resposta = 1;
      ponto = ponto - 5;
    }
  }
  noFill();
  stroke(250);
  strokeWeight(1);
  image(img[4], 0, 0, 800, 500);
  tint(250, 250)
  textSize(17);
  fill(250);
  noStroke();
  textFont(myFont[1]);
  text("Em qual posição se encontra a terra \nquando for INVERNO no hemisfério SUL?", 150, 430);
  textSize(20);
  text("Fase: 1/10", 75, 45);
  text("Pontos: " + ponto, 720, 45);
}

function resposta1() {
  //tela de resposta correta da fase 1
  if (resposta == 0) {
    background(168, 218, 220);
    textSize(70);
    fill(122, 141, 149);
    textFont(myFont[3]);
    text("CERTA RESPOSTA!\n", 0, 200, width);
    textSize(50);
    textFont(myFont[1]);
    text("Mais 20 pontos", 0, 280, width);

    //IMFORMAÇÕES DO MOUSE PARA A OPÇÃO DE CONTINUAR
    if (mouseX > 650 && mouseX < 650 + 140 && mouseY > 10 && mouseY < 10 + 35) {
      fill(0, 109, 119);
      rect(650, 10, 140, 35, 15);
      if (mouseIsPressed) {
        tela = 6;
      }
    }
    noStroke();
    textSize(20);
    fill(250);
    textFont(myFont[1]);
    text("CONTINUAR>>", 720, 25);
  }
  //tela de resposta errada da fase 1
  if (resposta == 1) {
    background(168, 218, 220);
    textSize(80);
    fill(122, 141, 149);
    textFont(myFont[3]);
    text("VOCÊ ERROU!\n", 0, 200, width);
    textSize(40);
    textFont(myFont[1]);
    text("Menos 5 pontos", 0, 280, width);
    text("\nTente novamente!", 0, 300, width);

    //IMFORMAÇÕES DO MOUSE PARA A OPÇÃO DE CONTINUAR
    if (mouseX > 650 && mouseX < 650 + 140 && mouseY > 10 && mouseY < 10 + 35) {
      fill(0, 109, 119);
      rect(650, 10, 140, 35, 15);
      if (mouseIsPressed) {
        tela = 4;
      }
    }
    noStroke();
    textSize(20);
    fill(250);
    textFont(myFont[1]);
    text("CONTINUAR>>", 720, 25);
  }
}

function fase2() {
  background(168, 218, 220);
  tint(255, 250)
  image(img[3], 0, 0, 800, 500);
  //INFORMAÇÕES PARA O MOUSE NA TERRA 1
  if (dist(694, 230, mouseX, mouseY) < 46) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(694, 230, 92, 92);
    if (mouseIsPressed) {
      tela = 7;
      resposta = 1;
      ponto = ponto - 5;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 2
  if (dist(103, 230, mouseX, mouseY) < 46) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(103, 230, 92, 92);
    if (mouseIsPressed) {
      tela = 7;
      resposta = 1;
      ponto = ponto - 5;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 3
  if (dist(400, 50, mouseX, mouseY) < 35) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(400, 50, 70, 70);
    if (mouseIsPressed) {
      tela = 7;
      resposta = 0;
      ponto = ponto + 20;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 4
  if (dist(396, 406, mouseX, mouseY) < 87) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(396, 406, 174, 174);
    if (mouseIsPressed) {
      tela = 7;
      resposta = 0;
      ponto = ponto + 20;
    }
  }
  noFill();
  stroke(250);
  strokeWeight(1);
  image(img[4], 0, 0, 800, 500);
  tint(250, 250)
  textSize(17);
  fill(250);
  noStroke();
  textFont(myFont[1]);
  text("Indique uma das posições onde \na terra pode ser encontrada \nno período de equinócio.", 150, 430);
  textSize(20);
  text("Fase: 2/15", 75, 45);
  text("Pontos: " + ponto, 720, 45);
}

function resposta2() {
  //tela de resposta correta da fase 2
  if (resposta == 0) {
    background(168, 218, 220);
    textSize(70);
    fill(122, 141, 149);
    textFont(myFont[3]);
    text("CERTA RESPOSTA!\n", 0, 200, width);
    textSize(50);
    textFont(myFont[1]);
    text("Mais 20 pontos", 0, 280, width);

    //IMFORMAÇÕES DO MOUSE PARA A OPÇÃO DE CONTINUAR
    if (mouseX > 650 && mouseX < 650 + 140 && mouseY > 10 && mouseY < 10 + 35) {
      fill(0, 109, 119);
      rect(650, 10, 140, 35, 15);
      if (mouseIsPressed) {
        tela = 8;
      }
    }
    noStroke();
    textSize(20);
    fill(250);
    textFont(myFont[1]);
    text("CONTINUAR>>", 720, 25);
  }
  //tela de resposta errada da fase 2
  if (resposta == 1) {
    background(168, 218, 220);
    textSize(80);
    fill(122, 141, 149);
    textFont(myFont[3]);
    text("VOCÊ ERROU!\n", 0, 200, width);
    textSize(40);
    textFont(myFont[1]);
    text("Menos 5 pontos", 0, 280, width);
    text("\nTente novamente!", 0, 300, width);

    //IMFORMAÇÕES DO MOUSE PARA A OPÇÃO DE CONTINUAR
    if (mouseX > 650 && mouseX < 650 + 140 && mouseY > 10 && mouseY < 10 + 35) {
      fill(0, 109, 119);
      rect(650, 10, 140, 35, 15);
      if (mouseIsPressed) {
        tela = 6;
      }
    }
    noStroke();
    textSize(20);
    fill(250);
    textFont(myFont[1]);
    text("CONTINUAR>>", 720, 25);
  }
}

function fase3() {
  background(168, 218, 220);
  tint(255, 250)
  image(img[3], 0, 0, 800, 500);
  //INFORMAÇÕES PARA O MOUSE NA TERRA 1
  if (dist(694, 230, mouseX, mouseY) < 46) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(694, 230, 92, 92);
    if (mouseIsPressed) {
      tela = 9;
      resposta = 1;
      ponto = ponto - 5;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 2
  if (dist(103, 230, mouseX, mouseY) < 46) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(103, 230, 92, 92);
    if (mouseIsPressed) {
      tela = 9;
      resposta = 1;
      ponto = ponto - 5;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 3
  if (dist(400, 50, mouseX, mouseY) < 35) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(400, 50, 70, 70);
    if (mouseIsPressed) {
      tela = 9;
      resposta = 1;
      ponto = ponto - 5;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 4
  if (dist(396, 406, mouseX, mouseY) < 87) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(396, 406, 174, 174);
    if (mouseIsPressed) {
      tela = 9;
      resposta = 0;
      ponto = ponto + 20;
    }
  }
  noFill();
  stroke(250);
  strokeWeight(1);
  image(img[4], 0, 0, 800, 500);
  tint(250, 250)
  textSize(17);
  fill(250);
  noStroke();
  textFont(myFont[1]);
  text("Em qual posição se encontra a \nterra quando for primavera no \nhemisfério norte?", 150, 430);
  textSize(20);
  text("Fase: 3/10", 75, 45);
  text("Pontos: " + ponto, 720, 45);
}

function resposta3() {
  //tela de resposta correta da fase 3
  if (resposta == 0) {
    background(168, 218, 220);
    textSize(70);
    fill(122, 141, 149);
    textFont(myFont[3]);
    text("CERTA RESPOSTA!\n", 0, 200, width);
    textSize(50);
    textFont(myFont[1]);
    text("Mais 20 pontos", 0, 280, width);

    //IMFORMAÇÕES DO MOUSE PARA A OPÇÃO DE CONTINUAR
    if (mouseX > 650 && mouseX < 650 + 140 && mouseY > 10 && mouseY < 10 + 35) {
      fill(0, 109, 119);
      rect(650, 10, 140, 35, 15);
      if (mouseIsPressed) {
        tela = 10;
      }
    }
    noStroke();
    textSize(20);
    fill(250);
    textFont(myFont[1]);
    text("CONTINUAR>>", 720, 25);
  }
  //tela de resposta errada da fase 3
  if (resposta == 1) {
    background(168, 218, 220);
    textSize(80);
    fill(122, 141, 149);
    textFont(myFont[3]);
    text("VOCÊ ERROU!\n", 0, 200, width);
    textSize(40);
    textFont(myFont[1]);
    text("Menos 5 pontos", 0, 280, width);
    text("\nTente novamente!", 0, 300, width);

    //IMFORMAÇÕES DO MOUSE PARA A OPÇÃO DE CONTINUAR
    if (mouseX > 650 && mouseX < 650 + 140 && mouseY > 10 && mouseY < 10 + 35) {
      fill(0, 109, 119);
      rect(650, 10, 140, 35, 15);
      if (mouseIsPressed) {
        tela = 8;
      }
    }
    noStroke();
    textSize(20);
    fill(250);
    textFont(myFont[1]);
    text("CONTINUAR>>", 720, 25);
  }
}

function fase4() {
  background(168, 218, 220);
  tint(255, 250)
  image(img[3], 0, 0, 800, 500);
  //INFORMAÇÕES PARA O MOUSE NA TERRA 1
  if (dist(694, 230, mouseX, mouseY) < 46) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(694, 230, 92, 92);
    if (mouseIsPressed) {
      tela = 11;
      resposta = 1;
      ponto = ponto - 5;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 2
  if (dist(103, 230, mouseX, mouseY) < 46) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(103, 230, 92, 92);
    if (mouseIsPressed) {
      tela = 11;
      resposta = 1;
      ponto = ponto - 5;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 3
  if (dist(400, 50, mouseX, mouseY) < 35) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(400, 50, 70, 70);
    if (mouseIsPressed) {
      tela = 11;
      resposta = 0;
      ponto = ponto + 20;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 4
  if (dist(396, 406, mouseX, mouseY) < 87) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(396, 406, 174, 174);
    if (mouseIsPressed) {
      tela = 11;
      resposta = 1;
      ponto = ponto - 5;
    }
  }
  noFill();
  stroke(250);
  strokeWeight(1);
  image(img[4], 0, 0, 800, 500);
  tint(250, 250)
  textSize(17);
  fill(250);
  noStroke();
  textFont(myFont[1]);
  text("Em qual posição se encontra a terra \nquando for outono no hemisfério norte?", 150, 430);
  textSize(20);
  text("Fase: 4/10", 75, 45);
  text("Pontos: " + ponto, 720, 45);
}

function resposta4() {
  //tela de resposta correta da fase 4
  if (resposta == 0) {
    background(168, 218, 220);
    textSize(70);
    fill(122, 141, 149);
    textFont(myFont[3]);
    text("CERTA RESPOSTA!\n", 0, 200, width);
    textSize(50);
    textFont(myFont[1]);
    text("Mais 20 pontos", 0, 280, width);

    //IMFORMAÇÕES DO MOUSE PARA A OPÇÃO DE CONTINUAR
    if (mouseX > 650 && mouseX < 650 + 140 && mouseY > 10 && mouseY < 10 + 35) {
      fill(0, 109, 119);
      rect(650, 10, 140, 35, 15);
      if (mouseIsPressed) {
        tela = 12;
      }
    }
    noStroke();
    textSize(20);
    fill(250);
    textFont(myFont[1]);
    text("CONTINUAR>>", 720, 25);
  }
  //tela de resposta errada da fase 4
  if (resposta == 1) {
    background(168, 218, 220);
    textSize(80);
    fill(122, 141, 149);
    textFont(myFont[3]);
    text("VOCÊ ERROU!\n", 0, 200, width);
    textSize(40);
    textFont(myFont[1]);
    text("Menos 5 pontos", 0, 280, width);
    text("\nTente novamente!", 0, 300, width);

    //IMFORMAÇÕES DO MOUSE PARA A OPÇÃO DE CONTINUAR
    if (mouseX > 650 && mouseX < 650 + 140 && mouseY > 10 && mouseY < 10 + 35) {
      fill(0, 109, 119);
      rect(650, 10, 140, 35, 15);
      if (mouseIsPressed) {
        tela = 10;
      }
    }
    noStroke();
    textSize(20);
    fill(250);
    textFont(myFont[1]);
    text("CONTINUAR>>", 720, 25);
  }
}

function fase5() {
  background(168, 218, 220);
  tint(255, 250)
  image(img[3], 0, 0, 800, 500);
  //INFORMAÇÕES PARA O MOUSE NA TERRA 1
  if (dist(694, 230, mouseX, mouseY) < 46) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(694, 230, 92, 92);
    if (mouseIsPressed) {
      tela = 13;
      resposta = 0;
      ponto = ponto + 20;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 2
  if (dist(103, 230, mouseX, mouseY) < 46) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(103, 230, 92, 92);
    if (mouseIsPressed) {
      tela = 13;
      resposta = 1;
      ponto = ponto - 5;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 3
  if (dist(400, 50, mouseX, mouseY) < 35) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(400, 50, 70, 70);
    if (mouseIsPressed) {
      tela = 13;
      resposta = 1;
      ponto = ponto - 5;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 4
  if (dist(396, 406, mouseX, mouseY) < 87) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(396, 406, 174, 174);
    if (mouseIsPressed) {
      tela = 13;
      resposta = 1;
      ponto = ponto - 5;
    }
  }
  noFill();
  stroke(250);
  strokeWeight(1);
  image(img[4], 0, 0, 800, 500);
  tint(250, 250)
  textSize(17);
  fill(250);
  noStroke();
  textFont(myFont[1]);
  text("Em qual posição se encontra a \nterra quando o dia é mais longo \nque a noite no hemisfério norte?", 150, 430);
  textSize(20);
  text("Fase: 5/10", 75, 45);
  text("Pontos: " + ponto, 720, 45);
}

function resposta5() {
  //tela de resposta correta da fase 5
  if (resposta == 0) {
    background(168, 218, 220);
    textSize(70);
    fill(122, 141, 149);
    textFont(myFont[3]);
    text("CERTA RESPOSTA!\n", 0, 200, width);
    textSize(50);
    textFont(myFont[1]);
    text("Mais 20 pontos", 0, 280, width);

    //IMFORMAÇÕES DO MOUSE PARA A OPÇÃO DE CONTINUAR
    if (mouseX > 650 && mouseX < 650 + 140 && mouseY > 10 && mouseY < 10 + 35) {
      fill(0, 109, 119);
      rect(650, 10, 140, 35, 15);
      if (mouseIsPressed) {
        tela = 14;
      }
    }
    noStroke();
    textSize(20);
    fill(250);
    textFont(myFont[1]);
    text("CONTINUAR>>", 720, 25);
  }
  //tela de resposta errada da fase 5
  if (resposta == 1) {
    background(168, 218, 220);
    textSize(80);
    fill(122, 141, 149);
    textFont(myFont[3]);
    text("VOCÊ ERROU!\n", 0, 200, width);
    textSize(40);
    textFont(myFont[1]);
    text("Menos 5 pontos", 0, 280, width);
    text("\nTente novamente!", 0, 300, width);

    //IMFORMAÇÕES DO MOUSE PARA A OPÇÃO DE CONTINUAR
    if (mouseX > 650 && mouseX < 650 + 140 && mouseY > 10 && mouseY < 10 + 35) {
      fill(0, 109, 119);
      rect(650, 10, 140, 35, 15);
      if (mouseIsPressed) {
        tela = 12;
      }
    }
    noStroke();
    textSize(20);
    fill(250);
    textFont(myFont[1]);
    text("CONTINUAR>>", 720, 25);
  }
}

function fase6() {
  background(168, 218, 220);
  tint(255, 250)
  image(img[3], 0, 0, 800, 500);
  //INFORMAÇÕES PARA O MOUSE NA TERRA 1
  if (dist(694, 230, mouseX, mouseY) < 46) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(694, 230, 92, 92);
    if (mouseIsPressed) {
      tela = 15;
      resposta = 1;
      ponto = ponto - 5;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 2
  if (dist(103, 230, mouseX, mouseY) < 46) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(103, 230, 92, 92);
    if (mouseIsPressed) {
      tela = 15;
      resposta = 1;
      ponto = ponto - 5;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 3
  if (dist(400, 50, mouseX, mouseY) < 35) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(400, 50, 70, 70);
    if (mouseIsPressed) {
      tela = 15;
      resposta = 0;
      ponto = ponto + 20;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 4
  if (dist(396, 406, mouseX, mouseY) < 87) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(396, 406, 174, 174);
    if (mouseIsPressed) {
      tela = 15;
      resposta = 1;
      ponto = ponto - 5;
    }
  }
  noFill();
  stroke(250);
  strokeWeight(1);
  image(img[4], 0, 0, 800, 500);
  tint(250, 250)
  textSize(17);
  fill(250);
  noStroke();
  textFont(myFont[1]);
  text("Em qual posição se encontra a terra \nquando for primavera no hemisfério sul?", 150, 430);
  textSize(20);
  text("Fase: 6/10", 75, 45);
  text("Pontos: " + ponto, 720, 45);
}

function resposta6() {
  //tela de resposta correta da fase 6
  if (resposta == 0) {
    background(168, 218, 220);
    textSize(70);
    fill(122, 141, 149);
    textFont(myFont[3]);
    text("CERTA RESPOSTA!\n", 0, 200, width);
    textSize(50);
    textFont(myFont[1]);
    text("Mais 20 pontos", 0, 280, width);

    //IMFORMAÇÕES DO MOUSE PARA A OPÇÃO DE CONTINUAR
    if (mouseX > 650 && mouseX < 650 + 140 && mouseY > 10 && mouseY < 10 + 35) {
      fill(0, 109, 119);
      rect(650, 10, 140, 35, 15);
      if (mouseIsPressed) {
        tela = 16;
      }
    }
    noStroke();
    textSize(20);
    fill(250);
    textFont(myFont[1]);
    text("CONTINUAR>>", 720, 25);
  }
  //tela de resposta errada da fase 6
  if (resposta == 1) {
    background(168, 218, 220);
    textSize(80);
    fill(122, 141, 149);
    textFont(myFont[3]);
    text("VOCÊ ERROU!\n", 0, 200, width);
    textSize(40);
    textFont(myFont[1]);
    text("Menos 5 pontos", 0, 280, width);
    text("\nTente novamente!", 0, 300, width);

    //IMFORMAÇÕES DO MOUSE PARA A OPÇÃO DE CONTINUAR
    if (mouseX > 650 && mouseX < 650 + 140 && mouseY > 10 && mouseY < 10 + 35) {
      fill(0, 109, 119);
      rect(650, 10, 140, 35, 15);
      if (mouseIsPressed) {
        tela = 14;
      }
    }
    noStroke();
    textSize(20);
    fill(250);
    textFont(myFont[1]);
    text("CONTINUAR>>", 720, 25);
  }
}

function fase7() {
  background(168, 218, 220);
  tint(255, 250)
  image(img[3], 0, 0, 800, 500);
  //INFORMAÇÕES PARA O MOUSE NA TERRA 1
  if (dist(694, 230, mouseX, mouseY) < 46) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(694, 230, 92, 92);
    if (mouseIsPressed) {
      tela = 17;
      resposta = 1;
      ponto = ponto - 5;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 2
  if (dist(103, 230, mouseX, mouseY) < 46) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(103, 230, 92, 92);
    if (mouseIsPressed) {
      tela = 17;
      resposta = 1;
      ponto = ponto - 5;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 3
  if (dist(400, 50, mouseX, mouseY) < 35) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(400, 50, 70, 70);
    if (mouseIsPressed) {
      tela = 17;
      resposta = 1;
      ponto = ponto - 5;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 4
  if (dist(396, 406, mouseX, mouseY) < 87) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(396, 406, 174, 174);
    if (mouseIsPressed) {
      tela = 17;
      resposta = 0;
      ponto = ponto + 20;
    }
  }
  noFill();
  stroke(250);
  strokeWeight(1);
  image(img[4], 0, 0, 800, 500);
  tint(250, 250)
  textSize(17);
  fill(250);
  noStroke();
  textFont(myFont[1]);
  text("Em qual posição se encontra a terra \nquando for outono no hemisfério sul?", 150, 430);
  textSize(20);
  text("Fase: 7/10", 75, 45);
  text("Pontos: " + ponto, 720, 45);
}

function resposta7() {
  //tela de resposta correta da fase 7
  if (resposta == 0) {
    background(168, 218, 220);
    textSize(70);
    fill(122, 141, 149);
    textFont(myFont[3]);
    text("CERTA RESPOSTA!\n", 0, 200, width);
    textSize(50);
    textFont(myFont[1]);
    text("Mais 20 pontos", 0, 280, width);

    //IMFORMAÇÕES DO MOUSE PARA A OPÇÃO DE CONTINUAR
    if (mouseX > 650 && mouseX < 650 + 140 && mouseY > 10 && mouseY < 10 + 35) {
      fill(0, 109, 119);
      rect(650, 10, 140, 35, 15);
      if (mouseIsPressed) {
        tela = 18;
      }
    }
    noStroke();
    textSize(20);
    fill(250);
    textFont(myFont[1]);
    text("CONTINUAR>>", 720, 25);
  }
  //tela de resposta errada da fase 7
  if (resposta == 1) {
    background(168, 218, 220);
    textSize(80);
    fill(122, 141, 149);
    textFont(myFont[3]);
    text("VOCÊ ERROU!\n", 0, 200, width);
    textSize(40);
    textFont(myFont[1]);
    text("Menos 5 pontos", 0, 280, width);
    text("\nTente novamente!", 0, 300, width);

    //IMFORMAÇÕES DO MOUSE PARA A OPÇÃO DE CONTINUAR
    if (mouseX > 650 && mouseX < 650 + 140 && mouseY > 10 && mouseY < 10 + 35) {
      fill(0, 109, 119);
      rect(650, 10, 140, 35, 15);
      if (mouseIsPressed) {
        tela = 16;
      }
    }
    noStroke();
    textSize(20);
    fill(250);
    textFont(myFont[1]);
    text("CONTINUAR>>", 720, 25);
  }
}

function fase8() {
  background(168, 218, 220);
  tint(255, 250)
  image(img[3], 0, 0, 800, 500);
  //INFORMAÇÕES PARA O MOUSE NA TERRA 1
  if (dist(694, 230, mouseX, mouseY) < 46) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(694, 230, 92, 92);
    if (mouseIsPressed) {
      tela = 19;
      resposta = 1;
      ponto = ponto - 5;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 2
  if (dist(103, 230, mouseX, mouseY) < 46) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(103, 230, 92, 92);
    if (mouseIsPressed) {
      tela = 19;
      resposta = 0;
      ponto = ponto + 20;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 3
  if (dist(400, 50, mouseX, mouseY) < 35) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(400, 50, 70, 70);
    if (mouseIsPressed) {
      tela = 19;
      resposta = 1;
      ponto = ponto - 5;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 4
  if (dist(396, 406, mouseX, mouseY) < 87) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(396, 406, 174, 174);
    if (mouseIsPressed) {
      tela = 19;
      resposta = 1;
      ponto = ponto - 5;
    }
  }
  noFill();
  stroke(250);
  strokeWeight(1);
  image(img[4], 0, 0, 800, 500);
  tint(250, 250)
  textSize(17);
  fill(250);
  noStroke();
  textFont(myFont[1]);
  text("Em qual posição se encontra a \nterra quando o dia é mais curto \nque a noite no hemisfério norte?", 150, 430);
  textSize(20);
  text("Fase: 8/10", 75, 45);
  text("Pontos: " + ponto, 720, 45);
}

function resposta8() {
  //tela de resposta correta da fase 8
  if (resposta == 0) {
    background(168, 218, 220);
    textSize(70);
    fill(122, 141, 149);
    textFont(myFont[3]);
    text("CERTA RESPOSTA!\n", 0, 200, width);
    textSize(50);
    textFont(myFont[1]);
    text("Mais 20 pontos", 0, 280, width);

    //IMFORMAÇÕES DO MOUSE PARA A OPÇÃO DE CONTINUAR
    if (mouseX > 650 && mouseX < 650 + 140 && mouseY > 10 && mouseY < 10 + 35) {
      fill(0, 109, 119);
      rect(650, 10, 140, 35, 15);
      if (mouseIsPressed) {
        tela = 20;
      }
    }
    noStroke();
    textSize(20);
    fill(250);
    textFont(myFont[1]);
    text("CONTINUAR>>", 720, 25);
  }
  //tela de resposta errada da fase 8
  if (resposta == 1) {
    background(168, 218, 220);
    textSize(80);
    fill(122, 141, 149);
    textFont(myFont[3]);
    text("VOCÊ ERROU!\n", 0, 200, width);
    textSize(40);
    textFont(myFont[1]);
    text("Menos 5 pontos", 0, 280, width);
    text("\nTente novamente!", 0, 300, width);

    //IMFORMAÇÕES DO MOUSE PARA A OPÇÃO DE CONTINUAR
    if (mouseX > 650 && mouseX < 650 + 140 && mouseY > 10 && mouseY < 10 + 35) {
      fill(0, 109, 119);
      rect(650, 10, 140, 35, 15);
      if (mouseIsPressed) {
        tela = 18;
      }
    }
    noStroke();
    textSize(20);
    fill(250);
    textFont(myFont[1]);
    text("CONTINUAR>>", 720, 25);
  }
}

function fase9() {
  background(168, 218, 220);
  tint(255, 250)
  image(img[3], 0, 0, 800, 500);
  //INFORMAÇÕES PARA O MOUSE NA TERRA 1
  if (dist(694, 230, mouseX, mouseY) < 46) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(694, 230, 92, 92);
    if (mouseIsPressed) {
      tela = 21;
      resposta = 0;
      ponto = ponto + 20;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 2
  if (dist(103, 230, mouseX, mouseY) < 46) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(103, 230, 92, 92);
    if (mouseIsPressed) {
      tela = 21;
      resposta = 0;
      ponto = ponto + 20;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 3
  if (dist(400, 50, mouseX, mouseY) < 35) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(400, 50, 70, 70);
    if (mouseIsPressed) {
      tela = 21;
      resposta = 1;
      ponto = ponto - 5;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 4
  if (dist(396, 406, mouseX, mouseY) < 87) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(396, 406, 174, 174);
    if (mouseIsPressed) {
      tela = 21;
      resposta = 1;
      ponto = ponto - 5;
    }
  }
  noFill();
  stroke(250);
  strokeWeight(1);
  image(img[4], 0, 0, 800, 500);
  tint(250, 250)
  textSize(17);
  fill(250);
  noStroke();
  textFont(myFont[1]);
  text("Indique uma das posições onde a \nterra pode ser encontrada no \nperíodo de solstício.", 150, 430);
  textSize(20);
  text("Fase: 9/10", 75, 45);
  text("Pontos: " + ponto, 720, 45);
}

function resposta9() {
  //tela de resposta correta da fase 9
  if (resposta == 0) {
    background(168, 218, 220);
    textSize(70);
    fill(122, 141, 149);
    textFont(myFont[3]);
    text("CERTA RESPOSTA!\n", 0, 200, width);
    textSize(50);
    textFont(myFont[1]);
    text("Mais 20 pontos", 0, 280, width);

    //IMFORMAÇÕES DO MOUSE PARA A OPÇÃO DE CONTINUAR
    if (mouseX > 650 && mouseX < 650 + 140 && mouseY > 10 && mouseY < 10 + 35) {
      fill(0, 109, 119);
      rect(650, 10, 140, 35, 15);
      if (mouseIsPressed) {
        tela = 22;
      }
    }
    noStroke();
    textSize(20);
    fill(250);
    textFont(myFont[1]);
    text("CONTINUAR>>", 720, 25);
  }
  //tela de resposta errada da fase 9
  if (resposta == 1) {
    background(168, 218, 220);
    textSize(80);
    fill(122, 141, 149);
    textFont(myFont[3]);
    text("VOCÊ ERROU!\n", 0, 200, width);
    textSize(40);
    textFont(myFont[1]);
    text("Menos 5 pontos", 0, 280, width);
    text("\nTente novamente!", 0, 300, width);

    //IMFORMAÇÕES DO MOUSE PARA A OPÇÃO DE CONTINUAR
    if (mouseX > 650 && mouseX < 650 + 140 && mouseY > 10 && mouseY < 10 + 35) {
      fill(0, 109, 119);
      rect(650, 10, 140, 35, 15);
      if (mouseIsPressed) {
        tela = 20;
      }
    }
    noStroke();
    textSize(20);
    fill(250);
    textFont(myFont[1]);
    text("CONTINUAR>>", 720, 25);
  }
}

function fase10() {
  background(168, 218, 220);
  tint(255, 250);
  image(img[3], 0, 0, 800, 500);
  //INFORMAÇÕES PARA O MOUSE NA TERRA 1
  if (dist(694, 230, mouseX, mouseY) < 46) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(694, 230, 92, 92);
    if (mouseIsPressed) {
      tela = 23;
      resposta = 1;
      ponto = ponto - 5;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 2
  if (dist(103, 230, mouseX, mouseY) < 46) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(103, 230, 92, 92);
    if (mouseIsPressed) {
      tela = 23;
      resposta = 0;
      ponto = ponto + 20;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 3
  if (dist(400, 50, mouseX, mouseY) < 35) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(400, 50, 70, 70);
    if (mouseIsPressed) {
      tela = 23;
      resposta = 1;
      ponto = ponto - 5;
    }
  }
  //INFORMAÇÕES PARA O MOUSE NA TERRA 4
  if (dist(396, 406, mouseX, mouseY) < 87) {
    noStroke();
    fill(250);
    tint(250, 220)
    ellipse(396, 406, 174, 174);
    if (mouseIsPressed) {
      tela = 23;
      resposta = 1;
      ponto = ponto - 5;
    }
  }
  noFill();
  stroke(250);
  strokeWeight(1);
  image(img[4], 0, 0, 800, 500);
  tint(250, 250)
  textSize(17);
  fill(250);
  noStroke();
  textFont(myFont[1]);
  text("Em qual posição se encontra a terra \nquando for inverno no hemisfério norte?", 150, 430);
  textSize(20);
  text("Fase: 10/10", 75, 45);
  text("Pontos: " + ponto, 720, 45);
}

function resposta10() {
  //tela de resposta correta da fase 10
  if (resposta == 0) {
    background(168, 218, 220);
    textSize(70);
    fill(122, 141, 149);
    textFont(myFont[3]);
    text("FIM DE JOGO!\n", 0, 200, width);
    textSize(50);
    textFont(myFont[1]);
    text("Pontos: " + ponto, 0, 280, width);

    //IMFORMAÇÕES DO MOUSE PARA A OPÇÃO DE CONTINUAR
    if (mouseX > 650 && mouseX < 650 + 140 && mouseY > 10 && mouseY < 10 + 35) {
      fill(0, 109, 119);
      rect(650, 10, 140, 35, 15);
      if (mouseIsPressed) {
        tela = 0;

      }
    }
    noStroke();
    textSize(20);
    fill(250);
    textFont(myFont[1]);
    text("CONTINUAR>>", 720, 25);
  }
  //tela de resposta errada da fase 10
  if (resposta == 1) {
    background(168, 218, 220);
    textSize(80);
    fill(122, 141, 149);
    textFont(myFont[3]);
    text("VOCÊ ERROU!\n", 0, 200, width);
    textSize(40);
    textFont(myFont[1]);
    text("Menos 5 pontos", 0, 280, width);
    text("\nTente novamente!", 0, 300, width);

    //IMFORMAÇÕES DO MOUSE PARA A OPÇÃO DE CONTINUAR
    if (mouseX > 650 && mouseX < 650 + 140 && mouseY > 10 && mouseY < 10 + 35) {
      fill(0, 109, 119);
      rect(650, 10, 140, 35, 15);
      if (mouseIsPressed) {
        tela = 22;
      }
    }
    noStroke();
    textSize(20);
    fill(250);
    textFont(myFont[1]);
    text("CONTINUAR>>", 720, 25);
  }
}