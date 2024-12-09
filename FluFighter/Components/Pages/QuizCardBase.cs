using Microsoft.AspNetCore.Components;
using Quizzing.Models;

namespace Quizzing.Pages
{
    public class QuizCardBase : ComponentBase
    {
        [Parameter] public int CurrentQuestionCount { get; set; } = 0;
        [Parameter] public List<Question> QuestionCorrect { get; set; } = [];
        public List<Question> Questions { get; set; } = [];
        protected int questionIndex = 0;
        protected int score = 0;

        protected override Task OnInitializedAsync()
        {
            LoadQuestions();
            return base.OnInitializedAsync();
        }
        protected void OptionSelected(string option)
        {
            var Question = Questions[questionIndex];
            Question.AnswerSelected = option;
            if (option == Questions[questionIndex].Answer)
            {
                score++;
            }
            QuestionCorrect.Add(Question);
            ++CurrentQuestionCount;
            questionIndex++;
        }
        protected void RestartQuiz()
        {
            CurrentQuestionCount = 0;
            score = 0;
            questionIndex = 0;
        }
        private void LoadQuestions()
        {
            Question q1 = new Question
            {
                QuestionTitle = "What is the flu caused by?",
                Options = new List<string>() { "Bacteria", "Fungus", "Virus", "Parasite" },
                Answer = "Virus"
            };

            Question q2 = new Question
            {
                QuestionTitle = "Which of the following is a common symptom of the flu?",
                Options = new List<string>() { "High fever", "Sore throat", "Muscle aches", "All of the above" },
                Answer = "All of the above"
            };

            Question q3 = new Question
            {
                QuestionTitle = "How is the flu primarily spread?",
                Options = new List<string>() { "Through contaminated food", "Through the air by coughin or sneezing", "Through touching surfaces only", "Through mosquito bites" },
                Answer = "Through the air by coughing or sneezing"
            };

            Question q4 = new Question
            {
                QuestionTitle = "How often is it recommended to get a flu vaccine?",
                Options = new List<string>() { "Every 5 years", "Once in a lifetime", "Every year", "Every 6 months" },
                Answer = "Every year"
            };
            Question q5 = new Question
            {
                QuestionTitle = "What should you do if you have the flu?",
                Options = new List<string>() { "Rest and drink plenty of fluids", "Go play outside", "Eat a lot of candy", "Go to school anyway" },
                Answer = "Rest and drink plenty of fluids"
            };

            Question q6 = new Question
            {
                QuestionTitle = "What can you do to help prevent the flu?",
                Options = new List<string>() { "Wash your hands often", "Share drinks with friends", "Never cover your cough", "Skip brushing your teeth" },
                Answer = "Wash your hands often"
            };

            Question q7 = new Question
            {
                QuestionTitle = "Which animal is sometimes linked to the flu?",
                Options = new List<string>() { "Dogs", "Cats", "Birds", "Fish" },
                Answer = "Birds"
            };

            Question q8 = new Question
            {
                QuestionTitle = "What is the best thing to do if you sneeze?",
                Options = new List<string>() { "Cover your sneeze with your hands", "Sneeze into your elbow", "Sneeze into the air", "Don’t sneeze at all" },
                Answer = "Sneeze into your elbow"
            };

            Question q9 = new Question
            {
                QuestionTitle = "Why is it called the 'flu'?",
                Options = new List<string>() { "It’s short for influenza", "It’s named after a flower", "It’s named after a fruit", "No one knows" },
                Answer = "It’s short for influenza"
            };

            Question q10 = new Question
            {
                QuestionTitle = "What should you avoid sharing with others to stop the flu from spreading?",
                Options = new List<string>() { "Toys", "Food and drinks", "Clothes", "Shoes" },
                Answer = "Food and drinks"
            };
            Questions.AddRange(new List<Question> { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10 });
        }
    }
}
