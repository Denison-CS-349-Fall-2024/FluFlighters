using Microsoft.AspNetCore.Components;
using Quizzing.Models;

namespace Quizzing.Pages
{
    public class QuizCardBase : ComponentBase
    {
        public List<Question> Questions { get; set; } = new List<Question>();
        protected int questionIndex = 0;
        protected int score = 0;

        protected override Task OnInitializedAsync()
        {
            LoadQuestions();

            return base.OnInitializedAsync();
        }

        protected void OptionSelected(string option)
        {
            if (option == Questions[questionIndex].Answer)
            {
                score++;
            }
            questionIndex++;
        }

        protected void RestartQuiz()
        {
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

            Questions.AddRange(new List<Question> { q1, q2, q3, q4 });
        }
    }
}
