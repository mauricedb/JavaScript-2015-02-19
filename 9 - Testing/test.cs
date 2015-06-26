using NUnit.Framework;
using NUnit.Core;

namespace SeleniumTests
{
    public class Test
    {
        [Suite] public static TestSuite Suite
        {
            get
            {
                TestSuite suite = new TestSuite("Test");
                suite.Add(new Edit test());
                suite.Add(new Show movie());
                return suite;
            }
        }
    }
}
