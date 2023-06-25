export const questions = [
  /// INDEX 0
  {
    text: "How did you enter this country?",
    options: [
      { text: "Legally (through a port of entry)", nextQuestion: 1 },
      { text: "Illegally", nextQuestion: 28 },
    ],
  },
  /// INDEX 1
  {
    text: "Legally (through a port of entry)",
    options: [
      { text: "Has anyone ever filed for you?", nextQuestion: 2 },
      { text: "How did you come in?", nextQuestion: 4 },
    ],
  },
  /// INDEX 2
  {
    text: "Has anyone ever filed for you?",
    options: [
      { text: "Yes", nextQuestion: 3 },
      { text: "No", nextQuestion: 4 },
    ],
  },
  /// INDEX 3
  {
    text: "Yes",
    result: ["Check the priority date"],
  },
  /// INDEX 4
  {
    text: "How did you come in?",
    options: [
      { text: "With a visa", nextQuestion: 5 },
      { text: "Paroled into the country", nextQuestion: 12 },
      { text: "Student ivsa", nextQuestion: 21 },
    ],
  },
  /// INDEX 5
  {
    text: "Is your spouse or child over 21 a US citizen?",
    options: [
      { text: "Yes", nextQuestion: 6 },
      { text: "No", nextQuestion: 18 },
    ],
  },
  /// INDEX 6
  {
    text: "Is your spouse or child over 21 a US citizen?",
    result: ["Yes, redirect to Family Petition for Spouses in US"],
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
    text: "When did you arrive in this country?",
    result: ["Before November 6, 2022, redirect to TPS Initial"],
    redirect: "/doc/temporaryprotectivestatus",
  },
  /// INDEX 9
  {
    text: "Have you been in the country for less than a year?",
    options: [
      { text: "Yes", nextQuestion: 10 },
      { text: "No", nextQuestion: 11 },
    ],
  },
  /// INDEX 10
  {
    text: "Have you been in the country for less than a year?",
    result: ["Yes, redirect to Asylum"],
    redirect: "/doc/asylum",
  },
  /// INDEX 11
  {
    text: "Have you been in the country for less than a year?",
    result: ["No, no papers can be filed at this time"],
  },
  /// INDEX 12
  {
    text: "Is your spouse or child over 21 a US citizen?",
    options: [
      { text: "Yes", nextQuestion: 13 },
      { text: "No", nextQuestion: 14 },
    ],
  },
  /// INDEX 13
  {
    text: "Is your spouse or child over 21 a US citizen?",
    result: [
      "Yes, redirect to Family Petition for Parents or Child(ren) in US",
    ],
    redirect: "/doc/family-petition-with-cos",
  },
  /// INDEX 14
  {
    text: "When did you arrive in this country?",
    options: [
      { text: "Before November 6, 2022", nextQuestion: 15 },
      { text: "After November 6, 2022", nextQuestion: 16 },
    ],
  },
  /// INDEX 15
  {
    text: "When did you arrive in this country?",
    result: ["Before November 6, 2022, redirect to TPS Initial"],
    redirect: "/doc/temporaryprotectivestatus",
  },
  /// INDEX 16
  {
    text: "When did you arrive in this country?",
    options: [
      { text: "Before November 6, 2022", nextQuestion: 17 },
      { text: "After November 6, 2022", nextQuestion: 18 },
    ],
  },
  /// INDEX 17
  {
    text: "When did you arrive in this country?",
    result: ["Before November 6, 2022, redirect to TPS Initial"],
    redirect: "/doc/temporaryprotectivestatus",
  },
  /// INDEX 18
  {
    text: "After November 6, 2022",
    options: [
      { text: "Yes", nextQuestion: 19 },
      { text: "No", nextQuestion: 20 },
    ],
  },
  /// INDEX 19
  {
    text: "After November 6, 2022",
    result: ["Yes, redirect to Asylum"],
    redirect: "/doc/asylum",
  },
  /// INDEX 20
  {
    text: "After November 6, 2022",
    result: ["No, no papers can be filed at this time"],
  },
  /// INDEX 21
  {
    text: "Are you over the age of 21?",
    options: [
      { text: "Yes", nextQuestion: 22 },
      { text: "No", nextQuestion: 25 },
    ],
  },
  /// INDEX 22
  {
    text: "Is your spouse or child over 21 a US citizen?",
    options: [
      { text: "Yes", nextQuestion: 23 },
      { text: "No", nextQuestion: 24 },
    ],
  },
  /// INDEX 23
  {
    text: "Is your spouse or child over 21 a US citizen?",
    result: ["Yes, redirect to Family Petition with Change of Status"],
    redirect: "/doc/family-petition-with-cos",
  },
  /// INDEX 24
  {
    text: "Is your spouse or child over 21 a US citizen?",
    result: ["No, redirect to Asylum"],
    redirect: "/doc/asylum",
  },
  /// INDEX 25
  {
    text: "Do you have a parent who is a US citizen?",
    options: [
      { text: "Yes", nextQuestion: 26 },
      { text: "No", nextQuestion: 27 },
    ],
  },
  /// INDEX 26
  {
    text: "Do you have a parent who is a US citizen?",
    result: [
      "Yes, redirect to Family Petition for Parents/Child(ren) inside the US",
    ],
    redirect: "/doc/family-petition-with-cos",
  },
  /// INDEX 27
  {
    text: "Do you have a parent who is a US citizen?",
    result: ["No, redirect to Asylum"],
    redirect: "/doc/asylum",
  },
  /// INDEX 28
  {
    text: "Were you detained by a border agent?",
    options: [
      { text: "Yes", nextQuestion: 29 },
      { text: "No", nextQuestion: 30 },
    ],
  },
  /// INDEX 29
  {
    text: "Were you detained by a border agent?",
    result: ["Yes, redirect to Asylum"],
    redirect: "/doc/asylum",
  },
  /// INDEX 30
  {
    text: "Do you have a relative, friend, church or pastor who will sign an affidavit that you were in the country before November 6, 2022?",
    options: [
      { text: "Yes", nextQuestion: 31 },
      { text: "No", nextQuestion: 32 },
    ],
  },
  /// INDEX 31
  {
    text: "Do you have a relative, friend, church or pastor who will sign an affidavit that you were in the country before November 6, 2022?",
    result: ["Yes, redirect to TPS Initial"],
    redirect: "/doc/temporaryprotectivestatus",
  },
  /// INDEX 32
  {
    text: "Do you have a relative, friend, church or pastor who will sign an affidavit that you were in the country before November 6, 2022?",
    result: ["No, redirect to Asylum"],
    redirect: "/doc/asylum",
  },
];
