'use strict';
const firstQuestions = [
  {
    question: "今のあなたは",
    answerA: "明るい", 
      imgA: "img/6.png",
    answerB: "暗い", 
      imgB: "img/17.png",
    formType: "sideBySide",
  },
  {
    question: "今食べるなら",
    answerA: "肉", 
      imgA: "img/3.png",
    answerB: "魚",
      imgB: "img/8.png",
    formType: "verticalLine",
  },
];
const secondQuestions = [
  {
    question: "今戯れるなら",
    answerA: "犬",
      imgA: "img/14.png",
    answerB: "猫",
      imgB: "img/27.png",
    formType: "sideBySide",
  },
  {
    question: "どちらかと言えば",
    answerA: "誰かと話したい",
      imgA: "img/11.png",
    answerB: "一人でいたい",
      imgB: "img/25.png",
    formType: "sideBySide",
  },
  {
    question: "今の自分を天気でいうと",
    answerA: "晴れ",
      imgA: "img/2.png",
    answerB: "曇り",
      imgB: "img/7.png",
    formType: "sideBySide",
  },
  {
    question: "自然と足が向きそうなのは",
    answerA: "森",
      imgA: "img/26.png",
    answerB: "海",
      imgB: "img/23.png",
    formType: "sideBySide",
  },
  {
    question: "感情の波が",
    answerA: "激しい",
      imgA: "img/16.png",
    answerB: "凪いでいる",
      imgB: "img/23.png",
    formType: "verticalLine",
  },
  {
    question: "今の気分の服装は",
    answerA: "ミニマル",
      imgA: "img/30.png",
    answerB: "派手",
      imgB: "img/12.png",
    formType: "verticalLine",
  },
  {
    question: "容姿のコンディションは",
    answerA: "かわいい",
      imgA: "img/19.png",
    answerB: "かっこいい",
      imgB: "img/20.png",
    formType: "verticalLine",
  },
  {
    question: "今眠りにつくなら",
    answerA: "ハンモックの上",
      imgA: "img/22.png",
    answerB: "お布団の中",
      imgB: "img/15.png",
    formType: "verticalLine",
  },
]

// ユーザーの選択肢を保有するための配列を定義
const answerArray = [];

// 出題数を定義
const NUM = 2;

const question = document.getElementById('question');
const answerA = document.querySelector('.answerA');
const answerB = document.querySelector('.answerB');
const resultField = document.getElementById('resultField');

function setQuestion() {
  // ユーザー選択の配列要素が２つに達したら、結果を表示する関数を実行
  if (answerArray.length === NUM) {
    showResult();
    return;
  }
  
  switch (answerArray.length) {
    case 0:
      const fq = firstQuestions.splice(Math.floor(Math.random() * firstQuestions.length), 1)[0];
      question.textContent = fq['question'];
      answerA.textContent = fq['answerA'];
      answerA.dataset.imgA = fq['imgA'];
      answerB.textContent = fq['answerB'];
      answerB.dataset.imgB = fq['imgB'];
      answerA.addEventListener('click', handleAnswerA);
      answerB.addEventListener('click', handleAnswerB);
      break;
      default:
      const sq = secondQuestions.splice(Math.floor(Math.random() * secondQuestions.length), 1)[0];
      question.textContent = sq['question'];
      answerA.textContent = sq['answerA'];
      answerA.dataset.imgA = sq['imgA'];
      answerB.textContent = sq['answerB'];
      answerB.dataset.imgB = sq['imgB'];
      answerA.addEventListener('click', handleAnswerA);
      answerB.addEventListener('click', handleAnswerB);
      break;
  }
}

function handleAnswerA() {
  answerArray.push(answerA.dataset.imgA);
  console.log(answerArray);
  answerA.removeEventListener('click', handleAnswerA);
  answerB.removeEventListener('click', handleAnswerB);
  setQuestion();
}

function handleAnswerB() {
  answerArray.push(answerB.dataset.imgB);
  console.log(answerArray);
  answerA.removeEventListener('click', handleAnswerA);
  answerB.removeEventListener('click', handleAnswerB);
  setQuestion();
}

function showResult() {
  const result01 = document.querySelector('.result01');
  const result02 = document.querySelector('.result02');

  const firstAnswer = answerArray[0];
  const secondAnswer = answerArray[1];

  //結果の表示内容を設定する
  result01.innerHTML = `<img src="${firstAnswer}" width="100" height="200">`;
  result02.innerHTML = `<img src="${secondAnswer}" width="100" height="200">`;
}

setQuestion();