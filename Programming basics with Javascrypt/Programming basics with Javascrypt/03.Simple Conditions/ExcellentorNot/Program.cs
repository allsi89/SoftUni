using System;

namespace ExcellentorNot
{
    class Program
    {
        static void Main(string[] args)
        {
            var grade = double.Parse(Console.ReadLine());
            if (grade >= 5.50)
            {
                Console.WriteLine("Excellent!");
            }
            else
            {
                Console.WriteLine("Not Excellent");
            }
        }
    }
}
