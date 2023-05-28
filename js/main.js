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
];
// ユーザーの回答を保有するための空の配列を定義
const answerArray = [];

// 最初の質問で選択された配列のformTypeを保持する変数
let selectedFormType = null;

// 出題数を定義
const NUM = 2;

// 各種HTMLノードを取得して定数に代入
const question = document.getElementById('question');
const answerBoard = document.getElementById('answerBoard');
const answerA = document.querySelector('.answerA');
const answerB = document.querySelector('.answerB');
const back = document.querySelector('.arrow.back');
const next = document.querySelector('.arrow.next');
///////////////////////hiddenを付け替えたい要素を定数に代入
const h1 = document.querySelector('h1');
const main = document.querySelector('main');
//////////////////////////タイトルに戻るボタンを定数に代入
const totitle = document.getElementById('totitle');
//////////////////////////////////////////日時表示用
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const today = `${year}.${month + 1}.${date}`;
//////////////////漢字画像が表示されているかどうかの確認用
const imgsrc = document.querySelector('img src');  

function setQuestion() {
  // ユーザー回答の配列要素が規定の出題数に達したら、結果を表示する関数showResult()を実行
  if (answerArray.length === NUM) {
    showResult();
    return;
  }
  // ユーザー回答の配列要素数によって何回目の質問かを判別し、場合分けする（イベントリスナー内の処理にsetQuestion()があるので規定質問数に達するまでループする）
  switch (answerArray.length) {
    // 最初の質問ではfirstQuestion配列を使用する
    case 0:
      const fq = firstQuestions.splice(Math.floor(Math.random() * firstQuestions.length), 1)[0];
      // ランダムに選ばれた配列のformTypeを変数に代入して２回目以降の質問で使う
      selectedFormType = fq.formType;
      // questionノードに問題文をセットする
      question.textContent = fq['question'];
      // answerAノードのテキストに回答文をセットする
      answerA.textContent = fq['answerA'];
      // answerAノードのdata-imgA属性に画像パスをセットする
      answerA.dataset.imgA = fq['imgA'];
      answerB.textContent = fq['answerB'];
      answerB.dataset.imgB = fq['imgB'];
      answerA.addEventListener('click', handleAnswerA);
      answerB.addEventListener('click', handleAnswerB);   
      break;

    // 最初の質問以外ではsecondQuestion配列を使用する
    default:
      // selectedFormTypeとformTypeが同じものだけを抽出した配列を作成する
      const filteredQuestions = secondQuestions.filter(item => item.formType === selectedFormType);
      // ランダムに選び出す
      const sq = filteredQuestions.splice(Math.floor(Math.random() * filteredQuestions.length), 1)[0];

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
// 選択肢Aがクリックされた際の処理
function handleAnswerA() {
  // ユーザー回答に対応するdata-imgA属性の値（画像パス）を配列要素に追加する
  answerArray.push(answerA.dataset.imgA);
  // 既存のイベントリスナーを解除する
  answerA.removeEventListener('click', handleAnswerA);
  answerB.removeEventListener('click', handleAnswerB);
  setQuestion();
}

function handleAnswerB() {
  answerArray.push(answerB.dataset.imgB);
  answerA.removeEventListener('click', handleAnswerA);
  answerB.removeEventListener('click', handleAnswerB);
  setQuestion();
}

function showResult() {
  const result01 = document.querySelector('.result01');
  const result02 = document.querySelector('.result02');

  question.remove();
  answerBoard.remove();
  //結果の表示内容を設定する
  result01.innerHTML = `<img src="${answerArray[0]}" width="200" height="400">`;
  result02.innerHTML = `<img src="${answerArray[1]}" width="200" height="400">`;
  ///////////////////////今日の日付を表示
  document.querySelector('.ending').classList.remove('hidden');
}

///////////////トップ画面から質問画面への処理をファンクションにする
function autoSwitchToMain() {  
  ////////////// 初期状態ではメインコンテンツを非表示にする
  main.classList.add('hidden');   
  ///////////// クリック時にタイトルを表示する
  h1.classList.remove('hidden'); 
    if(imgsrc !== null) {
      location.reload();
    }
  setTimeout(() => {
    h1.classList.add('hidden');
    main.classList.remove('hidden');
  }, 500);
}

// 以下、実行文
autoSwitchToMain();
setQuestion();
///////ホームボタン
totitle.addEventListener('click', function() {
  location.reload();
});
//////日時表示
document.querySelector('.date').textContent = today;

///////////////テスト用

