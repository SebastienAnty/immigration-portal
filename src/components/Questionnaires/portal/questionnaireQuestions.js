export const questions = [
  /// INDEX 0
  {
    text: "How did you enter this country?",
    options: [
      { text: "Legally (through a port of entry)", nextQuestion: 1 },
      { text: "Illegally", nextQuestion: 19 },
    ],
  },
  /// INDEX 1
  {
    text: "Legally (through a port of entry)",
    options: [
      { text: "Has anyone ever filed for you?", nextQuestion: 2 },
      { text: "How did you come in?", nextQuestion: 5 },
    ],
  },
  /// INDEX 2
  {
    text: "Has anyone ever filed for you?",
    options: [
      { text: "Yes", nextQuestion: 3 },
      { text: "No", nextQuestion: 7 },
    ],
  },
  /// INDEX 3
  {
    text: "Check the priotity date",
    result: "Check the priotity date",
  },
  /// INDEX 4
  {
    text: "Select your entry type",
    options: [
      { text: "With a visa", nextQuestion: 5 },
      { text: "Paroled into the country", nextQuestion: 5 },
      { text: "Student Visa", nextQuestion: 12 },
    ],
  },
  /// INDEX 5
  {
    text: "Is your spouse or child over 21 a US citizen?",
    options: [
      { text: "Yes", nextQuestion: 6 },
      { text: "No", nextQuestion: 7 },
    ],
  },
  /// INDEX 6
  {
    text: "Petition and Change of Status",
    result: "Petition and Change of Status",
    redirect: "/doc/family-petition-with-cos",
  },
  /// INDEX 7
  {
    text: "When did you arrive in this country?",
    options: [
      { text: "Before November 6, 2022", nextQuestion: 8 },
      { text: "After November 6, 2022", nextQuestion: 9 },
    ],
  },
  /// INDEX 8
  {
    text: "Temporary Protected Status (TPS)",
    result: "Temporary Protected Status (TPS)",
    redirect: "/doc/temporaryprotectivestatus",
  },
  /// INDEX 9
  {
    text: "Have you been the country for less than a year?",
    options: [
      { text: "Yes", nextQuestion: 10 },
      { text: "No", nextQuestion: 11 },
    ],
  },
  /// INDEX 10
  {
    text: "Asylum",
    result: "Asylum",
    redirect: "/doc/asylum",
  },
  /// INDEX 11
  {
    text: "No papers can be filed at this time.",
    result: "No papers can be filed at this time.",
  },
  /// INDEX 12
  {
    text: "Are you over the age of 21?",
    options: [
      { text: "Yes", nextQuestion: 13 },
      { text: "No", nextQuestion: 16 },
    ],
  },
  /// INDEX 13
  {
    text: "Is your spouse or child over 21 and a US citizen?",
    options: [
      { text: "Yes", nextQuestion: 14 },
      { text: "No", nextQuestion: 15 },
    ],
  },
  /// INDEX 14
  {
    text: "Petition and Change of Status",
    result: "Petition and Change of Status",
    redirect: "/doc/family-petition-with-cos",
  },
  /// INDEX 15
  {
    text: "Asylum",
    result: "Asylum",
  },
  /// INDEX 16
  {
    text: "Do you have a parent who is a US citizen?",
    options: [
      { text: "Yes", nextQuestion: 17 },
      { text: "No", nextQuestion: 18 },
    ],
  },
  /// INDEX 17
  {
    text: "Petition and Change of Status",
    result: "Petition and Change of Status",
    redirect: "/doc/family-petition-without-cos",
  },
  /// INDEX 18
  {
    text: "Asylum",
    result: "Asylum",
    redirect: "/doc/asylum",
  },
  /// INDEX 19
  {
    text: "Were you detained by a border agent?",
    options: [
      { text: "Yes", nextQuestion: 20 },
      { text: "No", nextQuestion: 21 },
    ],
  },
  /// INDEX 20
  {
    text: "Asylum",
    result: "Asylum",
    redirect: "/doc/asylum",
  },
  /// INDEX 21
  {
    text: "Do you have a relative, friend, church or pastor who will sign an affidavit that you were in the country before November 6th 2022?",
    options: [
      { text: "Yes", nextQuestion: 22 },
      { text: "No", nextQuestion: 23 },
    ],
  },
  /// INDEX 22
  {
    text: "Temporary Protected Status (TPS)",
    result: "Temporary Protected Status (TPS)",
    redirect: "/doc/temporaryprotectivestatus",
  },
  /// INDEX 23
  {
    text: "Asylum",
    result: "Asylum",
    redirect: "/doc/asylum",
  },
];
