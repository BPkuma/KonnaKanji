'use strict';
const firstQuestions = [
  {
    question: "今のあなたは",
    answerA: "明るい", 
      imgA: "images/around1.png",
    answerB: "暗い", 
      imgB: "images/around1.png",
    formType: "around",
  },
  {
    question: "今食べるなら",
    answerA: "肉", 
      imgA: "images/base1-1.png",
    answerB: "魚",
      imgB: "images/base1-2.png",
    formType: "base",
  },
  {
    question: "今戯れるなら",
    answerA: "犬",
      imgA: "images/cover1-1",
    answerB: "猫",
      imgB: "images/cover1-2.png",
    formType: "cover",
  },
  {
    question: "どちらかと言えば",
    answerA: "誰かと話したい",
      imgA: "images/Ltype1-1.png",
    answerB: "一人でいたい",
      imgB: "images/Ltype1-2.png",
    formType: "Ltype",
  },
  {
    question: "今の自分を天気でいうと",
    answerA: "晴れ",
      imgA: "images/side1-1.png",
    answerB: "曇り",
      imgB: "images/side1-2.png",
    formType: "side",
  },
  {
    question: "自然と足が向きそうなのは",
    answerA: "森",
      imgA: "images/side1-3.png",
    answerB: "海",
      imgB: "images/side1-4.png",
    formType: "side",
  },
];
const secondQuestions = [
  {
    question: "感情の波が",
    answerA: "激しい",
      imgA: "images/around2-1.png",
    answerB: "凪いでいる",
      imgB: "images/around2-2.png",
    formType: "around",
  },
  {
    question: "今の気分の服装は",
    answerA: "ミニマル",
      imgA: "images/around2-3.png",
    answerB: "派手",
      imgB: "images/around2-4.png",
    formType: "around",
  },
  {
    question: "容姿のコンディションは",
    answerA: "かわいい",
      imgA: "images/around2-5.png",
    answerB: "かっこいい",
      imgB: "images/around2-6.png",
    formType: "around",
  },
  {
    question: "今眠りにつくなら",
    answerA: "ハンモックの上",
      imgA: "images/around2-7.png",
    answerB: "お布団の中",
      imgB: "images/around2-8.png",
    formType: "around",
  },
  {
    question: "必要なものは",
    answerA: "愛",
      imgA: "images/around2-9.png",
    answerB: "金",
      imgB: "images/around2-10.png",
    formType: "around",
  },
  {
    question: "重要なのは",
    answerA: "容姿",
      imgA: "images/base2-1.png",
    answerB: "性格",
      imgB: "images/base2-2.png",
    formType: "base",
  },
  {
    question: "海で子供が溺れている",
    answerA: "助ける",
      imgA: "images/base2-3.png",
    answerB: "助けない",
      imgB: "images/base2-4.png",
    formType: "base",
  },
  {
    question: "次に生まれ変わるなら",
    answerA: "鳥",
      imgA: "images/base2-5.png",
    answerB: "虫",
      imgB: "images/base2-6.png",
    formType: "base",
  },
  {
    question: "無人島に持っていくなら",
    answerA: "食料",
      imgA: "images/base2-7.png",
    answerB: "本",
      imgB: "images/base2-8.png",
    formType: "base",
  },
  {
    question: "好きな食べ物は",
    answerA: "先に食べる",
      imgA: "images/base2-9.png",
    answerB: "後に食べる",
      imgB: "images/base2-10.png",
    formType: "base",
  },
  {
    question: "今欲しいのは",
    answerA: "どこでもドア",
      imgA: "images/cover2-1.png",
    answerB: "タケコプター",
      imgB: "images/cover2-2.png",
    formType: "cover",
  },
  {
    question: "人に言えない秘密が",
    answerA: "ある",
      imgA: "images/cover2-3.png",
    answerB: "ない",
      imgB: "images/2-4.png",
    formType: "cover",
  },
  {
    question: "自分は運が",
    answerA: "良い",
      imgA: "images/cover2-5.png",
    answerB: "悪い",
      imgB: "images/cover2-6.png",
    formType: "cover",
  },
  {
    question: "恋人にするなら",
    answerA: "年上",
      imgA: "images/cover2-7.png",
    answerB: "年下",
      imgB: "images/cover2-8.png",
    formType: "cover",
  },
  {
    question: "海外旅行するなら",
    answerA: "南の島",
      imgA: "images/cover2-9.png",
    answerB: "雪国",
      imgB: "images/cover2-10.png",
    formType: "cover",
  },
  {
    question: "共感できるのは",
    answerA: "信長",
      imgA: "images/Ltype2-1.png",
    answerB: "家康",
      imgB: "images/Ltype2-2.png",
    formType: "Ltype",
  },
  {
    question: "病院を色に例えると",
    answerA: "赤",
      imgA: "images/Ltype2-3.png",
    answerB: "白",
      imgB: "images/Ltype2-4.png",
    formType: "Ltype",
  },
  {
    question: "大阪といったら",
    answerA: "たこ焼き",
      imgA: "images/Ltype2-5.png",
    answerB: "お好み焼き",
      imgB: "images/Ltype2-6.png",
    formType: "Ltype",
  },
  {
    question: "どっちが得？",
    answerA: "男",
      imgA: "images/Ltype2-7.png",
    answerB: "女",
      imgB: "images/Ltype2-8.png",
    formType: "Ltype",
  },
  {
    question: "会話ができるならどっち",
    answerA: "バイク",
      imgA: "images/Ltype2-9.png",
    answerB: "ペット",
      imgB: "images/Ltype2-10.png",
    formType: "Ltype",
  },
  {
    question: "愛は地球を",
    answerA: "救う",
      imgA: "images/side2-1.png",
    answerB: "救わない",
      imgB: "images/side2-2.png",
    formType: "side",
  },
  {
    question: "ネット上で異性のフリをしたことが",
    answerA: "ある",
      imgA: "images/side2-3.png",
    answerB: "ない",
      imgB: "images/side2-4.png",
    formType: "side",
  },
  {
    question: "怖いのは",
    answerA: "お化け",
      imgA: "images/side2-5.png",
    answerB: "UFO",
      imgB: "images/side2-6.png",
    formType: "side",
  },
  {
    question: "ツラい時は",
    answerA: "寝る",
      imgA: "images/side2-7.png",
    answerB: "遊ぶ",
      imgB: "images/side2-8.png",
    formType: "side",
  },
  {
    question: "欲しいのは",
    answerA: "読心能力",
      imgA: "images/side2-9.png",
    answerB: "未来予知",
      imgB: "images/side2-10.png",
    formType: "side",
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
  result01.innerHTML = `<img src="${answerArray[0]}" width="400" height="400">`;
  result02.innerHTML = `<img src="${answerArray[1]}" width="400" height="400">`;
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

