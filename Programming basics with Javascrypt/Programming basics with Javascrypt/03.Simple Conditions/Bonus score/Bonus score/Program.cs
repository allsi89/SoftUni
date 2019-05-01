using System;

namespace Bonus_score
{
    class Program
    {
        static void Main(string[] args)
        {
            var num = double.Parse(Console.ReadLine());
            var bonus = 0.0;
            if (num <= 100) // <= 100
            {
                bonus = bonus + 5;
            }
            else if (num <= 1000) // [101 ... 1000]
            {
                bonus = (num * 0.2);
            }
            else // > 1000
            {
                bonus = (bonus + num * 0.10);
            }
            if (num % 2 == 0)
            {
                bonus = (bonus + 1);
            }
            else if (num % 10 == 5)
            {
                bonus = (bonus + 2);
            }
            Console.WriteLine(bonus);
            Console.WriteLine(bonus + num);
            }
        }
    }
