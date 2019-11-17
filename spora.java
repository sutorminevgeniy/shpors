System.out.print("Hello world! ");
System.out.println("Note for Java");

// Преременные
  byte a = 5; // -128 127
  short b = -100; // -32768 32767
  int c;
  c = 1000000;
  long d = 1122334455;

  float float1 = 150.32f;
  double double1 = 133.155;

  boolean boolean1 = true;

  char char1 = 'w';

  String str = "Hello!";

  System.out.println();
  System.out.println("char char1: " + char1);

// Массивы
  String[] names;
  names = new String[3];

  String[] arrString = new String[3];
  arrString[0] = "Vasya";
  arrString[1] = "Petya";
  arrString[2] = "Vanya";

  System.out.println(arrString[0]);

  int[] arrInt1 = new int[10];
  int[] arrInt2 = {15, 10, 100,9, 44};

  for (int i = 0; i < arrInt2.length; i++) {
    System.out.println(arrInt2[i]);
  }

// Операции
  int a;
  a = 10;
  a = 20;

  int b;
  b = a;

  int c, d;
  c = d = b;
  a = (b + c) * d;

  a = 13;
  b = 5;
  System.out.println(a + b); // 18
  System.out.println(a - b); // 8
  System.out.println(a * b); // 65
  System.out.println(a / b); // 2
  System.out.println(a % b); // 3

  double e = 13;
  double f = 5;
  System.out.println(e / f); // 2.6
  System.out.println(e % f); // 3.0

  System.out.println(a < b); // false
  System.out.println(a > b); // true
  System.out.println(a >= b); // true
  System.out.println(a <= b); // false
  System.out.println(a == b); // false
  System.out.println(a != b); // true
  System.out.println(a + 5 <= b); // false
  System.out.println(!(a + 5 <= b)); // true
  System.out.println(!(false)); // true

  System.out.println(a < b || a > b); // true
  System.out.println(a < b && a > b); // false

  int i = 0;
  i++;
  i--;

  i = 5;
  System.out.println(i++); // 5
  System.out.println(++i); // 7

  a = 9;
  System.out.println(Math.sqrt(a)); // 3.0
  System.out.println(Math.pow(a, 3)); // 729.0

  a += 5; // a = a + 5;
  a -= 5; // a = a - 5;
  a *= 5; // a = a * 5;
  a /= 5; // a = a / 5;
  a %= 5; // a = a % 5;

System.out.println("Good bye!");