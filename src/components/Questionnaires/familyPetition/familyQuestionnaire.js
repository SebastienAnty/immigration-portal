export const familyQuestions = [
  /// INDEX 0
  {
    text: "Family Petition",
    options: [
      { text: "What is your legal status?", nextQuestion: 1 },
      {
        text: "Where is the person that you are petitioning for?",
        nextQuestion: 7,
      },
    ],
  },
  /// INDEX 1
  {
    text: "What is your legal status?",
    options: [
      { text: "Asylee", nextQuestion: 2 },
      { text: "Resident", nextQuestion: 5 },
      { text: "US Citizen", nextQuestion: 6 },
    ],
  },
  /// INDEX 2
  {
    text: "When did you get approved for asylum?",
    options: [
      { text: "Less than 2 years ago", nextQuestion: 3 },
      { text: "More than 2 years ago", nextQuestion: 4 },
    ],
  },
  /// INDEX 3
  {
    text: "Less than 2 years ago",
    result: [
      "Apply for Spouse",
      "Applu for Unmarried Child under 21",
      "(Each Beneficiary needs his/her own I-130 application)",
      "(If an unmarried child has children, the child will be included in the parent's application, if the child was born before the asylum was granted)",
    ],
  },
  /// INDEX 4
  {
    text: "More than 2 years ago",
    result: "Nothing can be done until you change your status.",
  },
  /// INDEX 5
  {
    text: "Resident",
    result: [
      "Apply for Spouse",
      "Apply for underage child(ren)",
      "Apply for non-married son or daughter over 21 years old",
      "(Only one I-130 application is necessary per family)",
    ],
  },
  /// INDEX 6
  {
    text: "US Citizen",
    result: [
      "Apply for Spouse",
      "Apply for underage child(ren)",
      "Apply for son or daughter over 21 (married and non-married) with children",
      "Apply for parents",
      "Apply for siblings",
      "(Only one I-130 application necessary)",
    ],
  },
  /// INDEX 7
  {
    text: "Where is the person that you are petitioning for?",
    options: [
      { text: "Inside the US", nextQuestion: 8 },
      { text: "Outside the US", nextQuestion: 9 },
    ],
  },
  /// INDEX 8
  {
    text: "Inside the US",
    result: "Family Petition with Change of Status",
  },
  /// INDEX 9
  {
    text: "Outside the US",
    result: "Family Petition without Change of Status",
  },
];
