using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace TestNguyenTranQuocBao
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            ClassLibraryNguyenTranQuocBao.Class1 o = new ClassLibraryNguyenTranQuocBao.Class1();
            bool ect = o.CheckTriangle(-1, 2, 3);
            bool act = false;
            Assert.AreEqual(ect, act);
        }
        [TestMethod]
        public void TestMethod2()
        {
            ClassLibraryNguyenTranQuocBao.Class1 o = new ClassLibraryNguyenTranQuocBao.Class1();
            bool ect = o.CheckTriangle(1, -2, 3);
            bool act = false;
            Assert.AreEqual(ect, act);
        }
        [TestMethod]
        public void TestMethod3()
        {
            ClassLibraryNguyenTranQuocBao.Class1 o = new ClassLibraryNguyenTranQuocBao.Class1();
            bool ect = o.CheckTriangle(1, 2, -3);
            bool act = false;
            Assert.AreEqual(ect, act);
        }
        [TestMethod]
        public void TestMethod4()
        {
            ClassLibraryNguyenTranQuocBao.Class1 o = new ClassLibraryNguyenTranQuocBao.Class1();
            bool ect = o.CheckTriangle(1, 2, 5);
            bool act = false;
            Assert.AreEqual(ect, act);
        }
        [TestMethod]
        public void TestMethod5()
        {
            ClassLibraryNguyenTranQuocBao.Class1 o = new ClassLibraryNguyenTranQuocBao.Class1();
            bool ect = o.CheckTriangle(1, 3, 1);
            bool act = false;
            Assert.AreEqual(ect, act);
        }
        [TestMethod]
        public void TestMethod6()
        {
            ClassLibraryNguyenTranQuocBao.Class1 o = new ClassLibraryNguyenTranQuocBao.Class1();
            bool ect = o.CheckTriangle(3, 2, 1);
            bool act = true;
            Assert.AreEqual(ect, act);
        }
        [TestMethod]
        public void TestMethod7()
        {
            ClassLibraryNguyenTranQuocBao.Class1 o = new ClassLibraryNguyenTranQuocBao.Class1();
            bool ect = o.CheckTriangle(4, 5, 7);
            bool act = true;
            Assert.AreEqual(ect, act);
        }
    }
}
