export const familyQuestions = [
  /// INDEX 0
  {
    text: "What is the legal status of the petitioner?",
    options: [
      { text: "I am an Asylee", nextQuestion: 1 },
      { text: "I am a Resident", nextQuestion: 6 },
      { text: "I am a US Citizen", nextQuestion: 15 },
    ],
  },
  /// INDEX 1
  {
    text: "When did you get approved for asylum?",
    options: [
      { text: "I was approved less than 2 years ago.", nextQuestion: 2 },
      { text: "I was approved more than 2 years ago.", nextQuestion: 3 },
    ],
  },
  /// INDEX 2
  {
    text: "I was approved less than 2 years ago.",
    result: [
      "Apply for Spouse if the couple was married before being granted asylum.",
      "Apply for an unmarried child(ren) under 21, if child was born before granted asylum, amd under 21 when asylum was turned in.",
      "Redirect to Family Petition for Spouse/Child(ren) of Asylee.",
    ],
    redirect: "/doc/family-petition-without-cos",
  },
  /// INDEX 3
  {
    text: "Are you already a resident?",
    options: [
      { text: "Yes", nextQuestion: 4 },
      { text: "No", nextQuestion: 5 },
    ],
  },
  /// INDEX 4
  {
    text: "Are you already a resident?",
    result: [
      "Yes, redirect to Family Petition for Spouse/Child(ren) of Asylee",
    ],
    redirect: "/doc/family-petition-without-cos",
  },
  /// INDEX 5
  {
    text: "Are you already a resident?",
    result: ["Nothing can be done until you change your status."],
  },
  /// INDEX 6
  {
    text: "I am a resident",
    options: [
      { text: "Apply for spouse", nextQuestion: 7 },
      { text: "Apply for unmarried child(ren) under 21", nextQuestion: 11 },
      {
        text: "Apply for non-married son or daughter over 21",
        nextQuestion: 14,
      },
    ],
  },
  /// INDEX 7
  {
    text: "Where does your spouse live?",
    options: [
      { text: "Inside the US", nextQuestion: 8 },
      { text: "Outside the US", nextQuestion: 9 },
    ],
  },
  /// INDEX 8
  {
    text: "Did your spouse come to the US legally?",
    options: [
      { text: "Yes", nextQuestion: 10 },
      { text: "No", nextQuestion: 11 },
    ],
  },
  /// INDEX 9
  {
    text: "Did your spouse come to the US legally?",
    result: ["Yes, redirect to Family Petition for Spouses in the US."],
    redirect: "/doc/family-petition-with-cos",
  },
  /// INDEX 10
  {
    text: "Did your spouse come to the US legally?",
    result: ["No, redirect to Family Petition for Spouses outside the US."],
    redirect: "/doc/family-petition-without-cos",
  },
  /// INDEX 11
  {
    text: "Where does your child live?",
    options: [
      { text: "Inside the US", nextQuestion: 12 },
      { text: "Outside the US", nextQuestion: 13 },
    ],
  },
  /// INDEX 12
  {
    text: "Where does your child live?",
    result: [
      "Inside the US, Redirect to Family Petition for Child(ren) in the US",
    ],
    redirect: "/doc/family-petition-with-cos",
  },
  /// INDEX 13
  {
    text: "Where does your child live?",
    result: [
      "Outside the US, Redirect to Family Petition for Child(ren) outside the US",
    ],
    redirect: "/doc/family-petition-without-cos",
  },
  /// INDEX 14
  {
    text: "Apply for non-married son or daughter over 21.",
    result: [
      "Apply for non-married son or daughter over 21. Redirect to Family Petition for Parents/Child(ren) outside the US",
    ],
    redirect: "/doc/family-petition-without-cos",
  },
  /// INDEX 15
  {
    text: "I am a US Citizen",
    options: [
      { text: "Apply for spouse", nextQuestion: 16 },
      { text: "Apply for unmarried child(ren) under 21", nextQuestion: 19 },
      {
        text: "Apply for sons or daughters over 21 (married and non-married with child(ren)",
        nextQuestion: 22,
      },
      { text: "Apply for parents", nextQuestion: 23 },
    ],
  },
  /// INDEX 16
  {
    text: "Where does your spouse live?",
    options: [
      { text: "Inside the US", nextQuestion: 17 },
      { text: "Outside the US", nextQuestion: 18 },
    ],
  },
  /// INDEX 17
  {
    text: "Where does your spouse live?",
    result: ["Inside the US. Redirect to Family Petition for Spouse in the US"],
    redirect: "/doc/family-petition-with-cos",
  },
  /// INDEX 18
  {
    text: "Where does your spouse live?",
    result: [
      "Outside the US. Redirect to Family Petition for Spouse outside the US",
    ],
    redirect: "/doc/family-petition-without-cos",
  },
  /// INDEX 19
  {
    text: "Where does your underage child live?",
    options: [
      { text: "Inside the US", nextQuestion: 20 },
      { text: "Outside the US", nextQuestion: 21 },
    ],
  },
  /// INDEX 20
  {
    text: "Inside the US",
    result: [
      "Inside the US. Redirect to Family Petition for Parents/Child(ren) in the US",
    ],
    redirect: "/doc/family-petition-with-cos",
  },
  /// INDEX 21
  {
    text: "Outside the US",
    result: [
      "Outside the US. Redirect to Family Petition for Parents/Child(ren) outside the US",
    ],
    redirect: "/doc/family-petition-without-cos",
  },
  /// INDEX 22
  {
    text: "Apply for sons or daughters over 21 (married and non-married with child(ren)).",
    result: [
      "Apply for sons or daughters over 21 (married and non-married with child(ren)). Redirect to Family Petition for Parents/Child(ren) outside the US",
    ],
    redirect: "/doc/family-petition-without-cos",
  },
  /// INDEX 23
  {
    text: "Apply for parent(s).",
    options: [
      { text: "Where do your parents live?", nextQuestion: 24 },
      { text: "Apply for siblings.", nextQuestion: 27 },
    ],
  },
  /// INDEX 24
  {
    text: "Where do your parents live?",
    options: [
      { text: "Inside the US", nextQuestion: 25 },
      { text: "Outside the US", nextQuestion: 26 },
    ],
  },
  /// INDEX 25
  {
    text: "Inside the US",
    result: [
      "Inside the US. Redirect to Family Petition for Parents/Child(ren) in the US",
    ],
    redirect: "/doc/family-petition-with-cos",
  },
  /// INDEX 26
  {
    text: "Outside the US",
    result: [
      "Outside the US. Redirect to Family Petition for Parents/Child(ren) outside the US",
    ],
    redirect: "/doc/family-petition-without-cos",
  },
  /// INDEX 27
  {
    text: "Apply for siblings.",
    result: [
      "One I-130 application for each sibling - spouse and children included in the application. Redirect to Family Petition for Parents/Child(ren) outside the US",
    ],
    redirect: "/doc/family-petition-without-cos",
  },
];
