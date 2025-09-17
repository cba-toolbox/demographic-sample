/* 課題に関するコードを以下に書く */
// 年齢
const age_question = {
    type: jsPsychSurveyText,
    questions: [
      {
        prompt: 'あなたの年齢を半角数字で入力してください。',
        name: 'age',
        required: true,
        placeholder: '例: 25'
      }
    ],
    button_label: '次へ'
};

//性別
const gender_question = {
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: "あなたの性別を選択してください。",
        name: 'gender',
        options: ['男性', '女性', 'その他', '回答しない'],
        required: true
      }
    ],
    button_label: '次へ'
};

/*タイムラインの設定*/
var timeline = [age_question, gender_question];
