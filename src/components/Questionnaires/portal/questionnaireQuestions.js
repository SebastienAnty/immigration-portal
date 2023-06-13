export const questions = [
  /// INDEX 0
  {
    text: "How did you enter this country?",
    options: [
      { text: "Legally (through a port of entry)", nextQuestion: 1 },
      { text: "Illegally", nextQuestion: 16 },
    ],
  },
  /// INDEX 1
  {
    text: "Select your entry type",
    options: [
      { text: "With a visa", nextQuestion: 2 },
      { text: "Paroled into the country", nextQuestion: 2 },
      { text: "Student Visa", nextQuestion: 9 },
    ],
  },
  /// INDEX 2
  {
    text: "Is your spouse or child over 21 a US citizen?",
    options: [
      { text: "Yes", nextQuestion: 3 },
      { text: "No", nextQuestion: 4 },
    ],
  },
  /// INDEX 3
  {
    text: "Petition and Change of Status",
    result: "Petition and Change of Status",
  },
  /// INDEX 4
  {
    text: "When did you arrive in this country?",
    options: [
      { text: "Before November 6, 2022", nextQuestion: 5 },
      { text: "After November 6, 2022", nextQuestion: 6 },
    ],
  },
  /// INDEX 5
  {
    text: "Temporary Protected Status (TPS)",
    result: "Temporary Protected Status (TPS)",
  },
  /// INDEX 6
  {
    text: "Have you been the country for less than a year?",
    options: [
      { text: "Yes", nextQuestion: 7 },
      { text: "No", nextQuestion: 8 },
    ],
  },
  /// INDEX 7
  {
    text: "Asylum",
    result: "Asylum",
  },
  /// INDEX 8
  {
    text: "No papers can be filed at this time.",
    result: "No papers can be filed at this time.",
  },
  /// INDEX 9
  {
    text: "Are you over the age of 21?",
    options: [
      { text: "Yes", nextQuestion: 10 },
      { text: "No", nextQuestion: 13 },
    ],
  },
  /// INDEX 10
  {
    text: "Is your spouse or child over 21 and a US citizen?",
    options: [
      { text: "Yes", nextQuestion: 11 },
      { text: "No", nextQuestion: 12 },
    ],
  },
  /// INDEX 11
  {
    text: "Petition and Change of Status",
    result: "Petition and Change of Status",
  },
  /// INDEX 12
  {
    text: "Asylum",
    result: "Asylum",
  },
  /// INDEX 13
  {
    text: "Do you have a parent who is a US citizen?",
    options: [
      { text: "Yes", nextQuestion: 14 },
      { text: "No", nextQuestion: 15 },
    ],
  },
  /// INDEX 14
  {
    text: "Petition and Change of Status",
    result: "Petition and Change of Status",
  },
  /// INDEX 15
  {
    text: "Asylum",
    result: "Asylum",
  },
  /// INDEX 16
  {
    text: "Were you detained by a border agent?",
    options: [
      { text: "Yes", nextQuestion: 17 },
      { text: "No", nextQuestion: 18 },
    ],
  },
  /// INDEX 17
  {
    text: "Asylum",
    result: "Asylum",
  },
  /// INDEX 18
  {
    text: "Do you have a relative, friend, church or pastor who will sign an affidavit that you were in the country before November 6 th 2022?",
    options: [
      { text: "Yes", nextQuestion: 19 },
      { text: "No", nextQuestion: 20 },
    ],
  },
  /// INDEX 19
  {
    text: "Temporary Protected Status (TPS)",
    result: "Temporary Protected Status (TPS)",
  },
  /// INDEX 20
  {
    text: "Asylum",
    result: "Asylum",
  },
];
