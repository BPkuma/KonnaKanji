'use strict';

// result表示する画像の配置位置を定義
const resultPosition = [
  {
    position : "left",
    pos_code : 0,
    width : 100,
    height : 200,
  },
  {
    position : "right",
    pos_code : 1,
    width : 100,
    height : 200, 
  },
];

// 設問文と答えの組み合わせを定義
const matters = [
  {
    id: "01",
    question: "今のあなたは",
    answerA: "明るい。",
    answerB: "暗い。",
  },
  {
    id: "02",
    question: "今食べるなら",
    answerA: "肉。",
    answerB: "魚。",
  },
  {
    id: "03",
    question: "今戯れるなら",
    answerA: "犬。",
    answerB: "猫。",
  },
  {
    id: "04",
    question: "どちらか言えば",
    answerA: "誰かと話したい。",
    answerB: "一人でいたい。",
  },
  {
    id: "05",
    question: "今の自分を天気で言うと",
    answerA: "晴れ。",
    answerB: "曇り。",
  },
  {
    id: "06",
    question: "自然と足が向きそうなのは",
    answerA: "森。",
    answerB: "海。",
  },
  {
    id: "07",
    question: "感情の波が",
    answerA: "激しい。",
    answerB: "凪いでいる。",
  },
  {
    id: "08",
    question: "今の気分の服装は",
    answerA: "ミニマル。",
    answerB: "派手。",
  },
  {
    id: "09",
    question: "容姿のコンディションは",
    answerA: "かわいい。",
    answerB: "かっこいい。",
  },
  {
    id: "10",
    question: "今眠りに就くなら",
    answerA: "ハンモックの上。",
    answerB: "布団の中。",
  },
];

const answerArray = [];

const question = document.getElementById('question');
const answerA = document.querySelector('.answerA');
const answerB = document.querySelector('.answerB');
const resultField = document.getElementById('resultField');
const result01 = document.querySelector('.result01');
const result02 = document.querySelector('.result02');

function setQuestion() {
  let rand = Math.floor(Math.random() * matters.length);
  let matter = matters.splice(rand, 1)[0];

  question.textContent = matter['question'];
  answerA.textContent = matter['answerA'];
  answerB.textContent = matter['answerB'];
}

function setResult(e) {

}

setQuestion();

answerA.addEventListener('click', (e) => {
  
});

answerB.addEventListener('click', (e) => {
  
});