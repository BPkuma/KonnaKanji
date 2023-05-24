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
// ユーザーの選択肢を保有するための配列を定義
const answerArray = [];

// 漢字の配置を拡張する時のための定数を定義。現時点では未使用。
const formation = 0;

const question = document.getElementById('question');
const answerA = document.querySelector('.answerA');
const answerB = document.querySelector('.answerB');
const resultField = document.getElementById('resultField');
const result01 = document.querySelector('.result01');
const result02 = document.querySelector('.result02');

function setQuestion() {
  // ユーザー選択の配列要素が２つに達したら、結果を表示する関数を実行
  if(answerArray.length === 2){
    showResult();
    return;
  }
  // 選択肢が２つ貯まるまではクリックイベントをつけたり外したりして繰り返す
  let rand = Math.floor(Math.random() * matters.length);
  let matter = matters.splice(rand, 1)[0];

  question.textContent = matter['question'];
  answerA.textContent = matter['answerA'];
  answerB.textContent = matter['answerB'];
  
  answerA.addEventListener('click', handleAnswerA);
  answerB.addEventListener('click', handleAnswerB);
}

function handleAnswerA() {
  answerArray.push(answerA.textContent);
  console.log(answerArray);
  answerA.removeEventListener('click', handleAnswerA);
  answerB.removeEventListener('click', handleAnswerB);
  setQuestion();
}

function handleAnswerB() {
  answerArray.push(answerB.textContent);
  console.log(answerArray);
  answerA.removeEventListener('click', handleAnswerA);
  answerB.removeEventListener('click', handleAnswerB);
  setQuestion();
}

function showResult() {
  const firstAnswer = answerArray[0];
  const secondAnswer = answerArray[1];

  // // resultPositionを参照して、回答に対応する位置情報を取得する
  // const resultPosition1 = resultPosition.find((pos) => pos.position === firstAnswer);
  // const resultPosition2 = resultPosition.find((pos) => pos.position === secondAnswer);

  // // 結果を表示するためのスタイルを設定する
  // result01.style.width = `${resultPosition1.width}px`;
  // result01.style.height = `${resultPosition1.height}px`;

  // result02.style.width = `${resultPosition2.width}px`;
  // result02.style.height = `${resultPosition2.height}px`;

  // 結果の表示内容を設定する
  result01.textContent = firstAnswer;
  result02.textContent = secondAnswer;

  // 画像ファイルのパスをランダムに選択する
  const imageFolderPath = "img/"; // 画像フォルダのパス
  const imageExtensions = ".png"; // 画像の拡張子
  const imageFilename1 = `${imageFolderPath}${Math.floor(Math.random() * 31)}${imageExtensions}`;
  const imageFilename2 = `${imageFolderPath}${Math.floor(Math.random() * 31)}${imageExtensions}`;

  // 画像を表示する
  result01.innerHTML = `<img src="${imageFilename1}" width="100" height="200">`;
  result02.innerHTML = `<img src="${imageFilename2}" width="100" height="200">`;

}

setQuestion();