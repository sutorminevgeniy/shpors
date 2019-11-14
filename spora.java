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
  int[] arrInt1 = new int[10];
  int[] arrInt2 = {15, 10, 100,9, 44};

  arrString[0] = "Vasya";
  arrString[1] = "Petya";
  arrString[2] = "Vanya";

  System.out.println(arrString[0]);

  for (int i = 0; i < arrInt2.length; i++) {
    System.out.println(arrInt2[i]);
  }

System.out.println("Good bye!");